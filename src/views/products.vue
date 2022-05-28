<template>
    <body>
        <div class="disp">
            <main>
                <h1>Take care of your Skin, Choose Azil Today</h1>
                <div class="scroll">
                    <i class="ri-arrow-down-s-line"></i>
                </div>
            </main>
        </div>
        <div class="products">
            <main>
                <div
                    v-for="product in products"
                    :key="product.id"
                    class="azil_product section"
                >
                    <Azil_product
                        @emitOpenModalOrder="openOrderModal"
                        :product="product"
                    />
                </div>
            </main>
        </div>
        <Complete />
        <Footer />
        <transition
            enter-active-class="animate__animated animate__fadeIn"
            leave-active-class="animate__animated animate__fadeOut animate__delay-.5s"
        >
            <Checkout
                @closeOrderModal="popOffModal"
                :product="checkData"
                v-if="showCheckout"
            />
        </transition>
    </body>
</template>

<script>
import Checkout from '../components/addItem.vue'
import Complete from '../components/productsPack.vue'
import Footer from '../components/footer.vue'
import Azil_product from '../components/azil_product.vue'
import json from '../../data/products.json'
export default {
    name: 'Products',
    components: { Azil_product, Footer, Complete, Checkout },
    data() {
        return { products: json.products, showCheckout: false, checkData: '' }
    },
    methods: {
        openOrderModal(value) {
            this.showCheckout = !this.showCheckout
            this.checkData = value
        },
        popOffModal() {
            this.showCheckout = !this.showCheckout
        },
    },
}
</script>

<style lang="scss">
.azil_product {
    &:nth-child(even) {
        .azil_item {
            flex-direction: row-reverse;
        }
    }
}
.scroll {
    width: 10%;
    margin: 50px auto;
    animation: animate1 3s ease-in-out infinite;
    i {
        font-size: 20px;
    }
}
.disp {
    main {
        background-color: rgb(117, 117, 117);
        background-image: url('../assets/Q9098.png');
        background-repeat: no-repeat;
        background-size: contain;
        background-position: right;
        color: rgb(243, 243, 243);
        h1 {
            text-align: center;
            font-family: Voyage;
            width: 80%;
            margin: 0 auto;
            font-size: 5em;
            color: rgb(255, 255, 255);
        }
    }
}
@keyframes animate1 {
    0% {
    }
    50% {
        transform: translateY(30px);
    }
    100% {
        transform: translateY(0);
    }
}
@media (max-width: 850px) {
    .azil_product {
        &:nth-child(even) {
            .azil_item {
                flex-direction: column;
            }
        }
    }
}
@media (max-width: 1250px) {
    .disp {
        main {
            h1 {
                font-size: 5em;
                width: 90%;
            }
        }
    }
}
@media (max-width: 970px) {
    .disp {
        margin-top: 5%;
        main {
            h1 {
                font-size: 4em;
                width: 93%;
            }
        }
    }
}
@media (max-width: 750px) {
    .disp {
        margin-top: 8%;
        main {
            padding: 0px;
            h1 {
                width: 95%;
            }
        }
    }
}
@media (max-width: 500px) {
    .disp {
        margin-top: 10%;
        padding: 0px;
        main {
            margin: 40px 0px;
            width: 100%;
            h1 {
                width: 90%;
                margin: 0 auto;
                font-size: 3.4em;
                text-align: left;
            }
        }
    }
}
</style>
