import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {getEmployees, selectEmployeesState} from './employeesSlice'
import './Employees.scss'
import {EmployeesTable} from '../../components/EmployeesTable/EmployeesTable'

export function Employees() {
    const dispatch = useDispatch()
    const employeesState = useSelector(selectEmployeesState);
    const employees = employeesState.employees

    useEffect(() => {
        dispatch(getEmployees())
    }, [dispatch])

    if (!employees.length) return null

    return (
        <div className={'employees-page-wrapper global-container'}>
            <EmployeesTable employees={employees}/>
        </div>
    );
}
