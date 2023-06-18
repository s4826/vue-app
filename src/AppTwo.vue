<template>
    <div class="wrapper">
        <ImageViewer images="project1"/>
        <ImageViewer images="project2"/>
    </div>
</template>

<script>
import ImageViewer from "./components/ImageViewer.vue"
import { project1, project2 } from "./assets/projectImages.js"

export default {
    name: "AppTwo",
    components: {
        ImageViewer
    },
    data() {
        return {
            project1,
            project2
        }
    }
}
</script>

<style>
    .wrapper {
        height: 100%;
    }
</style>