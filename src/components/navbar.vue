<template v-if="disp">
    <div class="wrap">
        <nav>
            <ul @click="removeNav">
                <li>
                    <router-link tag="li" to="/">Home</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'Products' }"
                        >Products</router-link
                    >
                </li>
                <li>
                    <router-link :to="{ name: 'About' }">About</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'Testimonial' }"
                        >Testimonials</router-link
                    >
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
    props: ['disp'],
    methods: {
        removeNav() {
            this.$emit('revertNav')
        },
    },
}
</script>

<style lang="scss" scoped>
.wrap {
    width: 100%;
    position: fixed;
    top: 0;
    height: 100vh;
    z-index: 200;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.933);
    color: white;
    nav {
        transform: translateY(40%);
        ul {
            display: flex;
            flex-direction: column;
            align-items: center;
            li {
                margin: 20px 0px;
                font-family: 'Urbanist';
                font-size: 1.2em;
                list-style: none;
                a {
                    text-decoration: none;
                    color: white;
                }
            }
        }
    }
}
</style>
