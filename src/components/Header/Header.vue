<script>
export default {};
</script>

<template>
  <!-- <v-app-bar> -->
  <v-toolbar color="#d0bdf4a3" elevation="4">
    <v-toolbar-title><img src="@/assets/images/logo.png" /></v-toolbar-title>

    <v-spacer>
      <router-link
        to="/"
        style="text-decoration: none; color: inherit"
        class="mx-6"
        ><v-button>Home</v-button></router-link
      >
      <router-link
        to="/feminino"
        style="text-decoration: none; color: inherit"
        class="mx-6"
        ><v-button>Feminino</v-button></router-link
      >
      <router-link
        to="/masculino"
        style="text-decoration: none; color: inherit"
        class="mx-6"
      >
        <v-button>Masculino</v-button></router-link
      >
      <!-- <router-link
        to="/infantil"
        style="text-decoration: none; color: inherit"
        class="mx-6"
        ><v-button>Infantil</v-button></router-link
      > -->
      <router-link
        to="/registrar"
        style="text-decoration: none; color: inherit"
        class="mx-6"
        ><v-button>Registrar Peça</v-button></router-link
      >
    </v-spacer>
    <input type="text" v-model="input" placeholder="Buscar peça" />
    <v-col class="ma-2">
      <v-row justify="end">
        <router-link to="/shoppingBag"
          ><v-btn
            ><img
              src="@/assets/images/shopping-bag.png"
              width="30"
              height="30"
            /> </v-btn
        ></router-link>
        <router-link to="/login">
          <v-btn
            ><img
              src="@/assets/images/user.png"
              width="30"
              height="30"
            /> </v-btn
        ></router-link>
      </v-row>
    </v-col>
  </v-toolbar>
  <!-- </v-app> -->

  <!-- <div class="container"> -->
  <!-- logo da loja -->
  <!-- <div class="header-logo">
      <img src="@/assets/images/logo.png" />
    </div>
    <div class="header-buttons">
      <router-link to="/"><button>Home</button></router-link>
      <router-link to="/feminino"><button>Feminino</button></router-link>
      <router-link to="/masculino"><button>Masculino</button></router-link>
      <router-link to="/infantil"><button>Infantil</button></router-link>
      <router-link to="/outlet"><button>Outlet</button></router-link>
    </div>
    <div class="header-icons">
      <form class="header-searchbar">
        <input />
      </form>
      <router-link to="/shoppingBag"
        ><button><img src="@/assets/images/shopping-bag.png" /></button
      ></router-link>
      <button><img src="@/assets/images/user.png" /></button>
    </div>
  </div> -->
</template>

<!-- <style lang="scss" scoped src="./style.scss" /> -->