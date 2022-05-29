<template>
    <main>
        <h1>Testimonials</h1>
        <div class="testimonial_list">
            <div v-for="review in reviews" :key="review.id">
                <UserStories :review="review" />
            </div>
        </div>

        <Products />
        <Footer />
    </main>
</template>

<script>
import Footer from '../components/footer.vue'
import Products from '../components/productsPack.vue'
import UserStories from '../components/userStories.vue'
import json from '../../data/reviews.json'
export default {
    name: 'testimonials',
    components: { UserStories, Footer, Products },
    setup() {
        return {
            reviews: json.posts,
        }
    },
}
</script>

<style lang="scss" scoped src="../scss/testimonial.scss">
@import url('../scss/testimonial.scss');
</style>
