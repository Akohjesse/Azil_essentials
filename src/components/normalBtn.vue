<template>
    <div class="continue display_flex">
        <div class="enter">
            <p>{{ text }}</p>
        </div>
        <div class="arrow move_sideways">
            <img src="../assets/arrow.svg" alt="" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'Button',
    props: {
        text: String,
    },
}
</script>

<style lang="scss" scoped>
.continue {
    width: 100%;
    margin-top: 30px;
    .arrow {
        width: 20%;
        margin-left: 20px;
        img {
            width: 100%;
            transform: rotateY(180deg);
        }
    }
    .enter {
        width: 60%;
        height: auto;
        border: 2px solid rgb(133, 133, 133);
        align-items: center;
        text-align: center;
        padding: 30px;
        font-weight: 800;
        color: black;

        &:hover {
            cursor: none;
            color: orange;
            transition: 0.4s ease-in-out;
            box-shadow: rgb(87, 87, 87) 14px 11px 1px 0px;
        }
        p {
            font-family: voyage;
            letter-spacing: 2px;
        }
    }
}
</style>
