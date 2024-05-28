import {combineReducers, configureStore } from "@reduxjs/toolkit";
import registrationReducer from './reducers/RegistrationSlice.ts'
import formReducer from './reducers/RegistrationFormSlice.ts'
import errorReducer from './reducers/ErrorSlice.ts'



const rootReducer = combineReducers({
    registrationReducer,
    formReducer,
    errorReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
