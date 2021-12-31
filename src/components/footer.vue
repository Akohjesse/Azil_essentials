<template>
 <div class="bg-color">
        <div class="wrap">
       <div class="social_icons display_flex">
           <div class="individual_icons">
             <i class="ri-facebook-fill"></i>
           </div>
            <div class="individual_icons">
               <i class="ri-twitter-fill"></i>
           </div>
            <div class="individual_icons">
               <i class="ri-instagram-line"></i>
           </div>
            <div class="individual_icons">
               <i class="ri-whatsapp-line"></i>
           </div>
       </div>

        <nav>
            <ul>
                <li>
                    <router-view to="/faq">
                        FAQ
                    </router-view>
                </li>
                 <li>
                    <router-view to="/contact">
                        CONTACT
                    </router-view>
                </li>
            </ul>
        </nav>

        <div class="copy">
            <p>&copy;2021 Azil, All rights reserved. <a href="https://akohjesse.com">Fervent</a></p>
        </div>
   </div>
 </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
.wrap{
    max-width:40%;
    color: white;
    margin: 20px auto;
    margin-top: 5% !important;
    .social_icons{
       .individual_icons{
           i{
               color:grey;
               font-size: 1.6em;
               &:hover{
                   color:rgb(55, 55, 55);
               }
           }
       }
    }
    nav{
      text-align: center;
      margin-top:30px;
      ul{
          display: flex;
          justify-content: space-evenly;
          li{
              list-style-type: none;
              font-family: Voyage;
              font-size:1.3em ;
              color:grey;
              &:hover{
                  color:rgb(55, 55, 55);
                  cursor:none;
              }
          }
      }
    }
    .copy{
         margin-top:30px;
        text-align: center;
        font-family: 'Poppins';
        font-size:0.9em;
        color: grey;
                     a{
               color:rgb(0, 0, 0);
             }
    }
}

@media (max-width:600px){
    .wrap{
       max-width:60%;
    }   
}
</style>