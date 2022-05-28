<template>
    <div class="customer_avi">
        <img :src="require(`../assets/users/${review.image}.png`)" alt="" />
    </div>
    <div class="data_customer">
        <h1>{{ review.name }}</h1>
        <div class="review">
            <p>{{ review.review }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'userStory',
    props: ['review'],
}
</script>

<style lang="scss" scoped>
template {
    width: auto;
}
.customer_avi {
    width: 70%;
    margin: 10px auto;
    img {
        width: 100%;
    }
}
.data_customer {
    text-align: center;
    h1 {
        color: rgb(165, 165, 165);
        font-weight: 300;
        font-family: Austin;
        text-transform: uppercase;
        letter-spacing: 3px;
        margin: 15px 0px;
    }
    .review {
        margin-top: 10px;
        p {
            color: rgb(0, 0, 0);
            font-size: 1em;
            line-height: 25px;
            word-spacing: 1px;
            font-family: 'Urbanist', sans-serif;
        }
    }
}
@media (max-width: 600px) {
    .customer_avi {
        width: 70%;
        margin: 10px auto;
        img {
            width: 100%;
        }
    }
    .data_customer {
        .review {
            margin-top: 20px;
            width: 85%;
            margin: 0 auto;
            p {
                font-size: 0.9em;
            }
        }
    }
}
</style>
