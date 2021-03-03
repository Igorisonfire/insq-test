import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import employeesReducer from '../features/employees/employeesSlice';

export const store = configureStore({
  reducer: {
    employees: employeesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
