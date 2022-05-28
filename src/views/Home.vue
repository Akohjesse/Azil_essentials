<template>
    <body>
        <main>
            <div class="landing">
                <div class="text">
                    <h1 ref="welcome">
                        Azil Essentials, <br class="nbs" />Made For Black,<br
                            class="nbs"
                        />
                        Serving your Melanin
                    </h1>
                    <div class="btn">
                        <Navigate :text="text" :link="url" />
                    </div>
                </div>
                <div class="img_wrap">
                    <img src="../assets/azil_prod1.png" alt="" />
                </div>
            </div>
        </main>
    </body>
</template>

<script>
import { onMounted, ref } from 'vue'
import Navigate from '../components/navigate_cta.vue'
export default {
    name: 'Home',
    components: { Navigate },
    setup() {
        const welcome = ref(null)
        const rezize = () => {
            let br
            br = document.querySelectorAll('.nbs')
            if (window.innerWidth < 766)
                for (var i = 0; i < br.length; i++) {
                    br[i].remove()
                }
        }
        onMounted(() => {
            rezize()
        })
        return {
            welcome,
            url: '/products/skincare/all',
            text: 'Enter',
        }
    },
}
</script>

<style lang="scss" scoped>
main {
    .landing {
        .text {
            width: 100%;
            h1 {
                color: rgba(0, 0, 0, 0.863);
                text-align: left;
                font-size: 4.5em;
                cursor: none;
                font-weight: 700;
                word-spacing: 4px;
                letter-spacing: 2px;
                font-weight: 300;
                max-width: 80%;
                font-family: Voyage;
            }
            .btn {
                width: 35%;
            }
        }

        .img_wrap {
            position: absolute;
            bottom: 0;
            right: 10px;
            transition: 0.3s ease-in-out;
            width: 30%;
            img {
                width: 100%;
            }
        }
    }
}
.navigate div {
    margin-top: 30px;
}

@media (max-width: 1200px) {
    main {
        .landing {
            .text {
                h1 {
                    font-size: 3.8em;
                }
            }
            .img_wrap {
                width: 33%;
            }
        }
    }
}

@media (max-width: 965px) {
    main {
        .landing {
            .text {
                h1 {
                    font-size: 3.4em;
                }
            }
            .img_wrap {
                width: 40%;
            }
        }
    }
}

@media (max-width: 765px) {
    main {
        .landing {
            margin-top: 10%;
            .text {
                width: 100%;
                h1 {
                    font-size: 3em;
                    max-width: 100%;
                }
                .btn {
                    width: 50%;
                }
            }
            .img_wrap {
                position: static;
                width: 70%;
                margin: 0 auto;
                transform: translateY(28px);
            }
        }
    }
}

@media (max-width: 500px) {
    main {
        width: 90%;
        .landing {
            margin-top: 15%;
            .text {
                text-align: center;
                h1 {
                    font-size: 3em;
                    line-height: 60px;
                }
                .btn {
                    width: 70%;
                }
            }
            .img_wrap {
                display: none;
            }
        }
    }
}
</style>
