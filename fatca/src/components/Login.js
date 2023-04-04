import React from "react";
import { useNavigate } from "react-router-dom";

const Login = props => {

    const loginNavigate = useNavigate();
    const handleLoginClick = props => {
        loginNavigate("/search");
    }

    return (
    <div>
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                <button type="button" className="btn btn-outline-secondary">Home</button>
        
                <form className="d-flex">
                    <input
                    className="form-control me-2"
                    id="user_name"
                    type="text"
                    placeholder="UserName"
                    required
                    />
    
                    <input
                    className="form-control me-2"
                    id="pass_word"
                    type="password"
                    placeholder="Password"
                    required
                    />

                    <button onClick={handleLoginClick} type="submit" className="btn btn-outline-secondary">Login</button>
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