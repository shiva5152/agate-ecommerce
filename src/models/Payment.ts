import mongoose, { Schema } from 'mongoose';
import type TPayment from '@/types/payment';

const paymentSchema: Schema = new mongoose.Schema<TPayment<mongoose.Schema.Types.ObjectId>>({
    razorpayOrderId: {
        type: String,
        required: true,
    },
    razorpayPaymentId: {
        type: String,
        required: true,
    },
    razorpaySignature: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        refPath: 'User',
        // required: true,
    },

    order: {
        type: mongoose.Schema.Types.ObjectId,
        refPath: 'Order',
        // required: true,
    },
    amount: {
        type: Number,

    },
    currency: {
        type: String,
    },

}, { timestamps: true });

const Payment = mongoose.models.Payment || mongoose.model('Payment', paymentSchema);

export default Payment