/**
Display a project as a component
 */
<template>
    <div class="project-wrapper">
        <h2>{{ projectName }}</h2> 
        <p><a :href="projectLink">{{ linkText }}</a></p>
        <p><slot></slot></p>
        <ImageViewer images="images"/>
    </div>
</template>

<script>
import ImageViewer from "./ImageViewer.vue"
export default {
    name: "ProjectCard",
    components: {
        ImageViewer
    },
    props: ["projectName", "projectLink", "linkText",  "images"]
}
</script>

<style scoped>
    .project-wrapper {
        padding: 10px;
        display: block;
    }

    img {
        max-width: 100%;
    }
</style>
