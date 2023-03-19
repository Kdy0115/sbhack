import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthUserResponse, MessageRequest, UserMessage } from "../../app/entities";

const dummyDataList = [
    {
        user: {
            id              : 8,
            email           : "",
            gender          : "",
            username        : "User1",
            first_name      : "",
            last_name       : "",
            branch          : "",
            age             : "",
            grade           : 0,
            job             : "",
            department      : "",
            project         : "",
            introduction    : "",
            hobby           : "",
            matching_status : "",
            profile         : "",     
        },
        message: 'はじめまして！○○部××課の△△です！本日はよろしくお願いします！',
        datetime: '2023/03/20 13:20',
        noData: false,
    },
    {
        user: {
            id              : 7,
            email           : "",
            gender          : "",
            username        : "User2",
            first_name      : "",
            last_name       : "",
            branch          : "",
            age             : "",
            grade           : 0,
            job             : "",
            department      : "",
            project         : "",
            introduction    : "",
            hobby           : "",
            matching_status : "",
            profile         : "",     
        },
        message: 'みなさん初めまして！△△さんありがとうございます！こちらこそよろしくお願いします。',
        datetime: '2023/03/20 13:20',
        noData: false,
    },    
    {
        user: {
            id              : 8,
            email           : "",
            gender          : "",
            username        : "User1",
            first_name      : "",
            last_name       : "",
            branch          : "",
            age             : "",
            grade           : 0,
            job             : "",
            department      : "",
            project         : "",
            introduction    : "",
            hobby           : "",
            matching_status : "",
            profile         : "",     
        },
        message: '何分にどこに集まりますか？',
        datetime: '2023/03/20 13:20',
        noData: false,
    },
    {
        user: {
            id              : 9,
            email           : "",
            gender          : "",
            username        : "User1",
            first_name      : "",
            last_name       : "",
            branch          : "",
            age             : "",
            grade           : 0,
            job             : "",
            department      : "",
            project         : "",
            introduction    : "",
            hobby           : "",
            matching_status : "",
            profile         : "",     
        },
        message: 'はじめまして！××です！動かしていただきありがとうございます！13:30に30Fでいかがですか？',
        datetime: '2023/03/20 13:20',
        noData: false,
    },       
    {
        user: {
            id              : 12,
            email           : "",
            gender          : "",
            username        : "User4",
            first_name      : "",
            last_name       : "",
            branch          : "",
            age             : "",
            grade           : 0,
            job             : "",
            department      : "",
            project         : "",
            introduction    : "",
            hobby           : "",
            matching_status : "",
            profile         : "",     
        },
        message: 'はじめまして！××です！すみません。MTGが長引いていました。。。みなさんありがとうございます。少し遅れて参加しますね！',
        datetime: '2023/03/20 13:25',
        noData: false,
    },               
]


export interface MessageState {
    entities: {
        messages: UserMessage[];
        newMessageRequest: MessageRequest

    };
    isLoading: boolean;
    isLoaded: boolean;
    isSending: boolean;
    isSent: boolean;
    
}

const initialState: MessageState = {
    entities:{
        messages: dummyDataList,
        newMessageRequest: {
            sendUserId: 9,
            message: '',
            datetime: '',
        }
    },
    isLoading: false,
    isLoaded: false,
    isSending: false,
    isSent: false,
};

export const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        sendMessage: (state, action:PayloadAction<MessageRequest>) => {
            state.entities.newMessageRequest = action.payload;
            state.isSending = true;
        },
        sendMessageSuccess: (state, action:PayloadAction<UserMessage>) => {
            state.isSent = true;
            state.isSending = false;
            state.entities.messages.push(action.payload);
            state.entities.newMessageRequest.message = '';
        },
        sendMessageFailure: (state, action:PayloadAction<unknown>) => {
            state.isSent = false;
            state.isSending = false;
        },
        changeNewMessage: (state, action:PayloadAction<string>) => {
            state.entities.newMessageRequest.message = action.payload;
        }
    }
});

export const {
    sendMessage,
    sendMessageSuccess,
    sendMessageFailure,
    changeNewMessage,

} = messageSlice.actions;

export const messageSliceReducer = messageSlice.reducer;