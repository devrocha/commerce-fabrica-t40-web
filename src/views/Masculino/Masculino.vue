<template>
  <input type="text" v-model="name" />
  <input type="text" v-model="description" />
  <p>{{ text }}</p>
</template>

<script>
import { usePecaStore } from "@/stores/peca";
import { reactive, toRefs } from "@vue/reactivity";
export default {
  setup() {
    const data = reactive({
      name: "",
      description: "",
    });

    const store = usePecaStore();

    const createPeca = async () => {
      const peca = {
        name: data.name,
        description: data.description,
      };
      await store.createPeca(peca);
    };

    return {
      ...toRefs(data),
    };
  },
};
</script>

<style src="./style.scss" scoped lang="scss" />