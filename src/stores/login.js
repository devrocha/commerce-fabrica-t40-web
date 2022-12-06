import { defineStore } from "pinia";
import { useStorage } from '@vueuse/core'
import loginApi from "@/api/Login.js";

export const useLoginStore = defineStore({
    id: "Login",
    state: () => ({ cliente: useStorage('cliente', {}) }),

    actions: {
        async loginCliente(email, senha) {
            const response = await loginApi.login({ email, senha })
            this.cliente = response.data.data.clienteDB
        },

        logout() {
            this.cliente = {}
        }
    },
});