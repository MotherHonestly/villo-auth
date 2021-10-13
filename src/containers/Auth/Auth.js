import React, { useEffect, useCallback } from 'react';

import { Route, Switch } from 'react-router-dom';

import Aux from '../../hoc/Auxiliary';
import classes from './Auth.module.css';
import Logo from '../../components/UI/Logo/Logo';
import EmailVerification from '../EmailVerification/EmailVerification';
// import TextInput from '../../components/UI/Forms/TextInput/TextInput';

const Auth = (props) => {
  return (
    <Aux>
      <Logo height="100px" />

      <Switch>
        <Route path={'/confirm_verification/:token'} exact component={EmailVerification} />
      </Switch>
    </Aux>
  );
};

export default Auth;
