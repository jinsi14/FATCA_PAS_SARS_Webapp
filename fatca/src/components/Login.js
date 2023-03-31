import React from "react";

const Login = props => {

    return (
    <div>
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                <button type="button" class="btn btn-outline-secondary">Home</button>
        
                <form class="d-flex" onsubmit="return validate()" action="search.html">
                    <input
                    class="form-control me-2"
                    id="user_name"
                    type="text"
                    placeholder="UserName"
                    required
                    />
    
                    <input
                    class="form-control me-2"
                    id="pass_word"
                    type="password"
                    placeholder="Password"
                    equired
                    />
    
                    <button type="submit" class="btn btn-outline-secondary">Login</button>
                </form>
                </div>
            </nav>
        </div>
        <div class="img-fluid">
            <img src="./images/fatca1.jpg" alt="fatca" height="100%" width="100%" />
        </div>

    </div>
    );
};

export default Login;