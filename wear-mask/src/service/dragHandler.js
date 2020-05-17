function AddImageDragHandler(canvasSelector, img, WIDTH,HEIGHT){
    //마우스를 누를 때와 뗄 떼를 이용해 isDragging flag를 달음.

    console.log(canvasSelector)
    console.log(document.querySelector(canvasSelector))
      var canvas=document.querySelector(canvasSelector);
      var ctx=canvas.getContext("2d");
      var offsetX=canvas.offsetLeft;
      var offsetY=canvas.offsetTop;
      var canvasWidth=canvas.width;
      var canvasHeight=canvas.height;
      var isDragging=false;
    let canMouseX=0, canMouseY=0;
      //canMouseX와 canMouseY는 캔버스 내에서의 좌표
      function handleMouseDown(e){
        canMouseX=parseInt(e.clientX-offsetX);
        canMouseY=parseInt(e.clientY-offsetY);
        // set the drag flag
        isDragging=true;
      }

      function handleMouseUp(e){
        canMouseX=parseInt(e.clientX-offsetX);
        canMouseY=parseInt(e.clientY-offsetY);
        // clear the drag flag
        isDragging=false;
        console.log(canMouseX,",",canMouseY)
      }

      function handleMouseOut(e){
        canMouseX=parseInt(e.clientX-offsetX);
        canMouseY=parseInt(e.clientY-offsetY);
        // user has left the canvas, so clear the drag flag
        isDragging=false;
      }

      function handleMouseMove(e){
        canMouseX=parseInt(e.clientX-offsetX);
        canMouseY=parseInt(e.clientY-offsetY);
        console.log(canMouseX, ", ", canMouseY)
        // console.log(canMouseY)
        // if the drag flag is set, clear the canvas and draw the image
        if(isDragging){
            ctx.clearRect(0,0,canvasWidth,canvasHeight);
            // let widthRatio = parseInt(document.querySelector("#imgWidthRatio").value)
            // let heightRatio = parseInt(document.querySelector("#imgHeightRatio").value)
            // let imgWidth = WIDTH*widthRatio
            // let imgHeight = HEIGHT*heightRatio
            let imgWidth=WIDTH, imgHeight=HEIGHT
            ctx.drawImage(img,canMouseX-imgWidth/2,canMouseY-imgHeight/2,imgWidth,imgHeight);
        }
      }

      $("#canvas").mousedown(function(e){handleMouseDown(e);});
      $("#canvas").mousemove(function(e){handleMouseMove(e);});
      $("#canvas").mouseup(function(e){handleMouseUp(e);});
      $("#canvas").mouseout(function(e){handleMouseOut(e);});

  }

export default AddImageDragHandler