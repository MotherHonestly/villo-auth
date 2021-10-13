import React from 'react';

const PasswordInput = props => {
    return (
        <div style={{ width: props.width }}>
            <input type="password" className={classes.TextInput} placeholder={props.placeholder} />
        </div>
    );
};

export default PasswordInput;