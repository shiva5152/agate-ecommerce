import mongoose from "mongoose";
import type TOrder from "@/types/order";

const OrderSchema = new mongoose.Schema<TOrder<mongoose.Schema.Types.ObjectId>>({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    orderItems: [
        {
            quantity: { type: Number, required: true },
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product",
            },

        }
    ],
    shippingAddress: {
        customerName: { type: String, required: true },
        address: { type: String, required: true },
        locality: { type: String, required: true },
        city: { type: String, required: true },
        postalCode: { type: Number, required: true },
        country: { type: String, required: true },
    },
    payment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Payment",
    },
    itemsPrice: { type: Number, required: true },
    shippingPrice: { type: Number, required: true },
    taxPrice: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    isPaid: { type: Boolean, default: false },
    paidAt: { type: Date },
    isDelivered: { type: Boolean, default: false },
    deliveredAt: { type: Date },
}, { timestamps: true });

const Order = mongoose.models.Order || mongoose.model("Order", OrderSchema);

export default Order;