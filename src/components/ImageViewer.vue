<template>
    <div class="image-wrapper">
        <img v-for="image in images"
            class="image"
            @click="expandImage"
            @focusout="shrinkImage"
            :src="require(`@/assets/images/${image.src}`)"
            :alt="image.alt"
            :key="image.id"
            :tabindex="image.id">
    </div>
</template>

<script>
export default {
    name: "ImageViewer",
    props: ["images"],
    data() {
        return {
            x: 0,
            y: 0
        }
    },
    methods: {
        expandImage(event) {
            let image = event.target;
            image.classList.add("modal");
            this.$nextTick(() => {
                let rect = image.getBoundingClientRect()
                let topLeftX = window.innerWidth / 2 - rect.width / 2;
                let topLeftY = window.innerHeight / 2 - rect.height / 2;
                this.x = topLeftX - rect.x;
                this.y = topLeftY - rect.y - 30;
            });
        },
        shrinkImage(event) {
            let image = event.target;
            image.classList.remove("modal");
        }
    },
    computed: {
        xTranslate() {
            return this.x + 'px';
        },
        yTranslate() {
            return this.y + 'px';
        }
    }
}
</script>

<style scoped>
    .image-wrapper {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;
        gap: 10px;
    }

    .image {
        cursor: pointer;
        width: 45%;
        transition: transform 500ms ease-in-out 0s;
    }

    /* Source: https://stackoverflow.com/questions/30118246/disable-hover-on-click */
    .image:not(:focus):hover {
        transform: scale(1.1);
    }

    .modal {
        transform: translate(v-bind(xTranslate), v-bind(yTranslate)) scale(3);
        box-shadow: 0px 0px 800px 75px;
    }
</style>