import { defineStore } from "pinia";
import categoriasApi from "@/api/Categorias.js";

export const useCategoriaStore = defineStore({
  id: "Categoria",
  state: () => ({ categorias: [] }),

  actions: {
    async listCategorias() {
      const response = await categoriasApi.getCategorias();
      this.categorias = response.data.data;
    },

    async createCategoria(categoria) {
      const response = await categoriasApi.createCategorias(categoria);
      return response;
    },
  },
});
