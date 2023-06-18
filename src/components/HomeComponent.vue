<template>
    <main>
        <img id="headshot" :src="headshot" alt="A black and white headshot of myself">
        <h1>Welcome! I'm Sean</h1>
        <p>
            I've created this page to tell people a little more about myself and my work.
        </p>
        <h3>Here are some resources that I've found helpful in my studies.</h3>
        <ul>
            <li>
                <a href="https://missing.csail.mit.edu">The Missing Semester</a>
                <iframe class="video" src="https://www.youtube.com/embed/Z56Jmr9Z34Q" allowfullscreen></iframe>
                <p class="print">https://missing.csail.mit.edu</p>
            </li>
            <li>
                <a href="https://learnvimscriptthehardway.stevelosh.com">Learn Vimscript The Hard Way</a>
                <p class="print">https://learnvimscriptthehardway.stevelosh.com</p>
            </li>
            <li>
                <a href="https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-i-hello-world">The Flask Mega-Tutorial</a>
                <p class="print">https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-i-hello-world</p>
            </li>
        </ul>
    </main>
</template>

<script>
export default {
    data() {
        return {
            headshot: require("../assets/images/bw_headshot.jpg")
        }
    } 
}
</script>

<style scoped>
    img {
        width: 33%;
        max-width: 200px; 
    }
</style>