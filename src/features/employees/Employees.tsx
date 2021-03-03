import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {getEmployees, selectEmployeesState} from './employeesSlice'
import './Employees.scss'
import {EmployeesRow} from '../../components/EmployeeRow'
import IEmployees from '../../interfaces/employees.interface'

export function Employees() {
    const dispatch = useDispatch()
    const employeesState = useSelector(selectEmployeesState);
    const employees = employeesState.employees

    useEffect(() => {
        dispatch(getEmployees())
    }, [dispatch])

    console.log('employeesState', employeesState)

    if (!employees.length) return null

    return (
        <div className={'employees-table'}>
            {employees.map((item: IEmployees.Employee) => (
                <EmployeesRow
                    key={item.id}
                    employee_age={item.employee_age}
                    employee_name={item.employee_name}
                    employee_salary={item.employee_salary}
                    id={item.id}
                    profile_image={item.profile_image}/>
            ))}
        </div>
    );
}
