export const conversion = (value) => {
    return `R$ ${value.toFixed(2).replace('.', ',')}`
}

