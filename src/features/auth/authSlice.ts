import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AppUser } from "../../app/types/user"
import { User } from "firebase/auth"

type State = {
    authenticated: boolean
    currentUser: AppUser | null
}

const initialState: State = {
    authenticated: false,
    currentUser: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signIn: { 
            reducer: 
            (state, action: PayloadAction<AppUser>) => {
                state.authenticated = true;
                state.currentUser = action.payload
        },
            prepare: (user: User) => {
                const mapped: AppUser = {
                    uid: user.uid,
                    email: user.email,
                    photoUrl: user.photoURL,
                    displayName: user.displayName,
                    providerID: user.providerData[0].providerId
                }
                return {payload: mapped}
            }           
        },
        signOut: (state) => {
            state.authenticated = false;
            state.currentUser = null
        }
    }
})

export const {signIn, signOut} = authSlice.actions