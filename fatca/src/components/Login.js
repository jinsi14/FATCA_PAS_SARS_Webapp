import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = props => {

    const[enteredUsername, setEnteredUsername] = useState('');
    const[enteredPassword, setEnteredPassword] = useState('');
    localStorage.setItem("Name", enteredUsername);

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };

    const passwordChnageHandler =(event) => {
        setEnteredPassword(event.target.value);
    }

    const loginNavigate = useNavigate();
    const handleLoginClick = (event) => {
        event.preventDefault();

        if(enteredUsername.trim().length < 2 ){
            alert("invalid username");
            return;
        }
         if (enteredPassword.trim().length < 5)
         {
            alert("password must be more than 5 characters");
            return;
         }
        loginNavigate("/search");
    }
    
    return (
    <div>
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                <button type="button" className="btn btn-outline-secondary">Home</button>
        
                <form onSubmit ={handleLoginClick} className="d-flex">
                    <input
                    className="form-control me-2"
                    id="user_name"
                    type="text"
                    placeholder="UserName"
                    onChange={usernameChangeHandler}
                    required
                    />
    
                    <input
                    className="form-control me-2"
                    id="pass_word"
                    type="password"
                    placeholder="Password"
                    onChange={passwordChnageHandler}
                    required
                    />

                    <button  type="submit" className="btn btn-outline-secondary">Login</button>
                </form>
                </div>
            </nav>
        </div>
        <div className="img-fluid">
            <img src="./images/fatca1.jpg" alt="fatca" height="100%" width="100%" />
        </div>

    </div>
    );
};

export default Login;