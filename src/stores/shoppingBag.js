import { defineStore } from "pinia";

export const useShoppingBag = defineStore({
    id: "shoppingBag",
    state: () => ({ shoppingBag: [] }),

    actions: {
        addPecaInBag(id) {
            this.shoppingBag.push(id)
        },

        removePecaInBag(index) {
            this.shoppingBag.splice(index, 1)
        },
    },
});
