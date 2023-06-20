/**
  Parent component to hold all ProjectCard components.
 */
<template>
    <div class="project-wrapper">
        <ProjectCard class="project"
            projectName="MBTA Bustracker"
            projectLink="https://www.mbtabustrackerapp.com"
            linkText="Website"
            :images="project1"
        >
            A simple app to check bus arrival times in the Boston area. It uses the MBTA's v3 API
            to get arrival time updates, and is built using Python, Flask, Javascript, Bootstrap, and HTML.
        </ProjectCard>
        <ProjectCard class="project"
            projectName="Text Twist"
            projectLink="https://github.com/s4826/TextTwistClone"
            linkText="View on Github"
            :images="project2"
        >
            A clone of the word game Text Twist, written in pure Python.
        </ProjectCard>
        <ProjectCard class="project"
            projectName="This website!"
            :images="project3"
        >
            This site was a final project for a front-end web development course at Boston University.
            It uses Vue, Javascript, CSS, and HTML. 
        </ProjectCard>
    </div>
</template>

<script>
import ProjectCard from "./ProjectCard.vue"
import { project1, project2, project3 } from "../assets/projectImages.js"

export default {
    name: "ProjectComponent",
    components: {
        ProjectCard
    },
    data() {
        return {
            project1,
            project2,
            project3
        }
    }
}
</script>

<style scoped>
    .project-wrapper {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        padding: var(--router-view-padding);
        flex-grow: 1;
        gap: 15px;
    }
</style>
