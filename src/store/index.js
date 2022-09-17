import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./cartreducer";

const store = configureStore({
    reducer: { cart:cartSlice.reducer},
})

export default store;