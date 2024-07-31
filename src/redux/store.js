import { configureStore } from "@reduxjs/toolkit";
import chemicalSiceSlice from "../redux/chemicalSice";



const store = configureStore({
    reducer:{
        chemical:chemicalSiceSlice,
    }
})

export default store