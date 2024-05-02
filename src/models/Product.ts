import mongoose from "mongoose";
import type TProduct from "@/types/product";

const ProductSchema = new mongoose.Schema<TProduct>({
    name: String,
    description: String,
    image: String,
    slug: String,
    price: Number,
    quantity: Number,
    isFeatured: Boolean,
    isInStock: Boolean,
}, { timestamps: true });

const Product = mongoose.models.Products || mongoose.model('Products', ProductSchema);

export default Product;

