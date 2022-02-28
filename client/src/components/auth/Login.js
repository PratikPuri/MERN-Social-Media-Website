import React, {Fragment, useState} from 'react';

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const {email, password} = formData;
    
    const onChange = e => {setFormData({...formData, [e.target.name]: e.target.value});}

    const onSubmit = e=> {
        console.log(formData);
    }

    return (<Fragment>
            <h1 className="large text-primary">Login</h1>
            <p className="lead"><i className="fas fa-user"></i> Sign In To Your Account</p>
            <form className="form" onSubmit={e=>onSubmit(e)}>
            <div className="form-group">
                <input type="email" placeholder="Email Address" name="email" value = {email} onChange = {e=> onChange(e)} required />
            </div>
            <div className="form-group">
                <input
                type="password"
                placeholder="Password"
                name="password"
                minLength="6"
                value = {password} onChange = {e=> onChange(e)} required />
            </div>
            <input type="submit" className="btn btn-primary" value="Login" />
            </form>
        </Fragment>
    )
}

export default Login