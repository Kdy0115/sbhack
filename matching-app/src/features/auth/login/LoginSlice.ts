import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthRequest } from "../../../app/entities";

export interface LoginState {
    entities: {
        user: AuthRequest;
    };
    isLogining: boolean;
    isLogined: boolean;
    isLoginFaied: boolean;
}

const initialState: LoginState = {
    entities: {
        user: {
            username    : '',
            password    : '',
            email       : '',
            name        : '',
            gender      : '',
            branch      : '',
            age         : '',
            grade       : 0,
            job         : '',
            department  : '',
            project     : '',
            introduction: '',
            hobby       : '',
            profile     : ''
        }
    },
    isLogining: false,
    isLogined: false,
    isLoginFaied: false,
};

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<AuthRequest>) => {
            state.isLogining = true;
        },
        loginSuccess: (state, action: PayloadAction<undefined>) => {
            state.isLogining = false;
            state.isLogined = true;
            state.isLoginFaied = false;
        },
        loginFailure: (state, action: PayloadAction<undefined>) => {
            state.isLogined = false;
            state.isLogined = true;
            state.isLoginFaied = true;
        },
        changeLoginUserName: (state, action:PayloadAction<string>) => {
            state.entities.user.username = action.payload;
        },
        changeLoginPassword: (state, action:PayloadAction<string>) => {
            state.entities.user.password = action.payload;
        }
    }
});

export const {
    login,
    loginSuccess,
    loginFailure,
    changeLoginUserName,
    changeLoginPassword,
} = loginSlice.actions;

export const loginSliceReducer = loginSlice.reducer;