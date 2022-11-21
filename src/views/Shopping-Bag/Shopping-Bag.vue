<script>
import { usePecaStore } from "@/stores/peca"; //importar dentro do componente
import { onMounted, reactive, toRefs } from "@vue/runtime-core";
import { conversion } from "@/utils/index";
import Image from "@/components/Image/Image.vue";
import { computed } from "@vue/reactivity";

export default {
  components: {
    Image,
  },

  setup() {
    const data = reactive({
      pecas: [],
      value: 100,
    });

    const store = usePecaStore();

    onMounted(async () => {
      await store.listPecas();
      data.pecas = store.pecas;
      computedLession();
    });

    const computedPecaValue = computed(() => {
      return data.value >= 100 ? "Preço justo" : "Em oferta";
    });

    const computedLession = () => {
      const pecaPrice = data.pecas.filter((peca) => peca.price > 100);
    };

    return {
      ...toRefs(data),
      store,
      conversion,
      computedPecaValue,
    };
  },
};
</script>

<template>
  <h2 class="display-2 mb-4">Carrinho</h2>
  <v-container v-for="(peca, index) in pecas" :key="index">
    <v-list>
      <v-list-tile-avatar>
        <v-img :src="peca.image" height="100px"></v-img>
      </v-list-tile-avatar>
      <v-list-tile-content>
        <v-list-tile-title>{{ peca.name }}</v-list-tile-title>
      </v-list-tile-content>
      <v-list-tile>R$ {{ conversion(peca.price) }}</v-list-tile>
      <v-list-tile-action>
        <v-text-field
          label="Quantidade"
          v-model="numberValue"
          hide-details
          single-line
          type="number"
        />
      </v-list-tile-action>
      <v-list-tile-action>
        <v-btn><img src="@/assets/images/trash.png" /></v-btn>
      </v-list-tile-action>
      <v-list-tile-action>
        <v-btn
          ><img src="@/assets/images/cesta.png" width="20" height="20"
        /></v-btn>
      </v-list-tile-action>
    </v-list>
  </v-container>
  <v-container>
    <v-btn color="success" larger style="float: right">Pagamento</v-btn>
  </v-container>
</template>











<!-- <style src="./style.scss" scoped lang="scss" /> -->








<!-- cabeçalho do carrinho -->
<!-- <div class="cart-header">
  <img src="@/assets/images/shopping-bag.png" />
  <h1>Carrinho</h1>
  <input type="text" placeholder="CEP" />
</div> -->
<!-- div com ítens do carrinho -->
<!-- <div class="cart-items">
  <table>
    <thead></thead>
    <tbody>
      <tr>
        <td>
          <img src="@/assets/products-img/tênis 1.png" class="cart-product" />
        </td>
        <td>Tênis Branco Masculino Marca Tamanho 40</td>
        <td><button>botão</button></td>
        <td>R$200</td>
        <td>
          <img src="@/assets/images/trash-can.png" class="cart-trash" />
        </td>
      </tr>
    </tbody>
  </table>
</div> -->
<!-- footer do carrinho -->
<!-- <div class="cart-footer">
  <div>
    <p class="shipping-text">Frete:</p>
    <p class="shipping-cost">R$20,00</p>
  </div>
  <div>
    <p class="total-text">Total:</p>
    <p class="total-cost">R$220,00</p>
  </div>
  <button>Comprar</button>
</div> -->