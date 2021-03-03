import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {getEmployees, selectEmployeesState} from './employeesSlice'

export function Employees() {
  const dispatch = useDispatch()
  const employeesState = useSelector(selectEmployeesState);

  useEffect(() => {
    dispatch(getEmployees())
  }, [dispatch])

  console.log('employeesState', employeesState)

  return (
    <div>

    </div>
  );
}
