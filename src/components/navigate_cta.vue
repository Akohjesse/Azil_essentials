<template>
<router-link tag="div" :to="link">
<div class="continue display_flex">
   <div class="enter">
      <p>{{text}}</p>
   </div>
  <div class="arrow move_sideways">
    <img src="../assets/arrow.svg" alt="">
  </div> 
</div>
</router-link>
     
</template>

<script>
export default {
 name: 'Navigate',
 props: ['link', 'text']
}
</script>

<style lang="scss" scoped>
a{
  text-decoration: none;
}
  .continue{
    width: 100%;
    margin-top:30px;
    .arrow{
      width:20%;
      margin-left: 20px;
     img{
       width:100%;
       transform: rotateY(180deg);
     }
    }
    .enter{
    width: 60%;
    height:auto;
    border: 2px solid rgb(133, 133, 133);
    align-items: center;
    text-align: center;
    padding:30px;
    font-weight: 800;
    color: black;

    &:hover{
      cursor:none;
      color:orange;
     transition: 0.4s ease-in-out;
         box-shadow: rgb(87, 87, 87) 14px 11px 1px 0px;
    }
    p{
      font-family: voyage;
      letter-spacing: 2px;
    }
  }

  }
  @media(max-width:500px){
    .continue{
      .enter{
        padding: 20px;
      }
    }
  }
</style>