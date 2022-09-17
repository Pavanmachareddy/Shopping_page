import { configureStore } from "@reduxjs/toolkit";
import cartlistSlice from "./cartlistreducer";

import cartSlice from "./cartreducer";

const store = configureStore({
    reducer: { cart:cartSlice.reducer, cartlist: cartlistSlice.reducer},
})

export default store;