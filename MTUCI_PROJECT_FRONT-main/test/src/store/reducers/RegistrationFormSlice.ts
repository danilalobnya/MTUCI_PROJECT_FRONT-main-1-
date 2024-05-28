import { createSlice , PayloadAction} from "@reduxjs/toolkit";



interface ToogleState {
    toogled: boolean;
}

const initialState: ToogleState = {
    toogled: false
}

export const formSlice = createSlice({
    name: 'toogled',
    initialState,
    reducers: {
        swap(state) {
            state.toogled = !state.toogled
        }
    }
})


export default formSlice.reducer