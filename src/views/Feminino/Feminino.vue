<template>
  <h1>Feminino</h1>
</template>

<script>
import { usePecaStore } from "@/stores/peca";
import { onMounted } from '@vue/runtime-core';

export default {
  setup() {
    const store = usePecaStore();

    onMounted(async () => {
		await store.listPecas()
		console.log(store.pecas)
	})

    return {
      store,
    };
  },
};
</script>

<style src="./style.scss" scoped lang="scss" />