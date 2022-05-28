<template>
    <div class="wrap">
        <div ref="hamburger" @click="closeButton()" class="close">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="product_container">
            <div class="flex_1 flex">
                <div class="img">
                    <img
                        :src="require(`../assets/${product.image}`)"
                        :alt="product.name"
                    />
                </div>
            </div>
            <div class="flex_2 flex">
                <h1>{{ product.name }}</h1>
                <p>
                    Get Azil's {{ product.name }} for
                    <span class="highlight">NGN {{ product.price }}</span> .
                    Shipping fee free for In-Lagos orders
                </p>

                <div class="buttons">
                    <Quantity @value="setQuantity" />
                    <AddTocart
                        @click="storeProduct(product.name, product.price)"
                        text="Add To Cart"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import storeItem from '../JS/localStorage'
import { ref } from 'vue'
import Quantity from '../components/quantity++.vue'
import AddTocart from '../components/button.vue'
export default {
    name: 'Checkout',
    components: { Quantity, AddTocart },
    props: ['product'],

    setup(props, { emit }) {
        const hamburger = ref(null)
        const quantity = ref(1)
        const closeButton = () => {
            hamburger.value.classList.toggle('open_r')
            setTimeout(() => {
                emit('closeOrderModal')
            }, 1000)
        }
        const storeProduct = (a, b) => {
            let items = { product: a, price: b, amount: quantity.value }
            storeItem(items)
        }

        const setQuantity = (a) => {
            quantity.value = a
        }

        return { closeButton, hamburger, storeProduct, setQuantity }
    },
}
</script>

<style lang="scss" scoped>
.display_flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.wrap {
    position: fixed;
    left: 0px;
    right: 0px;
    top: 0px;
    z-index: 300;
    bottom: 0px;
    backdrop-filter: brightness(0.2) hue-rotate(60deg);
    .open_r {
        span {
            &:nth-child(1) {
                transform: rotateZ(0) translateY(0) !important;
            }
            &:nth-child(3) {
                transform: rotateZ(0deg) translateY(0px) !important;
            }
        }
    }
    .close {
        position: absolute;
        right: 4rem;
        top: 4rem;
        @media (max-width: 765px) {
            right: 1.5em;
            top: 2rem;
        }
        span {
            width: 50px;
            background: rgb(255, 255, 255);
            height: 1px;
            margin: 6px 0px;
            transition: 0.6s ease-in-out;
            display: block;

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
    .product_container {
        width: 50%;
        padding: 30px;
        @extend .display_flex;
        background: white;
        box-shadow: inset 0px 0px 12px #c9c9c9;
        border-radius: 20px;
        margin: 10% auto;
        @media (max-width: 1000px) {
            width: 78%;
            margin: 17% auto;
        }
        @media (max-width: 640px) {
            width: 85%;
        }
        .flex_2 {
            width: 50%;
            h1 {
                font-family: Voyage;
                margin-bottom: 20px;
            }
            p {
                font-family: 'Urbanist';
                line-height: 25px;
            }
            .buttons {
                margin-top: 20px;
                width: 80%;
                @extend .display_flex;
                @media (max-width: 400px) {
                    flex-direction: column;
                    width: 100%;
                }
            }
        }
        .flex_1 {
            width: 40%;
            .img {
                width: 100%;
                img {
                    width: 100%;
                }
            }
        }
        @media (max-width: 765px) {
            flex-direction: column;
            .flex_1 {
                width: 50%;
                .img {
                    width: 100%;
                    img {
                        width: 100%;
                    }
                }
            }
            .flex_2 {
                width: 80%;
                margin-top: 30px;
            }
        }
        @media (max-width: 520px) {
            margin: 30% auto;
            flex-direction: column;
            .flex_1 {
                width: 70%;
            }
            .flex_2 {
                width: 100%;
                margin-top: 40px;
            }
        }
    }
}
</style>
