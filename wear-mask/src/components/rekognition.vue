<template>
    <div>
        <div class="file-upload-form">
            <p v-if="loading">Loading...</p>
            <p v-else>Please wear a mask!</p><br>
            <input type="file" id="file" @change="onImageUploaded($event)" accept="image/*">
            <label for="file" class="btn">Upload</label>
            <button v-if="enableDownload" class="download-btn" @click="download">Download</button>
        </div>
        <div class="image-preview" v-if="imageData.length > 0">
            <div v-if="loading"></div>
            <canvas id="canvas" style="width:500px; height:500px;" />
        </div>
    </div>
</template>

<script>
    import {reactive, toRefs, computed} from "@vue/composition-api";
    import ProcessImage from "../service/rekognition/Rekognition";
    import AddImageDragHandler from "../service/dragHandler"
    export default {
        name: "photoUpload",
        setup() {
            const state = reactive({
                imageData: '',
                enableDownload: false,
                loading: false,
            })
            let originalImage={
                height:0,
                width:0
            }

            const onImageUploaded = async (event) => {
                let canvas=document.querySelector("#canvas")
                state.loading = true;
                let imgData = await resizeImage(event)
                let result = await ProcessImage(imgData)
                await placeMask(result)
            }

            const chooseRandomMask = (items) => {
                return items[Math.floor(Math.random() * items.length)];
            }

            const placeMask = async (item) => {
                return new Promise((res, rej)=> {
                    let backgroundImg = new Image();
                    backgroundImg.src = state.imageData;
                    let img = new Image();
                    const maskImgCollection = ['white-mask.png', 'corona-mask.png', 'green-mask.png'];
                    img.src = chooseRandomMask(maskImgCollection);
                    
                    img.onload = () => {
                        let canvas = document.querySelector("#canvas")
                        let ctx = canvas.getContext("2d");
                        canvas.width = 500;
                        canvas.height = 500;
                        let mask = {
                          X: item.mask.left * 500,
                          Y: item.mask.top * 500,
                          width: item.mask.width * 500,
                          height: item.mask.height * 500,
                        };
                        
                        ctx.globalCompositeOperation='source-over';
                        ctx.drawImage(backgroundImg, 0, 0)
                        ctx.drawImage(img, mask.X, mask.Y, mask.width, mask.height)
                        state.loading = false;
                        state.enableDownload = true;
                        res();
                    }
                })
            }

            const resizeImage = async (event) => {
                return new Promise((res, rej)=>{
                    let input = event.target;
                    if (input.files && input.files[0]) {
                        let reader = new FileReader();
                        reader.onload = (e) => {
                            state.imageData = e.target.result;
                            let img = new Image();
                            img.onload=()=>{
                                let canvas = document.querySelector("#canvas")
                                let ctx = canvas.getContext("2d");
                                originalImage.width = img.width;
                                originalImage.height = img.height;

                                canvas.width=500;
                                canvas.height=500;
                                
                                ctx.drawImage(img,0,0,500,img.height*500/img.width)
                                state.imageData = canvas.toDataURL("image/png");
                                res(canvas.toDataURL("image/png"))
                            }
                            img.src = e.target.result;

                        }
                    reader.readAsDataURL(input.files[0]);
                    }
                })
            }

            const download = () => {
                const canvas = document.getElementById("canvas");
                const image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
                const link = document.createElement('a');
                link.download = "wear-mask.png";
                link.href = image;
                link.click();
            }

            return {
                ...toRefs(state),
                onImageUploaded,
                resizeImage,
                placeMask,
                download,
            }
        }
    }
</script>

<style lang="scss" scoped>
    .file-upload-form {
        padding: 20px;
        text-align: center;
        p {
            font-family: 'Noto Sans', sans-serif;
            font-size: 1.5rem;
            color: orange;
            text-align: center;
        }
        [type="file"] {
            height: 0;
            overflow: hidden;
            width: 0;
        }

        [type="file"] + label {
            background: #f15d22;
            text-align: center;
            border: none;
            border-radius: 5px;
            color: #fff;
            cursor: pointer;
            display: inline-block;
            font-family: 'Poppins', sans-serif;
            font-size: inherit;
            font-weight: 600;
            margin-bottom: 1rem;
            outline: none;
            padding: 1rem 50px;
            position: relative;
            transition: all 0.3s;
            vertical-align: middle;

            &:hover {
                background-color: darken(#ff9e4a, 10%);
            }

            &.btn {
                background-color: #F19E39;
                box-shadow: 0 6px darken(#ff9e4a, 10%);
                transition: none;
                margin-top: 0.9375rem;

                &:hover {
                    background-color: darken(#F19E39, 10%);
                    box-shadow: 0 4px darken(#bb4502, 10%);
                    top: 2px;
                }
            }
        }
        .download-btn {
            background-color: #135474;
            text-align: center;
            box-shadow: 0 6px darken(#22455a, 10%);
            border: none;
            border-radius: 5px;
            color: #fff;
            cursor: pointer;
            display: inline-block;
            font-family: 'Poppins', sans-serif;
            font-size: inherit;
            font-weight: 600;
            margin-bottom: 1rem;
            outline: none;
            padding: 1rem 50px;
            margin-left: 2rem;
            &:hover {
                background-color: darken(#135474, 10%);
                box-shadow: 0 4px darken(#22455a, 10%);
                top: 2px;
            }
        }
    }
    .image-preview {
        text-align: center;
    }


</style>