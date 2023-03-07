import { AppStartListening } from "../../../app/listener";
import { useNavigate } from 'react-router-dom';
import { login, loginFailure, loginSuccess } from './LoginSlice';
import { fetchLogin } from "../../../app/api";

export const addLoginListener = (startListening: AppStartListening): void => {
    startListening({
        actionCreator: login,
        effect: async (action, { dispatch }) => {
            try {
                const response = await fetchLogin(action.payload);
                const token = response.data;
                document.cookie = `token=${token}; path=/`;
                if(response.data.token == 'OK') {
                    dispatch(loginSuccess());
                } else {
                    dispatch(loginFailure());
                }
            } catch (e) {
                dispatch(loginFailure());
            }
        }
    })
};

export const addLoginSuccessListener = (startListening: AppStartListening): void => {
    startListening({
        actionCreator: loginSuccess,
        effect: (_, { dispatch }) => {
            console.log('Login successful!');
        }
    })
}