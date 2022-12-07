<script>
import Header from "@/components/Header/Header.vue";
import Footer from "@/components/Footer/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<template>
  <v-main>
    <Header />
    <RouterView class="routerView"/>
    <Footer />
  </v-main>
</template>

<style lange="scss">
  .routerView {
    height: 100%;
    max-height: 800px;
  }
</style>
