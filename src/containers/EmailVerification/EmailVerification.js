import React, { useEffect, useCallback } from 'react';

import axios from 'axios';

import Aux from '../../hoc/Auxiliary';
import classes from './EmailVerification.module.css';

const EmailVerification = (props) => {
  const verifyEmail = useCallback(() => {
    axios
      .get('api')
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  useEffect(() => {
    verifyEmail();
  }, [verifyEmail]);

  return (
    <Aux>
      <div className={classes.wrapper}>
          <p>Your email has been verified successfully!</p>
      </div>
    </Aux>
  );
};

export default EmailVerification;
