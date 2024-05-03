import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type TProduct from "@/types/product";


interface TInitialState {
    products: TProduct[],
    cartSize: number,
}

const initialState: TInitialState = {
    products: [],
    cartSize: 0,
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<TProduct>) => {
            state.products.push(action.payload);
            state.cartSize = state.products.length;
        },
    },

});

export const { addToCart } =
    cartSlice.actions;

export default cartSlice.reducer;