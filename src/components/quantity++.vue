<template>
    <div class="items">
        <div @click="reduceQuantity" class="reduce qtt">
            <span>-</span>
        </div>
        <div class="value">{{ quantity }}</div>
        <div @click="increaseQuantity" class="increase qtt">+</div>
    </div>
</template>

<script>
export default {
    name: 'Quantity',
    data() {
        return {
            quantity: 1,
        }
    },
    methods: {
        reduceQuantity() {
            this.quantity--
            this.$emit('value', this.quantity)
        },
        increaseQuantity() {
            this.quantity++
            this.$emit('value', this.quantity)
        },
    },
}
</script>

<style lang="scss" scoped>
.items {
    width: 100px;
    padding: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid grey;
    .qtt {
        font-size: 2em;
        font-weight: lighter;
        color: grey;
        cursor: pointer;
    }
    .value {
        font-family: Voyage;
        font-size: 1.3em;
        font-weight: bold;
        color: rgb(136, 136, 136);
    }
}
</style>
