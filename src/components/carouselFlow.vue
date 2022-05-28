<template>
    <div class="wrap" @click="hear">
        <router-link tag="li" to="/">
            <div class="round"></div>
        </router-link>
        <router-link tag="li" to="/products/skincare/all">
            <div class="round"></div>
        </router-link>
        <router-link tag="li" to="/pages/story">
            <div class="round"></div>
        </router-link>
        <router-link tag="li" to="/stories/testimonials">
            <div class="round"></div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'Carousel',
    methods: {
        hear() {
            this.$emit('listen2')
        },
    },
}
</script>

<style lang="scss" scoped>
.router-link-active {
    div {
        background: grey;
        transform: scale(1.5);
    }
}
.wrap {
    z-index: 99;
    top: 45%;
    left: 20px;
    position: fixed;
    a {
        margin: 10px 0px;
        .round {
            width: 12px;
            margin: 10px 0px;
            height: 12px;
            border-radius: 100%;
            border: 1px solid grey;
        }
    }
}

@media (max-width: 700px) {
    .wrap {
        display: none;
    }
}
</style>
