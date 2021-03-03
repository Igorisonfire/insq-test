import React from 'react';
import './index.scss'

interface IProps{
}

export function EmployeesRowHead(props: IProps) {

    return (
        <div className={'employee-row head-row'}>
            <div className={'id'}>
                <p className={'medium'}>ID</p>
            </div>
            <div className={'profile_image'}>
                <p className={'medium'}>Avatar</p>
            </div>
            <div className={'employee_name'}>
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
