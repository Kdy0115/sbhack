import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { loginSliceReducer, LoginState } from '../features/auth/login/LoginSlice';
import { matchingSliceReducer, MatchingState } from '../features/matching/MatchingSlice';
import { messageSliceReducer, MessageState } from '../features/messages/MessageSlice';
import listener from './listener';

export interface RootState {
  login: LoginState;
  matching: MatchingState;
  message: MessageState;
}

export const rootReducer = combineReducers<RootState>({
  login: loginSliceReducer,
  matching: matchingSliceReducer,
  message: messageSliceReducer,
});


export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false,}).prepend(listener.middleware),
  devTools: true,
});

export type AppDispatch = typeof store.dispatch;
// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >;
