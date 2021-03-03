import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../app/store';
import {EmployeesApi} from '../../api/employees.api'
import IEmployees from '../../interfaces/employees.interface'

interface IEmployeesState {
  employees: IEmployees.Employee[];
}

const initialState: IEmployeesState = {
  employees: [],
};

export const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    setEmployees: (state: IEmployeesState, action: PayloadAction<IEmployees.Employee[]>) => {
      const employees = action.payload

      return {
        ...state,
        employees
      }
    },
  },
});

export const { setEmployees } = employeesSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const getEmployees = (): AppThunk => async (dispatch) => {
  try {
    const response = await EmployeesApi.getEmployees()
    dispatch(setEmployees(response))
  } catch (error) {
    console.log(error)
  }
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectEmployeesState = (state: RootState) => state.employees;

export default employeesSlice.reducer;
