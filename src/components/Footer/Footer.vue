<script>
export default {};
</script>

<template>
  <v-footer color="teal" app bottom absolute style="width: 100%" padless mb="0">
    <v-row class="d-flex justify-space-between ma-0 align-center">
      <v-col cols="2" align="center">
        <p>Fale Conosco</p>
        <router-link to="/email" style="text-decoration: none">
          <v-btn variant="plain"
            ><v-icon icon="mdi-email-outline" size="30" color="white"></v-icon
          ></v-btn>
        </router-link>
        <router-link to="/whatsapp" style="text-decoration: none">
          <v-btn variant="plain"
            ><v-icon icon="mdi-whatsapp" size="30" color="white"></v-icon
          ></v-btn>
        </router-link>
      </v-col>

      <v-row class="d-flex align-center justify-center">
        <v-col cols="8" align="center">
          <span
            ><v-icon icon="mdi-copyright"></v-icon>
            2022 T40 Bra, Inc. AllRights reserved
          </span>
        </v-col>
      </v-row>

      <v-col cols="2" justify="end">
        <p>Redes Sociais</p>
        <router-link to="/instagram" style="text-decoration: none">
          <v-btn variant="plain"
            ><v-icon icon="mdi-instagram" size="30" color="white"></v-icon
          ></v-btn>
        </router-link>
        <router-link to="/facebook" style="text-decoration: none">
          <v-btn variant="plain"
            ><v-icon icon="mdi-facebook" size="30" color="white"></v-icon
          ></v-btn>
        </router-link>
      </v-col>
    </v-row>
  </v-footer>
</template>