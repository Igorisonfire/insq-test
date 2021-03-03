import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../app/store';
import {EmployeesApi} from '../../api/employees.api'
import IEmployees from '../../interfaces/employees.interface'

interface IEmployeesState {
  employees: IEmployees.Employee[];
  idToggle: boolean
  nameToggle: boolean
}

const initialState: IEmployeesState = {
  employees: [],
  idToggle: true,
  nameToggle: true
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
    sortEmployeesById: (state: IEmployeesState) => {
      let employees = state.employees.slice()
      let toggle = state.idToggle

      employees.sort( (a:IEmployees.Employee, b: IEmployees.Employee) => {
        if (Number(a.id) > Number(b.id)) {
          return -1;
        }
        if (Number(a.id) < Number(b.id)) {
          return 1;
        }
        return 0;
      });

      return {
        ...state,
        employees: toggle ? employees : employees.reverse(),
        idToggle: !toggle
      }
    },
    sortEmployeesByName: (state: IEmployeesState) => {
      let employees = state.employees.slice()
      let toggle = state.nameToggle

      employees.sort( (a:IEmployees.Employee, b: IEmployees.Employee) => {
        if (a.employee_name > b.employee_name) {
          return 1;
        }
        if (a.employee_name < b.employee_name) {
          return -1;
        }
        return 0;
      });

      return {
        ...state,
        employees: toggle ? employees : employees.reverse(),
        nameToggle: !toggle
      }
    },
  },
});

export const { setEmployees, sortEmployeesById, sortEmployeesByName } = employeesSlice.actions;

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
