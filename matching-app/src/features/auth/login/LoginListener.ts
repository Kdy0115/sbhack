import { AppStartListening } from "../../../app/listener";
import { useNavigate } from 'react-router-dom';
import { login, loginFailure, loginSuccess } from './LoginSlice';
import { fetchLogin } from "../../../app/api";

export const addLoginListener = (startListening: AppStartListening): void => {
    startListening({
        actionCreator: login,
        effect: async (action, { dispatch }) => {
            try {
                console.log(action.payload);
                const authenticated = await fetchLogin(action.payload);
                console.log(authenticated);
                if(authenticated) {
                    console.log('aaaaa');
                    // dispatch(loginSuccess());
                } else {
                    // dispatch(loginFailure());
                    console.log('aaaaa');
                }
            } catch (e) {
                // dispatch(loginFailure());
                console.log('aaaaa');
            }
        }
    })
};

export const addLoginSuccessListener = (startListening: AppStartListening): void => {
    startListening({
        actionCreator: loginSuccess,
        effect: (_, { dispatch }) => {
            const navigate = useNavigate();
            // navigate('/home');
        }
    })
}