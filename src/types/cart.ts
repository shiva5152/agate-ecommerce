
type TCart<T> = {
    user: T,
    products: {
        product: T,
        quantity: number,
    }[]
}

export default TCart;