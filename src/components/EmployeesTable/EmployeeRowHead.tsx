import React from 'react';
import './index.scss'
import {useDispatch} from 'react-redux'
import {sortEmployeesByName, sortEmployeesById} from '../../features/employees/employeesSlice'

interface IProps{
}

export function EmployeesRowHead(props: IProps) {
    const dispatch = useDispatch()

    const sortById = () => {
        console.log('sortById')
        dispatch(sortEmployeesById())
    }

    const sortByName = () => {
        console.log('sortByName')
        dispatch(sortEmployeesByName())
    }

    return (
        <div className={'employee-row head-row'}>
            <div className={'id'} onClick={sortById}>
                <p className={'medium'}>ID</p>
            </div>
            <div className={'profile_image'}>
                <p className={'medium'}>Avatar</p>
            </div>
            <div className={'employee_name'} onClick={sortByName}>
                <p className={'medium'}>Name</p>
            </div>
            <div className={'employee_age'}>
                <p className={'medium'}>Age</p>
            </div>
            <div className={'employee_salary'}>
                <p className={'medium'}>Salary</p>
            </div>
        </div>
    );
}
