import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface AccountState {
    address: string
}

const initialState: AccountState = {
    address: ''
}

export const accountSlice = createSlice({
    name: 'account', initialState: initialState, reducers: {
        setAccount(state, action: PayloadAction<string>) {
            state.address = action.payload
        },
        clearToken(state) {
            state.address = ''
        }
    }
})

export default accountSlice.reducer
export const {setAccount, clearToken} = accountSlice.actions