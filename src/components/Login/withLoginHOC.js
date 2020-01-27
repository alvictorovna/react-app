import React from 'react';
import {Login} from './Login';
import {withRouter} from 'react-router-dom';

export const withLoginHOC = WrappedComponent => withRouter(({ isLogged, ...props }) => {
    const {history: {location}} = props;
    return (
      isLogged
        ? <WrappedComponent {...props} />
        : <Login {...props} location={location}/>)
  })