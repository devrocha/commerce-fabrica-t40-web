<template>
    <div class="footer-buttons">
          <div>
              <p>Fale Conosco</p>
              <router-link to="/email"><button><img src="@/assets/images/o-email.png" class="img-link"/></button></router-link>
              <router-link to="/whatsapp"><button><img src="@/assets/images/whatsapp.png" class="img-link"/></button></router-link>
          </div>

          <div>
              <p>Redes Sociais</p>
              <router-link to="/instagram"><button><img src="@/assets/images/instagram.png" class="img-link"/></button></router-link>
              <router-link to="/facebook"><button><img src="@/assets/images/facebook.png" class="img-link"/></button></router-link> 
          </div>
        </div>
</template>
<script>
    export default {
        
    }
</script>
<style lang="scss" scoped src="./style.scss" />