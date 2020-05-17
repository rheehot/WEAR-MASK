// Image를 선택하는 Input의 ID를 파라미터로 입력.
async function getFaceInfo(imageData) {
  AWS.config.region = "ap-northeast-2"; // 리전
  AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: "ap-northeast-2:1ea17bad-714a-4e6e-9fee-e4203f40ebb4",
  });
  // Make the call to obtain credentials
  AWS.config.credentials.get();

  const rekognition = new AWS.Rekognition();
  const params = {
    Image: {
      Bytes: imageData,
    },
    Attributes: ["ALL"],
  };

  return new Promise((resolve, reject) => {
    rekognition.detectFaces(params, (err, data) => {
      if (err) {
        reject(err);
      }
      console.log(data)
      const faceInfo = data.FaceDetails[0];

      const result = {
        face: {
          width: faceInfo["BoundingBox"]["Width"],
          height: faceInfo["BoundingBox"]["Height"],
          top: faceInfo["BoundingBox"]["Top"],
          left: faceInfo["BoundingBox"]["Left"],
        },
        mask: {
          width: faceInfo["BoundingBox"]["Width"]*0.9, //뭔가 0.9가 더 잘 됨;;
          height: faceInfo["BoundingBox"]["Height"] *3/ 5,
          top:
            faceInfo["BoundingBox"]["Top"] +
            (faceInfo["BoundingBox"]["Height"] * 2) / 5,
          left: faceInfo["BoundingBox"]["Left"],
        },
        rotation: {
          xy: faceInfo["Pose"]["Yaw"],
          yz: faceInfo["Pose"]["Roll"],
          zx: faceInfo["Pose"]["Pitch"],
        },
      };
      console.log(result)
      resolve(result);
    });
  });
}

async function ProcessImage(imageData) {
  //Promise return을 위해 전체를 감쌈
  return new Promise(async (res, rej)=>{
    console.log("imageData")
    console.log(imageData)
    let image = null;
    let jpg = true;
    try {
      image = atob(imageData.split("data:image/jpeg;base64,")[1]);
    } catch (e) {
      jpg = false;
    }
    if (jpg == false) {
      try {
        image = atob(imageData.split("data:image/png;base64,")[1]);
      } catch (e) {
        alert("Not an image file Rekognition can process");
        rej();
      }
    }
    //unencode image bytes for Rekognition DetectFaces API
    const length = image.length;
    let imageBytes = new ArrayBuffer(length);
    const ua = new Uint8Array(imageBytes);
    for (let i = 0; i < length; i++) {
      ua[i] = image.charCodeAt(i);
    }
    //Call Rekognition
    const faceInfo = await getFaceInfo(imageBytes);
    res(faceInfo);
  })
}

export default ProcessImage
