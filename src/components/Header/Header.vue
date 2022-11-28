<script>
import { reactive, toRefs } from "@vue/reactivity";
export default {
  setup() {
    const data = reactive({
      input: "",
    });

    return {
      ...toRefs(data),
    };
  },
};
</script>

<template>
  <v-toolbar color="#d0bdf4a3" elevation="4">
    <v-row class="d-flex align-center">
      <v-col sm="2" md="3" lg="2" align="center">
        <router-link to="/"
          ><v-toolbar-title
            ><img src="@/assets/images/logo.png" /></v-toolbar-title
        ></router-link>
      </v-col>

      <v-col sm="7" md="6" lg="8" align="center">
        <v-row class="d-flex justify-space-around">
          <router-link to="/" style="text-decoration: none; color: inherit"
            ><v-btn>Home</v-btn></router-link
          >
          <router-link
            to="/feminino"
            style="text-decoration: none; color: inherit"
            ><v-btn>Feminino</v-btn></router-link
          >
          <router-link
            to="/masculino"
            style="text-decoration: none; color: inherit"
          >
            <v-btn>Masculino</v-btn></router-link
          >
        </v-row>
      </v-col>

      <v-col sm="3" md="3" lg="2" align="center">
        <router-link to="/shoppingBag">
          <v-btn>
            <img
              src="@/assets/images/shopping-bag.png"
              width="30"
              height="30"
            /> </v-btn
        ></router-link>
        <router-link to="/login">
          <v-btn>
            <v-img
              src="src/assets/images/user.png"
              width="30"
              height="30"
            /> </v-btn
        ></router-link>
      </v-col>
    </v-row>
  </v-toolbar>
</template>
