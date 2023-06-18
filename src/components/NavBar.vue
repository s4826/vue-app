/**
This component controls three navbar states, based on the size of the viewport.
 */
<template>
    <div v-if="location === 'offScreenRight'" class="navbar top flex-end">
        <img :src="hamburgerIcon"
            @click="navBarVisible ? slideOutNavBar() : slideInNavBar()"
            @focusout="slideOutNavBar"
            alt="Popout menu icon"
            id="hamburger-icon"
            tabindex="1"
        >
    </div>
    <div class="navbar" :class="location">
        <NavLink href="/"
            :imageSrc="homeIcon"
            imageAlt="Home icon"
            navText="Home"
            name="home"
        />
        <NavLink href="/about"
            :imageSrc="aboutIcon"
            imageAlt="Head and shoulders silhouette icon"
            navText="About Me"
            name="about"
        />
        <NavLink href="/projects"
            :imageSrc="projectIcon"
            imageAlt="Open folder icon"
            navText="Projects"
            name="projects"
        />
        <NavLink href="https://github.com/s4826"
            external=true
            :imageSrc="githubIcon"
            imageAlt="Github logo"
            navText="Github"
        />
        <NavLink href="https://www.linkedin.com/in/sean-rawson"
            external=true
            :imageSrc="linkedinIcon"
            imageAlt="Linked in logo"
            navText="Linked In"
        />
        <NavLink href="/contact"
            :imageSrc="contactIcon"
            imageAlt="Phone and mail icon"
            navText="Contact"
            name="contact"
        />
    </div>
</template>

<script>
import NavLink from "./NavLink.vue";
import { windowSize } from "../WindowSize.js"

export default {
    name: "NavBar",
    components: {
        NavLink
    },
    data() {
        return {
            location: "",
            navBarVisible: false,
            homeIcon: require("../assets/images/home.png"),
            aboutIcon: require("../assets/images/silhouette.png"),
            projectIcon: require("../assets/images/open-folder.png"),
            githubIcon: require("../assets/images/github-mark.png"),
            linkedinIcon: require("../assets/images/linkedin.png"),
            contactIcon: require("../assets/images/contact.png"),
            hamburgerIcon: require("../assets/images/menu.png")
        }
    },
    methods: {
        handleResize() {
            if (windowSize() === "small") {
                this.location = "offScreenRight";
            } else if (windowSize() === "medium") {
                this.location = "top";
            } else {
                this.location = "left";
            }
        },
        slideInNavBar() {
            let nav = document.getElementsByClassName("offScreenRight")[0];
            nav.style.right = "0px";
            this.navBarVisible = true;
        },
        slideOutNavBar() {
            let nav = document.getElementsByClassName("offScreenRight")[0];
            setTimeout(() => {
                nav.style.right = "-200px", 200;
                this.navBarVisible = false;
            });
        }
    },
    created() {
        this.handleResize();
    },
    mounted() {
        window.addEventListener("resize", this.handleResize);
    },
    unmounted() {
        window.removeEventListener("resize", this.handleResize);
    }
}
</script>

<style scoped>
    .navbar {
        background-color: var(--nav-color);
        display: flex;
        padding: var(--nav-padding);
        gap: 5px;
    }

    .top {
        max-height: var(--max-nav-height);
        max-width: 100vw;
        flex-direction: row;
        border-bottom: solid thin;
    }

    .left {
        max-width: var(--max-nav-width);
        height: 100vh;
        flex-direction: column;
        border-right: solid thin;
    }

    .offScreenRight {
        position: absolute;
        top: calc(var(--max-nav-height) + (var(--nav-padding) * 2) + 2px);
        right: -200px;
        width: var(--max-nav-width);
        flex-direction: column;
        border-radius: 5px;
        box-shadow: -1px 1px 2px 1px #666699;
        transition: right 400ms ease-out 0s;
    }

    .flex-end {
        justify-content: flex-end;
    }

    #hamburger-icon:hover {
        cursor: pointer;
    }
</style>
