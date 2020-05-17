<template>
    <div>
        <div>
            <full-page ref="fullpage" :options="options" id="fullpage">
                <div class="section">
                    <p class="title">#WearMask</p>
                    <rekognition/>
                </div>
                <div class="section">
                    <div class="section2-msg"><p>By doing our part, we will get through this.</p>
                        <p>We cheer for everyone who is going through difficult times.</p><br>
                    </div>
                    <div>
                        <img src="../assets/logo-black@1x.png" class="ausg-logo">
                    </div>
                </div>
            </full-page>
        </div>
    </div>
</template>

<script>
    import rekognition from './rekognition.vue';
    import {reactive, toRefs} from "@vue/composition-api";
    export default {
        name: "mainPage",
        components: {
            rekognition
        },
        setup() {
            const state = reactive({
                options: {
                    licenseKey: 'YOUR_KEY_HERE',
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
        font-size: 7rem;
        text-align: center;
        margin-top: -3rem;
        font-family: 'Quicksand', sans-serif;
        text-shadow: 3px 3px 3px #1a1a1a;
    }
    .section2-msg {
        color: orange;
        text-align: center;
        font-family: 'Quicksand', sans-serif;
        p {
            font-size: 2.5rem;
        }
        span {
            font-size: 2rem;
        }
    }
    .ausg-logo {
        width: 10.5rem;
        position: absolute;
        right: 0px;
        bottom: 0px;
    }
</style>