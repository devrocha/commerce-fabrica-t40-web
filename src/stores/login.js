import { defineStore } from "pinia";
import loginApi from "@/api/Login.js";

export const useLoginStore = defineStore({
    id: "Login",
    state: () => ({ cliente: {} }),

    actions: {
        async loginCliente(email, senha) {
            const response = await loginApi.login({ email, senha })
            this.cliente = response.data.data
        }
    },
});