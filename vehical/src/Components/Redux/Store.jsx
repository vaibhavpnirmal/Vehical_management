import { configureStore } from '@reduxjs/toolkit'
import vehicledataReducer from './slices/vehicleSlice'

const Store=configureStore({
    reducer:{
        vehicle:vehicledataReducer,
    }
})
export default Store
