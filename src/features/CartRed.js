import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cartNum',
    initialState: {value: 0},
    reducers: {
        updateCartCount: (state, action) => {
            let count = 0;
            for(let i = 0; i < localStorage.length; i++) {
                let item = JSON.parse(localStorage.getItem(localStorage.key(i)));
                count += item.quantity;
            }
            state.value = count;
        }
    }
})

export const { updateCartCount } = cartSlice.actions;
export default cartSlice.reducer;