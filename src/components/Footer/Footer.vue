<script>
export default {};
</script>

<template>
  <v-footer color="teal" app bottom absolute style="width: 100%" padless>
    <v-row class="d-flex justify-space-between">
      <v-col cols="2" align="center">
        <p>Fale Conosco</p>
        <router-link to="/email">
          <img src="@/assets/images/o-email.png" width="30" height="30" />
        </router-link>
        <router-link to="/whatsapp">
          <img src="@/assets/images/whatsapp.png" width="30" height="30" />
        </router-link>
      </v-col>

      <v-row class="d-flex align-center">
        <v-col cols="8" align="center">
          <img src="@/assets/images/c.png" width="20" height="20" />
          <span>2022 T40 Bra, Inc. All Rights reserved</span>
        </v-col>
      </v-row>

      <v-col cols="2" justify="end">
        <p>Redes Sociais</p>
        <router-link to="/instagram">
          <img src="@/assets/images/instagram.png" width="30" height="30" />
        </router-link>
        <router-link to="/facebook">
          <img src="@/assets/images/facebook.png" width="30" height="30" />
        </router-link>
      </v-col>
    </v-row>
  </v-footer>
</template>