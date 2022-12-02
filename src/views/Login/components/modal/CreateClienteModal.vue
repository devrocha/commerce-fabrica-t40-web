<script>
import Input from "@/components/Input/Input.vue";
import { reactive, toRefs } from "@vue/reactivity";
import { useClienteStore } from "@/stores/cliente";

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
      senha: "",
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
        endereco: {
          estado: data.endereco.estado,
          cidade: data.cidade,
          bairro: data.bairro,
          rua: data.rua,
          numero: data.numero,
        },
        role: data.role,
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
    <v-card class="d-flex justify-center pa-6 w-80">
      <v-row justify="center">
        <v-col cols="6" class="pa-6">
          <v-text-field v-model="nome" label="Nome" variant="outlined" required>
          </v-text-field>
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
            v-model="estado"
            label="Estado"
            variant="outlined"
            required
          ></v-text-field>
          <v-text-field
            v-model="cidade"
            label="Cidade"
            variant="outlined"
            required
          ></v-text-field>
          <v-text-field
            v-model="bairro"
            label="Bairro"
            variant="outlined"
            required
          ></v-text-field>
          <v-text-field
            v-model="rua"
            label="Rua"
            variant="outlined"
            required
          ></v-text-field>
          <v-text-field
            v-model="numero"
            label="Número"
            variant="outlined"
            required
          ></v-text-field>
          <v-text-field
            v-if="cliente?.role == 'admin'"
            v-model="role"
            label="Role"
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