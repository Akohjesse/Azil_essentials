<template>
    <Splash />
    <transition
        enter-active-class=" animate__fadeInLeft"
        leave-active-class="animate__fadeOutLeft"
        name="nav-section"
    >
        <NavBar
            ref="titleRef"
            class="animate__animated"
            v-if="showModal"
            @revertNav="revertHamburger"
        />
    </transition>
    <Header @listen="setAnimationEnter" @openNav="toggleNav" />
    <Carousel @listen2="setAnimationEnter2" />
    <router-view v-slot="{ Component }">
        <transition
            :leave-active-class="animateOut"
            enter-active-class="animate__animated animate__fadeInUp"
        >
            <component :is="Component"></component>
        </transition>
    </router-view>
</template>
<script>
import revertNav from './JS/revertnav'
import cursor from './JS/cursor.js'
import Splash from './components/splash.vue'
import { ref } from 'vue'
import Carousel from './components/carouselFlow.vue'
import 'animate.css'
import Header from './components/header.vue'
import NavBar from './components/navbar.vue'
export default {
    name: 'App',
    components: { Splash, Header, Carousel, NavBar },
    setup() {
        const animateOut = ref('')
        const showModal = ref('')
        showModal.value = false
        const setAnimationEnter = () => {
            animateOut.value = 'animate__animated animate__fadeOutLeft'
        }
        const toggleNav = () => {
            showModal.value = !showModal.value
        }
        const revertHamburger = () => {
            toggleNav()
            revertNav()
        }
        const setAnimationEnter2 = () => {
            animateOut.value = 'animate__animated animate__fadeOutDown'
        }

        return {
            toggleNav,
            revertHamburger,
            showModal,
            cursor,
            animateOut,
            setAnimationEnter,
            setAnimationEnter2,
        }
    },
}
</script>

<style lang="scss">
@import url('./scss/main.scss');
::-webkit-scrollbar {
    display: none;
}
body {
    background: rgba(255, 255, 255, 0.926);
    color: rgba(0, 0, 0, 0.933) !important;
    scroll-behavior: smooth;
    overflow-x: hidden;
}
p {
    cursor: none;
}
h1 {
    cursor: none;
}
</style>
