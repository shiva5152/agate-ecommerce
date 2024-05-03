import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type TProduct from "@/types/product";

interface TInitialState {
    products: TProduct[]
}

const initialState: TInitialState = {
    products: [],
};

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setProducts: (state, action: PayloadAction<TProduct[]>) => {
            state.products = action.payload;
        },
    },

});

export const { setProducts } = productSlice.actions;

export default productSlice.reducer;