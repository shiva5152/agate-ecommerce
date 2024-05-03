import connectDB from "@/db/connectDB";
import { NextResponse } from "next/server";
import Product from "@/models/Product";

export async function GET() {
    await connectDB();

    try {
        const products = await Product.find();
        if (products) {
            return NextResponse.json({ success: true, products });
        } else {
            return NextResponse.json({ status: 404, success: false, message: 'No products found.' });
        }

    } catch (error) {
        console.log('Error in getting all products:', error);
        return NextResponse.json({ status: 500, success: false, message: 'Something went wrong. Please try again!' });
    }
}

export async function POST(req: Request) {

    await connectDB();
    try {
        const body = await req.json();

        const product = await Product.create(body);

        return NextResponse.json({ success: true, product });
    } catch (error) {
        console.log('Error in getting all products:', error);
        return NextResponse.json({ status: 500, success: false, message: 'Something went wrong. Please try again!' });
    }
}
