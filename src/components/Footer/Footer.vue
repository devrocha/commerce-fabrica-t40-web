<script>
export default {};
</script>

<template>
  <v-footer color="teal" app bottom absolute style="width: 100%" padless>
    <v-row class="d-flex justify-space-between">
      <v-col cols="2" align="center">
        <p>Fale Conosco</p>
        <router-link to="/email" style="text-decoration: none">
          <v-btn variant="plain"
            ><v-icon icon="mdi-email" size="x-large"></v-icon
          ></v-btn>
        </router-link>
        <router-link to="/whatsapp" style="text-decoration: none">
          <v-btn variant="plain"
            ><v-icon icon="mdi-whatsapp" size="x-large"></v-icon
          ></v-btn>
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
        <router-link to="/instagram" style="text-decoration: none">
          <v-btn variant="plain"
            ><v-icon icon="mdi-instagram" size="x-large"></v-icon
          ></v-btn>
        </router-link>
        <router-link to="/facebook" style="text-decoration: none">
          <v-btn variant="plain"
            ><v-icon icon="mdi-facebook" size="x-large"></v-icon
          ></v-btn>
        </router-link>
      </v-col>
    </v-row>
  </v-footer>
</template>