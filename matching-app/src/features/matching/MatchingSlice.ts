import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { AuthRequest } from "../../../app/entities";

export interface MatchingInfo {
    number: string;
    time  : string;
}

export interface MatchingState {
    entities : {
        matchingInfo: MatchingInfo;
    }
    isMatching: boolean;
    isBackMatching: boolean;
}

const initialState: MatchingState = {
    entities: {
        matchingInfo: {
            number: "",
            time  : "", 
        },
    },
    isMatching: false,
    isBackMatching: false,
};

export const matchingSlice = createSlice({
    name: 'matching',
    initialState,
    reducers: {
        changeMatchingNumber: (state, action: PayloadAction<string>) => {
            state.entities.matchingInfo.number = action.payload;
        },
        changeMatchingTime: (state, action: PayloadAction<string>) => {
            state.entities.matchingInfo.time = action.payload;
        },        
        startMatching: (state, action: PayloadAction<MatchingInfo>) => {
            state.isMatching = true;
        },
        startMatchingSuccess: (state, action: PayloadAction<string>) => {
            state.isMatching = false;
        },
        backStartMatching: (state) => {
            state.isMatching = false;
            state.isBackMatching = true;
        }
    }
});

export const {
    changeMatchingNumber,
    changeMatchingTime,
    startMatching,
    startMatchingSuccess,
    backStartMatching,
} = matchingSlice.actions;

export const matchingSliceReducer = matchingSlice.reducer;