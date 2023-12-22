import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: [],
        itemIds: {},
        loading: false,
        error: null,
        showItemExists: false,
        itemAdded: false,
    },
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload;     
            const newCartItems = state.cartItems;
            if (!state.itemIds[newItem._id]) {
                state.cartItems.push(newItem);
                state.itemIds[newItem._id] = true;
                state.itemAdded = true;
            }
            else {
                // make showitemexists = true
                state.showItemExists = true;
            }
        },
        removeItemExists(state, action) {
            state.showItemExists = false;
        },
        removeItemAdded(state, action) {
            state.itemAdded = false;
        },
    }
});

export default cartSlice;
export const { addToCart, removeItemExists, removeItemAdded } = cartSlice.actions;

