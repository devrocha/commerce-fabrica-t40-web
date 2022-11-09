<template>
  <div class="container">
    <!-- logo da loja -->
    <div class="header-logo">
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
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped src="./style.scss" />