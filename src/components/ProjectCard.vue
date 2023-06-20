/**
Display a project as a component
 */
<template>
    <div class="card-wrapper">
        <h2>{{ projectName }}</h2> 
        <p><a :href="projectLink">{{ linkText }}</a></p>
        <p><slot></slot></p>
        <ImageViewer :images="images" :projectId="projectId"/>
    </div>
</template>

<script>
import ImageViewer from "./ImageViewer.vue"
export default {
    name: "ProjectCard",
    components: {
        ImageViewer
    },
    props: ["projectName", "projectLink", "linkText", "projectId", "images"]
}
</script>

<style scoped>
    .card-wrapper {
        padding: 10px;
        display: block;
        min-width: 250px;
        max-width: 400px;
        width: 40%;
    }
</style>
