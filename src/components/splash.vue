<template>
    <div
        ref="coverscreen"
        class="cover_screen animate__animated animate__slower"
    >
        <div class="image_container">
            <img :src="require(`../assets/${image}.jpeg`)" alt="scaffold" />
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import 'animate.css'
export default {
    name: 'Splash',
    setup() {
        let image = ref(null)
        let coverscreen = ref(null)
        image.value = 'scafold'
        setTimeout(() => {
            coverscreen.value.classList.add('animate__fadeOut')
            setTimeout(() => {
                coverscreen.value.parentNode.children[0].remove()
            }, 2000)
        }, 3000)
        return { image, coverscreen }
    },
}
</script>

<style lang="scss" scoped>
.cover_screen {
    width: 100%;
    overflow: hidden;
    position: fixed;
    z-index: 300;
    opacity: 1;
    top: 0;
    left: 0;
    height: 100vh;

    background: white;
}
.image_container {
    width: 40%;
    margin: 0 auto;
    img {
        width: 100%;
        margin: 0px auto;
    }
}
@media (max-width: 1000px) {
    .image_container {
        width: 50%;
    }
}
@media (max-width: 880px) {
    .image_container {
        width: 74%;
    }
}

@media (max-width: 680px) {
    .image_container {
        width: 70%;
    }
}
@media (max-width: 500px) {
    .image_container {
        width: 100%;
    }
}
</style>
