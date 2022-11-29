import api from './Api'

export default {
    getCategorias() {
        return api.get('categorias')
    },

    createCategorias(categoria) {
        return api.post('categorias', categoria)
    },

    updateCategorias() {

    },

    deleteCategorias() {

    }
}