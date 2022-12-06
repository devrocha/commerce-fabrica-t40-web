<script>
import { useLoginStore } from "@/stores/login";
import { reactive, toRefs } from "@vue/reactivity";
import { useRouter } from "vue-router";

import Input from "@/components/Input/Input.vue";
import Button from "@/components/Button/Button.vue";
import { onMounted, watch } from "@vue/runtime-core";

export default {
  components: {
    Input,
    Button,
  },
  setup() {
    const data = reactive({
      email: "",
      senha: "",
      clienteLogado: false,
    });

    onMounted(() => {
      if (store.cliente.role) {
        data.clienteLogado = true;
      }
    });

    const store = useLoginStore();
    const router = useRouter();

    const hadleLogin = async () => {
      await store.loginCliente(data.email, data.senha);

      if (store.cliente.role == "admin") {
        router.push("/admin");
      } else {
        router.push("/");
      }
    };

    const handleLogout = () => {
      store.logout();
      data.clienteLogado = false
      router.push("/");
    };

    // watch(store.cliente, () => data.clienteLogado = false)

    return {
      ...toRefs(data),
      hadleLogin,
      handleLogout,
    };
  },
};
</script>

<template>
  <v-row class="d-flex align-center justify-center" v-if="!clienteLogado">
    <v-col cols="3">
      <v-text-field label="Email" variant="outlined" v-model="email" />
      <v-text-field
        label="Senha"
        variant="outlined"
        v-model="senha"
        type="password"
      />
      <Button label="Logar" color="primary" @click="hadleLogin()" />
    </v-col>
  </v-row>
  <v-row class="d-flex align-center justify-center" v-else>
    <Button label="Logout" color="error" @click="handleLogout()" />
  </v-row>
</template>

<style scoped lang="scss">
.decoration {
  text-decoration: none;
}
</style>