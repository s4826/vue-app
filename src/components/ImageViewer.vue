<template>
    <div class="image-wrapper">
        <img v-for="image in images"
            class="image"
            @click="next"
            :class="{ 'fade-in': idx === image.id, 'fade-out': idx !== image.id }"
            :src="require(`@/assets/images/${image.src}`)"
            :alt="image.alt"
            :key="image.id">
    </div>
</template>

<script>
export default {
    name: "ImageViewer",
    props: ["images"],
    data() {
        return {
            idx: 0,
        }
    },
    methods: {
        next() {
            this.idx = ++this.idx % this.images.length;
        }
    }
}
</script>

<style scoped>
    .image-wrapper {
        position: relative;
        height: 100%;
        text-align: center;
    }

    img {
        position: absolute;
        top: 0px;
        left: 0px;
        margin: auto;
    }

    button {
        position: fixed;
        bottom: 0px;
    }

    .image {
        transition: opacity 1s ease-out 0s;
    }

    .fade-in {
        opacity: 1;
    }

    .fade-out {
        opacity: 0;
    }
</style>