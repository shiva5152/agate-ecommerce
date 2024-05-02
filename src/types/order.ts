export type TOrderItem<T> = {
    quantity: number,
    product: T,
}

export type TShippingAddress = {
    customerName: string,
    address: string,
    locality: string,
    city: string,
    postalCode: number,
    country: string,
}

type TOrder<T> = {
    user: T,
    orderItems: TOrderItem<T>[],
    shippingAddress: TShippingAddress,
    payment: T,
    itemsPrice: number,
    shippingPrice: number,
    taxPrice: number,
    totalPrice: number,
    isPaid: boolean,
    paidAt?: Date,
    isDelivered: boolean,
    deliveredAt?: Date,
}
export default TOrder;