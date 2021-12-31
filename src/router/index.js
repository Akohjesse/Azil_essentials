import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/about.vue'
import Testimonial from '../views/testimonial.vue'
import Products from '../views/products.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/pages/story',
    name: 'About',
    component: About
  },
  {
    path: '/stories/testimonials',
    name: 'Testimonial',
    component: Testimonial
  },
  {
    path: '/products/skincare/all',
    name: 'Products',
    component: Products
  },
  {
    path:'/cart',
    name: 'Cart',
    component:()=> import('../views/cart.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
