import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface AccountState {
    address: string
}

const initialState: AccountState = {
    address: ''
}

export const accountSlice = createSlice({
    name: 'account', initialState: initialState, reducers: {
        setAccount(state, action: PayloadAction<string>) {
            state.address = action.payload
        }
    }
})

export default accountSlice.reducer
export const {setAccount} = accountSlice.actions