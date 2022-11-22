<script>
export default {};
</script>

<template>
  <v-toolbar color="#46AFA5">
    <v-row align="center">
          <v-col cols="2">
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
              </v-col>
     
      <v-col cols="8" align="center">
        <img src="@/assets/images/c.png" width="20" height="20" />
        <span>2022 T40 Bra, Inc. All Rights reserved</span>
      </v-col>

      <v-col cols="2" justify="end">
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
      </v-col>
    </v-row>
  </v-toolbar>
</template>