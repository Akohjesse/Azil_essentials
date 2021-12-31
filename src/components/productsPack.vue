<template>
<div class="wrap">
  <h2>Get the Azil Essentials Skincare Complete package;</h2>
  <p>Face scrubs, skin oils, face moisturizer, African soap, etc</p>
  <div class="product_pack display_flex">
       <div class="img">
         <img src="../assets/azel.jpg" alt="">
      </div>
      <form action="">
        <input type="text" placeholder="Name">
        <input type="email" name="Email" placeholder="Email">
        <input value="Request Azil pack" type="button">
      </form>
  </div>

</div>
</template>

<script>
export default {
name: 'ProductsPack'
}
</script>

<style lang="scss" scoped>
$text-color:rgb(0, 0, 0);
.wrap{
  margin:50px auto;
  padding-top: 80px;
  width:70%;
  text-align: center;
  .img{
     width:40%;
     margin:20px auto;
     img{
       border-radius: 8px;
       width:100%;
     }
  }
  
  form{
    width:50%;
    input{
      display:block;
      border:1px solid rgb(201, 201, 201);
      padding: 15px 20px;
      outline: none;
      font-family:'Poppins';
      border-radius: 3px;
      width: 80%;
      margin:20px 0px;
      
    }
  }
}
h2{
  color: $text-color;
  font-size: 1.5em;
   font-family: 'Urbanist', sans-serif;
}
p{
  color: $text-color;
  font-style: italic;
  text-align: center;
  margin-top:5px;
   font-family: 'Urbanist', sans-serif;
}
@media (max-width:924px) {
   .wrap{
      width:80%;
   }
}
@media (max-width:800px) {
   .wrap{
      width:90%;
   }
}
@media (max-width:700px) {
   .wrap{
      width:100%;
   }
}
@media (max-width:600px) {
   .wrap{
     p{
       max-width: 80%;
       margin-left: auto;
       margin-right: auto;
     }
     width:90%;
      .product_pack{
        flex-direction: column;
        .img{
          width: 100%;
        }
        form{
          margin:5px auto;
          width:100%;
          input{
            width: 100%;
            margin:10px auto;
          }
        }
      }
   }
}
</style>