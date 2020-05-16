<template>
    <div>
        <summary>{{ courseName }}</summary>
        <div class="detail-body">
            <p>
                대학 : {{ univ }}<br>
                강의명 : {{ courseName }}<br>
                교수 : {{ prof }}<br>
                수강학기 : {{ courseYear }} - {{ courseSemester }}<br>
                강의평 : {{ content }}<br>
                과제 : {{ assignment }}<br>
                시험 : {{ test }}<br>
                출결 : {{ attend }}<br>
                별점 : {{ star }}<br><br>
            </p>
        </div>
    </div>
</template>

<script>
    import { computed } from "@vue/composition-api"
    export default {
        name: "detail",
        props: {
            univ: {
                type: String,
                default: ""
            },
            courseName: {
                type: String,
                default: ""
            },
            prof: {
                type: String,
                default: ""
            },
            courseYear: {
                type: String,
                default: ""
            },
            courseSemester: {
                type: String,
                default: ""
            },
            content: {
                type: String,
                default: ""
            },
            assignment: {
                type: String,
                default: ""
            },
            test: {
                type: String,
                default: ""
            },
            attendance: {
                type: Boolean,
                default: true
            },
            start: {
                type: Number,
                default: 0
            }
        },
        setup(props) {
            const attend = computed(() => {
                return props.attendance ? '출석':'결석'
            })

            return { attend }
        },
    }
</script>

<style scoped>

</style>