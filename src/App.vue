/**
 Main App component
 */
<template>
    <div class="app-wrapper" :class="{ smallDisplay: smallDisplay, 'flex-row': flexRow, 'flex-column': flexColumn }">
        <NavBar />
        <router-view :class="margin"/>
    </div>
</template>

<script>
import NavBar from "./components/NavBar.vue"
import { windowSize } from "./WindowSize.js"

export default {
    name: "App",
    components: {
        NavBar
    },
    data() {
        return {
            flexDirection: "",
            smallDisplay: false,
            margin: ""
        }
    },
    methods: {
        handleFlexChangeOnResize() {
            this.margin = "margin-top"
            this.flexDirection = "flex-column";

            if (windowSize() === "small") {
                this.smallDisplay = true;
            } else if (windowSize() === "medium") {
                this.smallDisplay = false;
            } else {
                this.flexDirection = "flex-row";
                this.smallDisplay = false;
                this.margin = "margin-left"
            }
        }
    },
    computed: {
        flexRow() {
            return this.flexDirection === "flex-row";
        },
        flexColumn() {
            return this.flexDirection === "flex-column";
        }
    },
    created() {
        this.handleFlexChangeOnResize();
    },
    mounted() {
        window.addEventListener("resize", this.handleFlexChangeOnResize);
    },
    unmounted() {
        window.removeEventListener("resize", this.handleFlexChangeOnResize);
    }
}
</script>

<style scoped>
    .app-wrapper {
        display: flex;
        flex-direction: column;
        width: 100%;
    }
    
    .margin-left {
        margin-left: var(--max-nav-width);
    }

    .margin-top {
        margin-top: calc(var(--max-nav-height) + 10px);
    }

    .flex-row {
        flex-direction: row;
    }

    .flex-column {
        flex-direction: column;
    }
</style>