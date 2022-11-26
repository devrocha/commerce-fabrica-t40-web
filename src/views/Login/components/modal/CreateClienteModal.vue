<script>
import Input from "@/components/Input/Input.vue";
import { reactive, toRefs } from "@vue/reactivity";

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
      nome: "",
      email: "",
      senha: '',
      sexo: "",
      cpf: "",
      cep: "",
      endereco: [],
    });

    const storeCliente = useClienteStore();

    const handleClickCancel = () => {
      context.emit("closeModal", false);
    };

    const handleClickSave = async () => {
      const cliente = {
        name: data.nome,
        email: data.email,
        senha: data.senha,
        sexo: data.sexo,
        cpf: data.cpf,
        endereço: data.endereco,
      };

      await storeCliente.createCliente(cliente);
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
    <v-card class="d-flex justify-center pa-6 w-50">
      <v-row justify="center">
        <v-col cols="6">
          <v-text-field v-model="name" label="Nome" variant="outlined" required>
          </v-text-field>
          <v-text-field
            v-model="nome"
            label="Nome Completo"
            variant="outlined"
            required
          ></v-text-field>
          <v-text-field
            v-model="email"
            label="E-mail"
            variant="outlined"
            required
          ></v-text-field>
          <v-text-field
            v-model="sexo"
            label="Sexo"
            variant="outlined"
            required
          ></v-text-field>
          <v-text-field
            v-model="cpf"
            label="CPF"
            variant="outlined"
            required
          ></v-text-field>
          <v-text-field
            v-model="endereco"
            label="Endereço"
            variant="outlined"
            required
          ></v-text-field>
          <v-btn @click="handleClickSave()" color="success"> Cadastrar </v-btn>
          <v-btn @click="handleClickCancel()" color="error"> Cancelar </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-dialog>
</template>