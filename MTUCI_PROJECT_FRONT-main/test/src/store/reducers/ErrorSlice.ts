import { createSlice , PayloadAction} from "@reduxjs/toolkit";



interface RegistrationState {
    error: string;
}

const initialState: RegistrationState = {
    error: ''
}

export const errorSlice = createSlice({
    name: 'error',
    initialState,
    reducers: {
        setError(state, action) {
            state.error = action.payload
        },
        removeError(state) {
            state.error = ''
        }
    }
})


export default errorSlice.reducer