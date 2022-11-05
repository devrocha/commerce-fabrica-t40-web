<script>
import { RouterLink, RouterView } from "vue-router";
import Header from "@/components/Header/Header.vue";
import Footer from "@/components/Footer/Footer.vue";

components: {
	Header;
	Footer;
}
</script>

<template>
	<div>
		<Header />
		<RouterView />
		<Footer/>
	</div>
</template>

<style scoped>
</style>
