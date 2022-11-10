import { defineStore } from "pinia";
import pecasApi from "@/api/Pecas.js";

export const usePecaStore = defineStore({
  id: "Peca",
  state: () => ({ pecas: [] }),

  actions: {
    async listPecas() {
      const response = await pecasApi.getPecas();
      console.log(response.data.data);
      this.pecas = response.data.data;
    },
  },
});
