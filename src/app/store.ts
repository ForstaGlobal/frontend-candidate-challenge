import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import todoReducer from '../features/todoApp/todoSlice';

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

export const setupStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer: combineReducers({
      todo: todoReducer,
    }),
    preloadedState
  })
}


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppStore = ReturnType<typeof setupStore>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
