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
    <v-row align="center">
      <v-col cols="2">
        <v-toolbar-title
          ><img src="@/assets/images/logo.png"
        /></v-toolbar-title>
      </v-col>

      <v-col cols="6">
        <router-link
          to="/"
          style="text-decoration: none; color: inherit"
          class="mx-6"
          ><v-btn>Home</v-btn></router-link
        >
        <router-link
          to="/feminino"
          style="text-decoration: none; color: inherit"
          class="mx-6"
          ><v-btn>Feminino</v-btn></router-link
        >
        <router-link
          to="/masculino"
          style="text-decoration: none; color: inherit"
          class="mx-6"
        >
          <v-btn>Masculino</v-btn></router-link
        >
        <router-link
          to="/registrar"
          style="text-decoration: none; color: inherit"
          class="mx-6"
          ><v-btn>Registrar Peça</v-btn></router-link
        >
      </v-col>

      <v-col cols="3">
        <v-text-field
          v-model="input"
          variant="outlined"
          hide-details
          placeholder="Buscar peças"
          class="w-50"
        />
      </v-col>

      <v-col cols="1">
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
