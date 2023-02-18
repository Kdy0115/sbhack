import { createListenerMiddleware, TypedStartListening } from "@reduxjs/toolkit";
import { addLoginListener, addLoginSuccessListener } from "../features/auth/login/LoginListener";
import { AppDispatch, RootState } from "./store";


const listenerMiddleware = createListenerMiddleware();

export type AppStartListening = TypedStartListening<RootState, AppDispatch>;

export const startAppListening = listenerMiddleware.startListening as AppStartListening;

addLoginListener(startAppListening);
addLoginSuccessListener(startAppListening);

export default listenerMiddleware;