<template>
    <body>
        <div class="azil_story">
            <main class="about">
                <h1>
                    <span>Created with tones of love </span>
                    <span>For skin of colour</span>
                </h1>
                <div class="text_about">
                    <div class="vision">
                        <h2 class="h2">The Story Behind Us</h2>
                        <p>
                            <q
                                >We aim to create a world where dark and brown
                                skin people stand tall and take pride in their
                                melanin</q
                            >
                        </p>
                    </div>
                    <div class="how">
                        <p class="p">
                            Our products have been curated to meet all your
                            skincare needs, our premium products have been
                            carefully formulated with you in mind We help you
                            achieve a natural skin glow, brighten and maintain
                            beautiful, healthy dark skin. Learn more about our
                            products
                        </p>
                    </div>
                </div>
            </main>
            <div class="container">
                <main class="founder">
                    <h2 class="h2">The Founder</h2>
                    <div class="wrap">
                        <div class="img">
                            <img src="../assets/ceo.png" alt="" />
                        </div>
                        <div class="text">
                            <h2>Elizabeth Sojinuga</h2>
                            <q
                                >Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Numquam tenetur sit amet
                                consectetur, adipisicing elit. Numquam tenetur
                                autem necessitatibus qui, inventore
                                laboriosam?</q
                            >
                            <div class="btn">
                                <button>Profile</button>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
        <Products />
        <Footer />
    </body>
</template>

<script>
import Products from '../components/productsPack.vue'
import Footer from '../components/footer.vue'
export default {
    name: 'About',
    components: { Footer, Products },
    data() {
        return {
            url: '/products/skincare/all',
            text: 'Products',
        }
    },
}
</script>

<style lang="scss" scoped src="../scss/about.scss"></style>
