import mongoose from "mongoose";
import type TCart from "@/types/cart";

const CartSchema = new mongoose.Schema<TCart<mongoose.Schema.Types.ObjectId>>({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    products: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
            },
            quantity: {
                type: Number,
                required: true,
                default: 1,
            },
        }
    ],

}, { timestamps: true });

const Cart = mongoose.models.Cart || mongoose.model('Cart', CartSchema);
export default Cart;