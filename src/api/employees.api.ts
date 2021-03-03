import {instance} from "./instance";
import IEmployees from '../interfaces/employees.interface'

interface IEmployeesAPI {
    getEmployees(): Promise<IEmployees.Employee[]>
}

export const EmployeesApi: IEmployeesAPI = {

    async getEmployees(): Promise<IEmployees.Employee[]> {
        try {
            const result = await instance.get('/v1/employees')
            return result.data.data
        } catch (error) {
            throw error
        }
    },
}