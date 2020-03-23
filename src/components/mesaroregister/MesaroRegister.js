import React from "react";
import LoginLogo from "./../../require/login/logo.jpg";
import { Link } from "react-router-dom";
function MesaroRegister() {
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
                            <h2 className="text-center">Register</h2>
                            <form name="form">
                                <div className="form-group">
                                    <label htmlFor="firstname">Frist Name</label>
                                    <input type="text" className="form-control" name="firstname" />                                 
                                </div>
                                <div className="form-group">
                                    <label htmlFor="lastname">Last Name</label>
                                    <input type="text" className="form-control" name="lastname" />                                 
                                </div>
                                <div className="form-group">
                                    <label htmlFor="username">Email</label>
                                    <input type="email" className="form-control" name="email" />                                 
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" className="form-control" name="password"  />                                
                                </div>
                                <div className="form-group">
                                    <Link to="/login"  className="btn btn-primary">Register</Link>
                                    <Link to="/login" className="btn btn-link">Login</Link>
                                </div>
                            </form>
                        </div>                    
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MesaroRegister;
