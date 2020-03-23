import React from "react";

import LoginLogo from "./../../require/login/logo.jpg";
import { Link } from "react-router-dom";

function MesaroLogin() {
    return (
        <div id="loginSec" style={{marginTop:"-72px"}}>
            <div className="container py-5">
                <div id="loginLogo" className="my-5">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-12 offset-lg-4 offset-md-4 text-center">
                            <img src={LoginLogo} className="img-fluid" alt="" />                           
                        </div>
                    </div>
                </div>
                <div id="loginOptionSec">
                    <div className="row">
                        <div className="offset-md-3 col-md-6">                            
                            <h2 className="text-center">Login</h2>
                            <form name="form">
                                <div className="form-group">
                                    <label htmlFor="username">Username</label>
                                    <input type="email" className="form-control" name="email" />                                 
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" className="form-control" name="password"  />
                                
                                </div>
                                <div className="form-group">
                                    <Link to="/home" className="btn btn-primary">Login</Link>
                                    <Link to="/register" className="btn btn-link">Register</Link>
                                </div>
                            </form>
                        </div>                    
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MesaroLogin;
