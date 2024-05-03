import instance from "@/lib/axios";
import { setProducts } from "./slice";
import { AppDispatch } from "../../store";

export const getProducts = async (dispatch: AppDispatch) => {
    try {
        const { data } = await instance.get("/product");

        if (data.success) {
            dispatch(setProducts(data.products));
        }
        else {
            console.log(data.message);
        }
    } catch (error) {
        console.log(error);
    }

};
