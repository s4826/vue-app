/**
Simple component to display information about the website owner.
 */
<template>
    <div class="about-wrapper">
        <h1>About Me</h1>
        <p>
            <img :src="headshot" alt="A professional headshot">
            I'm a former line cook and bread baker turned developer. Throughout my life
            I've loved computers and puzzles. Programming has been the most natural intersection of those two passions, and
            so I find myself making a career change at 37 to pursue what truly interests me. I'm excited about the continual
            learning and growth that's required in the industry!
        </p>
        <p>
            I first started programming in college with Java. Through courses in data structures and algorithms, computer
            architecture, and databases, I found plenty to sink my teeth into. Since then, I've worked mainly in Python and
            Java. I'm looking forward to growing my skills in HTML, CSS, and Javascript with current coursework in front-end
            development. I'm also quite fond of Vim and its endless customizability.
        </p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            headshot: require("../assets/images/headshot.png")
        }
    } 
}
</script>

<style scoped>
    img {
        float: left;
        margin-right: 10px;
        max-width: 33%;
    }
    .about-wrapper {
        padding: var(--router-view-padding); 
    }
</style>
