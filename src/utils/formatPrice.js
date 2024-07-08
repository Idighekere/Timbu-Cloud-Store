export const formatPrice = (price) => {

    return Number.isInteger(price) ? `${price}.00` : price.toFixed(2)
}