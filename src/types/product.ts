

type TProduct = {
    name: string,
    description: string,
    image: string,
    slug: string,
    price: {
        amount: number,
        currency: string
    },
    quantity: number,
    isFeatured: boolean,
    isInStock: boolean,
    createdAt?: Date,
    updatedAt?: Date,
    _id?: string
}

export default TProduct;