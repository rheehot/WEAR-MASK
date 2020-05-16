<template>
    <div>
        <p>hello!</p>
        <photoUpload/>
    </div>
</template>

<script>
    import photoUpload from './photoUpload.vue';
    export default {
        name: "mainPage",
        components: {
            photoUpload
        }
    }
</script>

<style scoped>

</style>