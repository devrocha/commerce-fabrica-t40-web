<script>
export default {};
</script>

<template>
  <v-toolbar color="#46AFA5" elevation="4">
    <v-spacer>
      <p>Fale Conosco</p>
      <router-link to="/email"
        ><v-button>
          <img
            src="@/assets/images/o-email.png"
            width="30"
            height="30" /></v-button
      ></router-link>
      <router-link to="/whatsapp"
        ><v-button>
          <img
            src="@/assets/images/whatsapp.png"
            width="30"
            height="30" /></v-button
      ></router-link>
    </v-spacer>

    <v-spacer>
      <img src="@/assets/images/c.png" width="20" height="20" />
      <span>2022 T40 Bra, Inc. All Rights reserved</span>
    </v-spacer>

    <v-spacer>
      <p>Redes Sociais</p>
      <router-link to="/instagram"
        ><v-button>
          <img
            src="@/assets/images/instagram.png"
            width="30"
            height="30" /></v-button
      ></router-link>
      <router-link to="/facebook"
        ><v-button>
          <img
            src="@/assets/images/facebook.png"
            width="30"
            height="30" /></v-button
      ></router-link>
    </v-spacer>
  </v-toolbar>
</template>

<!-- <style lang="scss" scoped src="./style.scss" /> -->