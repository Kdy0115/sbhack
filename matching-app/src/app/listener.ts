import { createListenerMiddleware, TypedStartListening } from "@reduxjs/toolkit";
import { addLoginListener, addLoginSuccessListener } from "../features/auth/login/LoginListener";
import { addMessageListener, addSendMessageSuccessListener } from "../features/messages/MessageListener";
import { AppDispatch, RootState } from "./store";


const listenerMiddleware = createListenerMiddleware();

export type AppStartListening = TypedStartListening<RootState, AppDispatch>;

export const startAppListening = listenerMiddleware.startListening as AppStartListening;

addLoginListener(startAppListening);
addLoginSuccessListener(startAppListening);

addMessageListener(startAppListening);
addSendMessageSuccessListener(startAppListening);


export default listenerMiddleware;
