import { configureStore } from '@reduxjs/toolkit';
import questionReducer from './slices/questionSlice';
import categoryReducer from './slices/categorySlice';

export const store = configureStore({
  reducer: {
    questions: questionReducer,
    categories: categoryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
