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
    <RouterView />
    <Footer />
  </v-main>
</template>
