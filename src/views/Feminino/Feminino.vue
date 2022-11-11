<template>
  <div v-for="(peca, index) in pecas" :key="index">
    <section class="product">
      <h2 class="product-category">Mais Vendidos</h2>
      <div class="product-container">
        <div class="product-card">
          <div class="product-image">
            <img src="@/assets/images/favorite.png" class="favorite-tag" />
            <span class="discount-tag">50% off</span>
            <img
              src="https://img.abercrombie.com/is/image/anf/KIC_144-2069-1446-900_prod1?policy=product-medium&wid=350&hei=438"
              class="product-thumb"
            />
            <Button label="Comprar" />
          </div>
          <div class="product-info">
            <h2 class="product-brand">Marca</h2>
            <p class="product-short-desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit
            </p>
            <span class="price">R$100</span
            ><span class="actual-price">R%200</span>
          </div>
        </div>
      </div>
    </section>
    <span>
      {{ peca.description }}
    </span>
  </div>
</template>

<script>
import { usePecaStore } from "@/stores/peca"; //importar dentro do componente
import { onMounted, reactive, toRefs } from "@vue/runtime-core";

export default {
  setup() {
    const data = reactive({
      pecas: [],
    });
    const store = usePecaStore();

    onMounted(async () => {
      await store.listPecas();
      data.pecas = store.pecas;
    });

    return {
      ...toRefs(data),
      store,
    };
  },
};
</script>

<style src="./style.scss" scoped lang="scss" />