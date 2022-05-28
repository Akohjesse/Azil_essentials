<template>
    <div class="wrap display_flex">
        <div class="logo">
            <h1>Azil</h1>
        </div>
        <nav class="nav-bar">
            <ul @click="hear">
                <li>
                    <router-link to="/">Home</router-link>
                </li>
                <li>
                    <router-link to="/products/skincare/all"
                        >Products</router-link
                    >
                </li>
                <li>
                    <router-link to="/pages/story">About Azil</router-link>
                </li>
                <li>
                    <router-link to="/stories/testimonials"
                        >Testimonials</router-link
                    >
                </li>
            </ul>
        </nav>

        <nav class="divs display_flex">
            <div class="individual_div">
                <i class="ri-search-line"></i>
            </div>
            <div class="individual_div">
                <router-link tag="li" :to="{ name: 'Cart' }">
                    <i class="ri-shopping-cart-2-line"></i>
                </router-link>
            </div>
        </nav>

        <nav class="menu_btn">
            <div
                class="buttons"
                ref="buttons"
                @click="openNavBarAndAnimateSpan"
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    </div>
</template>

<script>
import 'remixicon/fonts/remixicon.css'
export default {
    name: 'Header',
    methods: {
        hear() {
            this.$emit('listen')
        },
        openNavBarAndAnimateSpan() {
            this.$refs.buttons.classList.toggle('open')
            this.$emit('openNav')
        },
    },
}
</script>

<style lang="scss" scoped>
a {
    text-decoration: none;
    color: inherit;
}
.router-link-active {
    border-bottom: 1px solid orange;
}
.wrap {
    padding: 20px 2px;
    width: 85%;
    margin: 0 auto;
    z-index: 10;
    margin-top: 1% !important ;
    .logo {
        width: 50px;
        h1 {
            color: rgba(0, 0, 0, 0.863);
            font-family: 'Voyage';
        }
    }
    .nav-bar {
        ul {
            display: flex;
            li {
                margin: 0px 20px;
                font-weight: 400;
                list-style: none;
                font-family: 'Urbanist', sans-serif;
                font-size: 1em;
                a {
                    text-decoration: none;
                    color: inherit;
                }
            }
        }
    }
    .divs {
        .individual_div {
            margin: 0px 10px;
            i {
                color: inherit;
            }
        }
    }
}

.menu_btn {
    display: none;
    z-index: 210;
    .buttons {
        span {
            width: 30px;
            background: rgb(0, 0, 0);
            height: 1px;
            margin: 6px 0px;
            transition: 0.6s ease-in-out;
            display: block;
        }
    }
    .buttons.open {
        span {
            background: white;
            &:nth-child(1) {
                transform: rotateZ(35deg) translateY(6px);
            }
            &:nth-child(2) {
                opacity: 0;
            }
            &:nth-child(3) {
                transform: rotateZ(-35deg) translateY(-10px);
            }
        }
    }
}

@font-face {
    font-family: Austin;
    src: url('../assets/Austin-Medium.woff');
}

@media (max-width: 965px) {
    .wrap {
        flex-direction: row-reverse;
    }
    .logo {
        display: none;
    }
    .nav-bar {
        display: none;
    }
    .menu_btn {
        display: block;
    }
}
@media (max-width: 400px) {
    .wrap {
        width: 90%;
    }
}
.individual_div {
    padding: 10px 12px;
    border-radius: 100%;
    &:hover {
        transition: 0.7s ease-in-out;
        background: rgb(238, 238, 238);
    }
}
</style>
