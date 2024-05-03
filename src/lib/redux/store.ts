import { configureStore } from '@reduxjs/toolkit'
import productSlice from './features/product/slice'
import cartSlice from './features/cart/slice'


export const makeStore = () => {
    return configureStore({
        reducer: {
            product: productSlice,
            cart: cartSlice,
        },
    })
}


export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']