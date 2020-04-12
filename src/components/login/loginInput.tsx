import React from 'react';

import "./loginInput.scss"

const LoginInput = ({handleChange, label, value, name, required}: { handleChange: any; label: string; value: string, name: string, required: boolean }) => {
    return (
        <div className={"group"}>
            <input
                className={"form-input"}
                onChange={event => handleChange(event)}
                name={name}
                value={value}
                required={required}
            />
            {
                label ?
                    (<label className={`${value.length ? 'shrink' : ""}  form-input-label`}>
                        {label}
                    </label>)
                    : null
            }
        </div>

    );
};

export default LoginInput;