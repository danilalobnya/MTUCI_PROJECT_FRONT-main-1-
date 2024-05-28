import { createSlice , PayloadAction} from "@reduxjs/toolkit";



interface RegistrationState {
    display: boolean;
}

const initialState: RegistrationState = {
    display: false
}

export const registrationSlice = createSlice({
    name: 'registration',
    initialState,
    reducers: {
        regOpen(state) {
            state.display = true
        },
        regClose(state) {
            state.display = false
        }
    }
})


export default registrationSlice.reducer