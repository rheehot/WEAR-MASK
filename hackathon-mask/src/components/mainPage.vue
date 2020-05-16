<template>
    <div>
        <div>
            <full-page ref="fullpage" :options="options" id="fullpage">
                <div class="section">
                    <p class="title">#WearingMaskChallenge</p>
                    <photo-upload/>
                </div>
                <div class="section">
                    <div class="section2-msg"><p>우리는 늘 이겨냈고, 이번에도 함께 이겨낼 것입니다.</p>
                        <p>힘든 시기를 헤쳐 나가는 모든 분들을 응원합니다.</p><br>
                        <span>AUSG JSY Team</span>
                    </div>
                </div>
            </full-page>
        </div>
    </div>
</template>

<script>
    import photoUpload from './photoUpload.vue';
    import {reactive, toRefs} from "@vue/composition-api";
    export default {
        name: "mainPage",
        components: {
            photoUpload
        },
        setup() {
            const state = reactive({
                options: {
                    menu: '#menu',
                    anchors: ['page1', 'page2'],
                    sectionsColor: ['#000000', '#000000']
                },
            })

            return {
                ...toRefs(state),
            }
        }
    }
</script>

<style lang="scss" scoped>
    .title {
        color: orange;
        font-weight: bold;
        font-size: 5rem;
        text-align: center;
        margin-top: -10rem;
        font-family: 'Lato', sans-serif;
    }
    .section2-msg {
        color: orange;
        text-align: center;
        p {
            font-size: 3rem;
            font-family: 'Do Hyeon', sans-serif;
        }
        span {
            font-size: 2rem;
            font-family: 'Do Hyeon', sans-serif;
        }
    }
</style>