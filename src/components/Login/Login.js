import React from 'react';
import {LoginForm} from './LoginForm';
import { LoginContext } from '../Router/AppRouter';


export const Login  = ({location}) => (
    <LoginContext.Consumer>
        {({setLoginStatus, isLogged}) => (
            <div>
                <div>
                    <LoginForm onSubmit = {() => setLoginStatus(true, location)}/>
                </div>
            </div>
        )}
    </LoginContext.Consumer>
);


