import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cartNum',
    initialState: {value: 0, price: 0},
    reducers: {
        updateCartCount: (state, action) => {
            let count = 0;
            let price = 0;
            for(let i = 0; i < localStorage.length; i++) {
                let item = JSON.parse(localStorage.getItem(localStorage.key(i)));
                count += item.quantity;
                price += item.prices * item.quantity;
            }
            state.value = count;
            state.price = price;
        }
    }
})

export const { updateCartCount } = cartSlice.actions;
export default cartSlice.reducer;