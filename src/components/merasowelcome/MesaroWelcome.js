import React from "react";

import LoginLogo from "./../../require/login/logo.jpg";
import { Link } from "react-router-dom";

function MesaroWelcome() {
    return (
        <div id="loginSec" style={{marginTop:"-72px"}}>
            <div className="container py-5">
                <div id="loginLogo" className="my-5">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-12 offset-lg-4 offset-md-4 text-center">
                            <img src={LoginLogo} className="img-fluid" alt="" />
                            <h6 className="mt-3">
                                The Neighbourhood World Begins Here !!
                            </h6>
                        </div>
                    </div>
                </div>
                <div id="loginOptionSec">
                    <div className="row">
                        <div className="col-lg-8 col-md-8 col-12 offset-lg-2 offset-md-2">
                            <div className="row">
                                <div
                                    id="loginLeftOption"
                                    className="col-lg-5 col-md-5 col-12 offset-lg-1 offset-md-1 py-3"
                                >
                                    <h6 className="text-center mb-4">
                                        Have an account?
                                    </h6>

                                    <a
                                        href="#"
                                        className="btn btn-mesaro btn-sm btn-block mb-4"
                                    >
                                        <i className="fas fa-mobile-alt"></i>{" "}
                                        Sign in with phone
                                    </a>

                                    <Link
                                        to="/login"
                                        className="btn btn-mesaro btn-sm btn-block mb-2"
                                    >
                                        <i className="far fa-envelope"></i> Sign
                                        in with email
                                    </Link>

                                    <h5 className="text-center mb-3">or</h5>

                                    <a
                                        href="#"
                                        className="btn btn-mesaro btn-sm btn-block mb-4 mb-lg-0 mb-md-0"
                                    >
                                        <i className="fas fa-code"></i> Sign in
                                        with OTP
                                    </a>
                                </div>

                                <div
                                    id="loginRightOption"
                                    className="col-lg-5 col-md-5 col-12 py-3"
                                >
                                    <h6 className="text-center mb-4">
                                        Not part of us yet? Join now
                                    </h6>

                                    <a
                                        href="#"
                                        className="btn btn-mesaro btn-sm btn-block mb-4"
                                    >
                                        Register with Mobile Number
                                    </a>

                                    <a
                                        href="/register"
                                        className="btn btn-mesaro btn-sm btn-block mb-2"
                                    >
                                        Register with Email
                                    </a>

                                    <h5 className="text-center mb-3">or</h5>

                                    <a
                                        href="#"
                                        className="btn btn-mesaro btn-sm btn-block"
                                    >
                                        Register a Professional Account
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MesaroWelcome;
