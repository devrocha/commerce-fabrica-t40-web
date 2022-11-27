import { defineStore } from "pinia";
import clientesApi from "@/api/Clientes.js";

export const useClienteStore = defineStore({
  id: "Cliente",
  state: () => ({ clientes: [] }),

  actions: {
    async listClientes() {
      const response = await clientesApi.getClientes();
      this.clientes = response.data.data;
    },

    async createCliente (cliente) {
      const response = await clientesApi.createClientes(cliente)
      return response
    }
  },
});