<template>
    <div>
        <div class="file-upload-form">
            Upload an image file: <br>
            <input type="file" @change="previewImage($event)" accept="image/*">
        </div>
        <div class="image-preview" v-if="imageData.length > 0">
            <img class="preview" :src="imageData">
        </div>
    </div>
</template>

<script>
    import {reactive, toRefs, computed} from "@vue/composition-api";

    export default {
        name: "photoUpload",
        setup() {
            const state = reactive({
                imageData: "",
            })

            const previewImage = (event) => {
                let input = event.target;
                if (input.files && input.files[0]) {
                    let reader = new FileReader();
                    reader.onload = (e) => {
                        state.imageData = e.target.result;
                    }
                    reader.readAsDataURL(input.files[0]);
                }
            }

            return {
                ...toRefs(state),
                previewImage,
            }
        }
    }
</script>

<style scoped>
    .file-upload-form, .image-preview {
        font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
        padding: 20px;
        text-align: center;
    }
    img.preview {
        width: 300px;
        background-color: white;
        border: 1px solid #DDD;
        padding: 5px;
    }
</style>