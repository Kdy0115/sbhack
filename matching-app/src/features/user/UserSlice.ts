import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthUserResponse } from "../../app/entities";

export interface UserState {
    entities: {
        authUser?: AuthUserResponse;
    };
    isLoading: boolean;
    isLoaded: boolean;

}

const initialState: UserState = {
    entities: {
        authUser: undefined
    },
    isLoading: false,
    isLoaded: false
};

export const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthUser: (state, action:PayloadAction<AuthUserResponse>) => {
            state.entities.authUser = action.payload;
        },
    }
});

export const {
    setAuthUser,
} = UserSlice.actions;

export const UserSliceReducer = UserSlice.reducer;