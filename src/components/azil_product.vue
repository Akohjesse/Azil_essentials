<template>
  <div class="azil_item" ref="flex">
          <div data-aos="fade-right"  data-aos-duration="1500"  data-aos-easing="ease-in-out" class="img">
            <img :src="require(`../assets/${product.image}`)" alt="">
          </div>
          <div class="copy">
            <h2 data-aos="flip-up">{{product.name}}</h2>
            <div class="buy">
                 <div class="text">
                   <p>
                    {{product.productInfo}}
                   </p>
                 </div>
                 <div class="btn">
                      <Button @click="getNow(product)" text="Get now"/>
                 </div>
            </div> 
        </div>
 </div>
</template>

<script>
import Button from './normalBtn.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
export default {
name: 'Azil_product',
props: ['product'],
components: {
 Button
},
created() {
    AOS.init()
},
methods:{
  getNow(data){
     this.$emit('emitOpenModalOrder', data);

  }
}
}
</script>

<style lang="scss" scoped>
.azil_item{
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin:70px 0px;
    align-items: center;
    .img{
      width:40%;
      img{
          width:100%;
      }
    }
    .copy{
      width:50%;
      h2{
        font-family:Voyage;
        font-size:3em;
        margin:10px 0px;
      }
      .buy{
        margin:20px 0px;
        p{
          font-family: 'Urbanist', sans-serif;
          line-height: 25px;
          width:80%;
        }
        .btn{
          width: 50%;
        }
      }
    }
}

@media(max-width:1100px){
  .azil_item{
    margin:50px 0px;
    .copy{
      .buy{
         p{
            width: 100%;
         }
         .btn{
           width: 70%;
         }
      }
    }
  }
}
@media(max-width:900px){
  
  .azil_item{
     margin:60px 0px;
    .copy{
       h2{
         font-size: 2.7em;
       }
    }
  }
}

@media (max-width:850px) {
  .azil_item{
    flex-direction: column;
   .img{
     width: 60%;
    }
    .copy{
     width:80%;
     .buy{
        .btn{
          width:60%;
        }
     }
    }
  }

}

@media (max-width:750px) {
  .azil_item{
      .img{
     width: 80%;
  }
  .copy{
    width:90%;
  }
  }
}

@media (max-width:510px){
   .azil_item{
      .img{
     width: 90%;
  }
  .copy{
    margin-top: 25px;
    width:100%;
    h2{
      font-size: 2.5em;
    }
    .buy{
      .btn{
        width:80%;
      }
    }
  }
  }
}
</style>