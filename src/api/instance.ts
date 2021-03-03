import axios from 'axios'

export const baseAPIUrl = 'http://dummy.restapiexample.com/api'

export const instance: any = axios.create({
    baseURL: baseAPIUrl,
    responseType: 'json'
})