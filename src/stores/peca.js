import { defineStore } from "pinia";
import pecasApi from "@/api/Pecas.js";

export const usePecaStore = defineStore({
  id: "Peca",
  state: () => ({ pecas: [] }),

  actions: {
    async listPecas() {
      const response = await pecasApi.getPecas();
      this.pecas = response.data.data;
    },

    async createPeca(peca) {
      const response = await pecasApi.createPecas(peca)
      return response
    }
  },
});
