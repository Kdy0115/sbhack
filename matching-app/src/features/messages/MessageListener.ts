import { AppStartListening } from "../../app/listener";
import { sendMessage, sendMessageFailure, sendMessageSuccess } from "./MessageSlice";
import { UserMessage } from "../../app/entities";

export const addMessageListener = (startListening: AppStartListening): void => {
    startListening({
        actionCreator: sendMessage,
        effect: async (action, { dispatch }) => {
            if(action.payload.message == ''){
                dispatch(sendMessageFailure(''));
            } else {
                try {
                    // Fetch API response from backend server.
                    // const response = await postMessage(action.payload);
                    const newPostMessage = action.payload;
                    const newUserMessage:UserMessage = {
                        user: {
                            id              : newPostMessage.sendUserId,
                            email           : '',
                            gender          : '',
                            username        : 'User10',
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
                        },
                        message: newPostMessage.message,
                        datetime: '2023/03/20 13:28',
                    }
                    dispatch(sendMessageSuccess(newUserMessage));
                } catch (e) {
                    dispatch(sendMessageFailure(e));
                }
            }
        }
    })
};

export const addSendMessageSuccessListener = (startListening: AppStartListening): void => {
    startListening({
        actionCreator: sendMessageSuccess,
        effect: (_, { dispatch }) => {
            console.log('POST Successful!');
        }
    })
}