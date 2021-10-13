import React from 'react';

import brandLogo from '../../../logo.svg';
import classes from './Logo.module.css';

const Logo = (props) => {
    return (
        <div className={classes.Logo} style={{ height: props.height }}>
            <img src={brandLogo} className="App-logo" alt="logo" />
        </div>
    );
};

export default Logo;