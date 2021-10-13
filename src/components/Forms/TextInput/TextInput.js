import React from 'react';

import classes from './TextInput.module.css';

const TextInput = props => {
    return (
        <div style={{ width: props.width }}>
            <input type={props.inputType} className={classes.TextInput} placeholder={props.placeholder} />
        </div>
    );
};

export default TextInput;