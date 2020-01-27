import { mockedResponse } from './mockedResponse';

export const apiCall = () => {
   return new Promise((resolve) => {
       setTimeout(() => {
           resolve(mockedResponse)
       }, 500)
   }) 
}