import api from './Api'

export default {
    login(payload) {
        return api.post('auth', payload)
    },
}