<script>
import { useClienteStore } from "@/stores/cliente";
import { reactive, toRefs } from "@vue/reactivity";

import CreateClienteModal from "@/views/Login/components/modal/CreateClienteModal.vue";

export default {
  components: {
    CreateClienteModal,
  },
  setup() {
    const data = reactive({
      openModal: false,
    });

    const handleClickOpenModalLogin = () => {
      data.openModal = !data.openModal;
    };

    const store = useClienteStore();

    const createCliente = async () => {
      const cliente = {
        nome: data.nome,
      };
      await store.createCliente(cliente);
    };

    return {
      ...toRefs(data),
      handleClickOpenModalLogin,
    };
  },
};
</script>

<template>
  <div align="center">
    <v-btn
      variant="outlined"
      color="secondary"
      @click="handleClickOpenModalLogin()"
    >
      Cadastro Novo Cliente
    </v-btn>
    <CreateClienteModal
      :openModal="openModal"
      @closeModal="openModal = $event"
    />
    <p>Já sou cliente</p>
    <v-btn
      variant="outlined"
      color="secondary"
      @click="handleClickOpenSouCliente()"
    >
      Login
    </v-btn>
    <CreateClienteModal
      :openModal="openModal"
      @closeModal="openModal = $event"
    />
  </div>
</template>
    
    <!-- <v-form v-model="valid">
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="firstname"
              :rules="nameRules"
              :counter="10"
              label="Nome"
              required
            ></v-text-field>
          </v-col>
  
          <v-col cols="12" md="4">
            <v-text-field
              v-model="lastname"
              :rules="nameRules"
              :counter="10"
              label="Sobrenome"
              required
            ></v-text-field>
          </v-col>
  
          <v-col cols="12" md="4">
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>
          </v-col>
          <v-btn class="mr-4" type="submit"> Enviar </v-btn>
        </v-row>
      </v-container>
    </v-form> -->
 
