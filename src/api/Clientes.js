import api from './Api'

export default {
    getClientes() {
        return api.get('clientes')
    },

    createClientes(cliente) {
        return api.post('clientes', cliente)
    },

    updatePecas() {

    },

    deletePecas() {

    }
}