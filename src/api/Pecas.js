import api from './Api'

export default {
    getPecas() {
        return api.get('pecas')
    },

    createPecas(peca) {
        return api.post('pecas', peca)
    },

    updatePecas() {

    },

    deletePecas() {

    }
}