import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthUserResponse } from "../../app/entities";

export interface HomeState {
    entities: {
        user: AuthUserResponse;
    };
    isLogining: boolean;
    isLogined: boolean;
    isLoginFaied: boolean;
}

const initialState: HomeState = {
    entities:{
        user: {
            id              : -1,
            email           : '',
            gender          : '',
            username        : '',
            first_name      : '',
            last_name       : '',
            branch          : '',
            age             : '',
            grade           : -1,
            job             : '',
            department      : '',
            project         : '',
            introduction    : '',
            hobby           : '',
            matching_status : '',
            profile         : '',
            password        : '',
            matching_id_id  : -1,
        }
    },
    isLogining: false,
    isLogined: false,
    isLoginFaied: false,
};

export const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
    }
});

export const {

} = homeSlice.actions;

export const homeSliceReducer = homeSlice.reducer;