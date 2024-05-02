type TPayment<T> = {
    razorpayOrderId: string,
    razorpayPaymentId: string,
    razorpaySignature: string,
    user: T,
    order: T,
    amount: number,
    currency: string,
}

export default TPayment;