import connectDB from "@/db/connectDB";
import { NextResponse } from "next/server";
import Product from "@/models/Product";

type Params = {
    [key: string]: {
        slug: string
    };
};


export async function GET(req: Request, { params }: Params) {
    await connectDB();

    try {
        const product = await Product.findOne({ slug: params.slug });
        return NextResponse.json({ success: true, product });
    } catch (error) {
        console.log('Error in getting product with given slug' + `${params?.slug}`, error);
        return NextResponse.json({ status: 500, success: false, message: 'Something went wrong. Please try again!' });
    }
}
