import React, { useState } from "react";

const Form = props => {
    const { inputs, setInputs } = props;
    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        cpassword: ''
    });

    const onChange = e => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });

        let error = '';
        if (value.length > 0) {
            if ((name === 'firstName' || name === 'lastName') && value.length < 2) {
                error = `${name} must be 3 characters or longer`;
            } else if (name === 'email' && value.length < 2) {
                error = 'Email is required';
            } else if ((name === 'password' || name === 'cpassword') && value.length < 2) {
                error = 'Password must be 8 characters or longer';
            } else if (name === 'cpassword' && value !== inputs.password) {
                error = 'Passwords must match';
            }
        }

        setErrors({
            ...errors,
            [name]: error
        });
    };

    return (
        <form>
            <div className="form-group">
                <label htmlFor="firstName">First Name </label>
                <input onChange={onChange} type="text" name="firstName" />
                {errors.firstName && <p style={{ color: 'red' }}>{errors.firstName}</p>}
            </div>
            <div className="form-group">
                <label htmlFor="lastName">Last Name </label>
                <input onChange={onChange} type="text" name="lastName" />
                {errors.lastName && <p style={{ color: 'red' }}>{errors.lastName}</p>}
            </div>
            <div className="form-group">
                <label htmlFor="email">Email </label>
                <input onChange={onChange} type="text" name="email" />
                {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
            </div>
            <div className="form-group">
                <label htmlFor="password">Password </label>
                <input onChange={onChange} type="password" name="password" />
                {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
            </div>
            <div className="form-group">
                <label htmlFor="cpassword">Confirm Password </label>
                <input onChange={onChange} type="password" name="cpassword" />
                {errors.cpassword && <p style={{ color: 'red' }}>{errors.cpassword}</p>}
            </div>
        </form>
    );
}

export default Form;
