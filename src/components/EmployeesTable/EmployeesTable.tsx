import React from 'react';
import './index.scss'
import IEmployees from '../../interfaces/employees.interface'
import {EmployeesRowHead} from './EmployeeRowHead'
import {EmployeesRow} from './EmployeeRow'

interface IProps {
    employees: IEmployees.Employee[]
}

export function EmployeesTable(props: IProps) {
    const {employees} = props

    return (
        <div className={'employees-table'}>
            <EmployeesRowHead/>
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
