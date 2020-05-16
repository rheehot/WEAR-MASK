<template>
    <div window>
        <div class="main">
            <h1>추천 강의 Top 5</h1>
            <br>
            <br>
            <br>
            <details v-for="item in review" v-bind:key="item.id">
                <detail v-bind="item"></detail>
<!--                item이 object면 v-bind에서 이름 기준으로 넘어감-->
            </details>

        </div>
    </div>
</template>

<script>
    import detail from '@/components/detail';
    import { ref } from '@vue/composition-api';
    export default {
        name: "recommend",
        components: {detail},
        setup() {
            const review = ref([
                {"courseName":"수강명", "univ":"대학", "prof":"교수", "courseYear":"수강년", "courseSemester":"수강학기", "content":"강의평",
                    "assignment":"과제", "test":"시험", "attendance":true, "star":"별"},
                {"courseName":"수강명", "univ":"대학", "prof":"교수", "courseYear":"수강년", "courseSemester":"수강학기", "content":"강의평",
                    "assignment":"과제", "test":"시험", "attendance":true, "star":"별"},
                {"courseName":"수강명", "univ":"대학", "prof":"교수", "courseYear":"수강년", "courseSemester":"수강학기", "content":"강의평",
                    "assignment":"과제", "test":"시험", "attendance":false, "star":"별"},
                {"courseName":"수강명", "univ":"대학", "prof":"교수", "courseYear":"수강년", "courseSemester":"수강학기", "content":"강의평",
                    "assignment":"과제", "test":"시험", "attendance":false, "star":"별"},
                {"courseName":"수강명", "univ":"대학", "prof":"교수", "courseYear":"수강년", "courseSemester":"수강학기", "content":"강의평",
                    "assignment":"과제", "test":"시험", "attendance":true, "star":"별"}
            ])
            return { review };
        }
    }
</script>