<script>
import Input from "@/components/Input/Input.vue";
import { reactive, toRefs } from "@vue/reactivity";
import { useCategoriaStore } from "@/stores/categoria";

export default {
  components: {
    Input,
  },
  emits: ["closeModal"],
  props: {
    openModal: Boolean,
  },
  setup(_, context) {
    const data = reactive({
      Tipo: String,
      Gênero: String,
    });

    const storeCategoria = useCategoriaStore();

    const handleClickCancel = () => {
      context.emit("closeModal", false);
    };

    const handleClickSave = async () => {
      const categoria = {
        type: data.type,
        gender: data.gender,
      };

      await storeCategoria.createCategoria(categoria);
      context.emit("closeModal", false);
    };

    return {
      ...toRefs(data),
      handleClickCancel,
      handleClickSave,
    };
  },
};
</script>

<template>
  <v-dialog v-model="openModal">
    <v-card class="d-flex justify-center pa-6 w-70">
      <v-row justify="center">
        <v-col cols="6">
          <v-text-field v-model="type" label="Tipo" variant="outlined" required>
          </v-text-field>
          <v-text-field
            v-model="gender"
            label="Gênero"
            variant="outlined"
            required
          ></v-text-field>
          <v-row align="center" justify="space-around">
            <v-btn @click="handleClickSave()" color="success">
              Cadastrar
            </v-btn>
            <v-btn @click="handleClickCancel()" color="error"> Cancelar </v-btn>
          </v-row>
        </v-col>
      </v-row>
    </v-card>
  </v-dialog>
</template>