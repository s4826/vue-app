/**
 Main App component
 */
<template>
    <div class="app-wrapper" :class="{ smallDisplay: smallDisplay, 'flex-row': flexRow, 'flex-column': flexColumn }">
        <NavBar />
        <router-view />
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
            smallDisplay: false 
        }
    },
    methods: {
        handleFlexChangeOnResize() {
            if (windowSize() === "small") {
                this.flexDirection = "";
                this.smallDisplay = true;
            } else if (windowSize() === "medium") {
                this.flexDirection = "flex-column";
                this.smallDisplay = false;
            } else {
                this.flexDirection = "flex-row";
                this.smallDisplay = false;
            }
        }
    },
    computed: {
        flexRow: function() {
            return this.flexDirection === "flex-row";
        },
        flexColumn: function() {
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

    .flex-row {
        flex-direction: row;
    }

    .flex-column {
        flex-direction: column;
    }
</style>