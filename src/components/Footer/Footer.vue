<script>
export default {};
</script>

<template>
  <v-toolbar color="#46AFA5">
    <v-spacer>
      <v-col class="ma-2">
      <v-row justify="start">
      <p>Fale Conosco</p>
      <router-link to="/email"
        ><v-btn>
          <img
            src="@/assets/images/o-email.png"
            width="30"
            height="30" /></v-btn
      ></router-link>
      <router-link to="/whatsapp"
        ><v-btn>
          <img
            src="@/assets/images/whatsapp.png"
            width="30"
            height="30" /></v-btn
      ></router-link>
    </v-row>
  </v-col>
    </v-spacer>

    <v-spacer>
      <img src="@/assets/images/c.png" width="20" height="20" />
      <span>2022 T40 Bra, Inc. All Rights reserved</span>
    </v-spacer>

    <v-spacer>
      <v-row justify="end">
      <p>Redes Sociais</p>
      <router-link to="/instagram"
        ><v-btn>
          <img
            src="@/assets/images/instagram.png"
            width="30"
            height="30" /></v-btn
      ></router-link>
      <router-link to="/facebook"
        ><v-btn>
          <img
            src="@/assets/images/facebook.png"
            width="30"
            height="30" /></v-btn
      ></router-link>
      </v-row>
    </v-spacer>
  </v-toolbar>
</template>

<!-- <style lang="scss" scoped src="./style.scss" /> -->