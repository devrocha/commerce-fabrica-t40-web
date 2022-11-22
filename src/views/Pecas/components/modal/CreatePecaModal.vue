<script>
import Input from "@/components/Input/Input.vue";

export default {
  components: {
    Input,
  },
  emits: ["closeModal"],
  props: {
    openModal: Boolean,
  },
  setup(props, context) {
    const handleClickCancel = () => {
      context.emit("closeModal", false);
    };

    return {
      handleClickCancel,
    };
  },
};
</script>

<template>
  <v-dialog v-model="openModal">
    <v-card class="d-flex justify-center pa-6 w-50">
      <v-row justify="center">
        <v-col cols="6">
          <v-text-field label="Nome" variant="outlined" required></v-text-field>
          <v-text-field label="Tamanho" variant="outlined" required></v-text-field>
          <v-text-field label="Cor" variant="outlined" required></v-text-field>
          <v-text-field label="Preço" variant="outlined" required></v-text-field>
          <v-text-field label="Imagem" variant="outlined" required></v-text-field>
          <v-text-field label="Descrição" variant="outlined" required></v-text-field>
          <v-btn> Cadastrar </v-btn>
          <v-btn @click="handleClickCancel()" color="error"> Cancelar </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-dialog>
</template>