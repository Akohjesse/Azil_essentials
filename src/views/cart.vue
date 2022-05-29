<template>
    <div class="wrap cart-wrap">
        <main>
            <div v-if="!items" class="cart-empty">
                <div class="no_item">
                    <h1>Your Cart is Empty!</h1>
                    <h2>~ Add products to cart and proceed to checkout ~</h2>

                    <div class="continue_shopping">
                        <router-link :to="{ name: 'Products' }">
                            <p>CONTINUE</p>
                            <p>SHOPPING</p>
                        </router-link>
                    </div>
                </div>
            </div>
            <div v-else class="cart_data">
                <div v-for="item in items" :key="item">
                    <h1>{{ item.product }}</h1>
                </div>
            </div>
        </main>
        <Complete />
        <Footer />
    </div>
</template>

<script setup>
import { getItem } from '@/JS/localStorage.js'
import Complete from '../components/productsPack.vue'
import Footer from '../components/footer.vue'
import { onMounted, ref } from '@vue/runtime-core'
const items = ref(null)
onMounted(() => {
    items.value = getItem()
})
</script>

<style lang="scss" scoped>
a {
    text-decoration: none;
    color: inherit;
}
.no_item {
    text-align: center;
    h1 {
        color: rgba(22, 22, 22, 0.863);
        font-family: Voyage;
        font-size: 5em;
    }
    h2 {
        margin-top: 30px;
        font-size: 1.5em;
        color: grey;
        font-family: Voyage;
    }
}
.continue_shopping {
    height: 150px;
    background: rgb(169, 169, 169);
    border: {
        radius: 100%;
    }
    width: 150px;
    margin: 40px auto;
    padding: 40px 20px;
    p {
        margin: 10px 0px;
        font-family: 'Urbanist';
        color: white;
    }
}
</style>
