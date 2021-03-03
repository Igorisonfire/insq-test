import React from 'react';
import './index.scss'
import IEmployees from '../../interfaces/employees.interface'

interface IProps extends IEmployees.Employee{

}

export function EmployeesRow(props: IProps) {

    const {id, profile_image, employee_name, employee_age, employee_salary} = props

    return (
        <div className={'employee-row'}>
            <div className={'id'}>
                <p>{id}</p>
            </div>
            <div className={'profile_image'}>
                <img src={profile_image} alt='avatar'/>
            </div>
            <div className={'employee_name'}>
                <p>{employee_name}</p>
            </div>
            <div className={'employee_age'}>
                <p>{employee_age}</p>
            </div>
            <div className={'employee_salary'}>
                <p>{employee_salary}</p>
            </div>
        </div>
    );
}
