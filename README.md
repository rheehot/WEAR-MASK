
## #Wear Mask! #친구야너도마스크쓰자  

> AUSG에서 가볍게 진행해 본 온라인 해커톤입니다. 주제는 대학생과 코로나  `ㅜ.ㅜ`...!

&nbsp;

**:sparkles: 주제 및 목적**  

    “마스크를 착용합시다!!”
	 날씨가 더워지면서 마스크 착용이 느슨해진 요즘, 특히 문제가 되는 20대를 위한 마스크 착용 장려 서비스!   
     자신의 사진에 마스크를 씌워 보면서 코로나에 대해 안일해질 수 있는 자신을 한 번 더 경각시켜봅시다.
     친구가 마스크를 벗고 놀러가 사진을 찍었다구요?! 친구 사진에 마스크를 씌워주며 친구에게 주의를 당부해줍시다!

&nbsp;


**:computer: 구현 방법**  

-   `S3`,  `CloudFront`,  `Certificate Manager`,  `Route53`
-   `S3`와  `CloudFront`를 이용해서 서버를 띄우지 않고  `HTTPS`  정적사이트 호스팅!
-   `Vue.js`
-   HTML5 Canvas
-   `Rekognition`,  `Cognito`
-   `Cognito`를 통해 사이트 접속자는 AWS 관련 Authorization을 따로 진행하지 않아도  `Rekognition`을 이용 가능.
-   `Rekognition`을 이용해 인공지능으로 사람의 얼굴 인식, 마스크를 씌울 곳을 정함.

&nbsp;
&nbsp;


**:busts_in_silhouette: 사용자 시나리오**  

-   사용자 접속, 얼굴 사진 업로드
-   Canvas로 일정한 크기로 사진을 자름.
-   `Cognito`와  `Rekognition`  으로 얼굴을 인식하고 좌표를 받아냄.
-   받아낸 좌표값을 바탕으로  `Canvas`에 랜덤하게 마스크를 그려냄
-   `Canvas`에 그려진 모습을 다운로드 가능!

&nbsp;
&nbsp;

**:mask: 데모**

![메인 페이지](https://user-images.githubusercontent.com/35549653/82133628-5ed01e00-9829-11ea-860b-a41fed5eb684.png)
&nbsp;
![마스크 착용](https://user-images.githubusercontent.com/35549653/82133624-5841a680-9829-11ea-8473-382434035cce.png)
&nbsp;
&nbsp;


**👨‍👨‍👧 파트**  

    남궁선  AWS Rekognition, AWS Cognito  
    이시연  FrontEnd  
    박진수  FrontEnd, 정적사이트 배포
