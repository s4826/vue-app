/**
NavLink component, containing all of the state and behavior used
to define a single navbar link.
*/
<template>
    <a v-if="external" class="nav-link" :href="href">
        <img :src="imageSrc" :alt="imageAlt">
        <span class="nav-text">
            {{ navText }}
        </span>
    </a>

    <router-link v-else class="nav-link" :to="href">
        <img :src="imageSrc" :alt="imageAlt">
        <span class="nav-text">
            {{ navText }}
        </span>
    </router-link>
</template>

<script>
export default {
    name: "NavLink",
    props: ["href", "imageSrc", "imageAlt", "navText", "external"]
}
</script>

<style scoped>
    .nav-link {
        display: inline-flex;
        padding: 5px;
        text-decoration: none;
        max-height: 50px;
        border-radius: 5px;
    }

    .nav-link:hover {
        background-color: var(--nav-select-color);
    }

    .nav-text {
        padding: 5px 5px 5px 0px;
        color: black;
        text-align: center;
        align-self: center;
        flex-grow: 2;
    }

    .router-link-active {
        background-color: var(--nav-current-color);
    }

    .router-link-active .nav-text {
        color: white;
    }

    img {
        box-sizing: border-box;
        max-height: 100%;
    }
</style>
