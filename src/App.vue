<script>
import { RouterLink, RouterView } from "vue-router";
import Header from "@/components/Header.vue";

components: {
	Header;
}
</script>

<template>
	<div>
		<Header />
		<RouterView />
	</div>
</template>

<style scoped>
</style>
