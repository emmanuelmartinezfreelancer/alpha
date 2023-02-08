import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import cartSlice from "./cart-slice";
import { createWrapper } from "next-redux-wrapper";

const store = ()=> {configureStore({

    reducer: {
        auth: authSlice.reducer,
        cart: cartSlice.reducer
    }

})

}

const wrapper = createWrapper(store);
export default wrapper;
