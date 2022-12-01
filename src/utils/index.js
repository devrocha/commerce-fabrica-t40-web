import { storeToRefs } from "pinia"

export const conversion = (value) => {
    return `R$ ${value?.toFixed(2).replace('.', ',')}`
}

export const isAdmin = (value) => {
    return value == 'admin'
}

