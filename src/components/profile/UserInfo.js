import React from "react";
import ProfileInfo from "./ProfileInfo";

import ProfileImg from "./../../require/img/home/profile-0mg.png";
// import SubscriberImg from "./../../require/img/home/subscriber.png";
import PrivateMsgImg from "./../../require/img/home/privateMsgIcon.png";
// import FansImg from "./../../require/img/home/fans.png";
import PromoteImg from "./../../require/img/home/promoteIcon.png";
import { Link } from "react-router-dom";

import ProfileBannerImg from "./../../require/img/home/profilebanner.jpg";

function UserInfo() {
    return (
        <div className="profile-content pt-0">
            <div>
                <img src={ProfileBannerImg} width="100%" height="300" alt="" />
            </div>
            <div className="profile-section">
                <ProfileInfo profileImg={ProfileImg} />

                <div className="social-promotion pt-5 mt-3">
                    {/* <a href="#">
                        <img src={SubscriberImg} alt="subscriber" />
                    </a>
                    <a href="#">
                        <img src={PrivateMsgImg} alt="promote" />
                    </a>
                    <a href="#">
                        <img src={FansImg} alt="fans" />
                    </a>
                    <a href="#">
                        <img src={PromoteImg} alt="promote" />
                    </a> */}
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-4">
                                    <button className="btn btn-light btn-sm btn-block text-left">
                                        <i className="fas fa-user-plus mr-2"></i>
                                        Become My Fan
                                    </button>
                                    <button className="btn btn-light btn-sm btn-block text-left">
                                        <i className="fas fa-play mr-2"></i>
                                        Subscribe
                                    </button>
                                    <button className="btn btn-light btn-sm btn-block text-left">
                                        <img
                                            src={PromoteImg}
                                            width="20"
                                            height="20"
                                            className="mr-2"
                                            alt=""
                                        />
                                        Promote Me
                                    </button>
                                </div>
                            </div>

                            <div className="row mt-2">
                                <div className="col-md-4">
                                    <button className="btn btn-light btn-sm btn-block text-left">
                                        <img
                                            src={PrivateMsgImg}
                                            className="img-fluid mr-2"
                                            width="20"
                                            height="20"
                                            alt=""
                                        />
                                        Private Message
                                    </button>
                                </div>
                                <div className="col-md-8">
                                    <form>
                                        <div className="form-group">
                                            <div className="row m-0 mt-2 mt-lg-0 mt-md-0">
                                                <div className="col-md-10 my-3 my-lg-0 my-md-0">
                                                    <input
                                                        type="text"
                                                        className="form-control form-control-sm"
                                                    />
                                                </div>
                                                <div className="col-md-2">
                                                    <button className="btn btn-light btn-sm ">
                                                        Send
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="profile-links">
                <Link to="/post">Timeline</Link>
                <Link to="/user-details">Profile</Link>
                <Link to="/community">Communities</Link>
                <Link to="/profile-album">Photos</Link>
                <Link to="/exclusive">Videos</Link>
                <Link to="#">Donation</Link>
                <Link to="#">Buddy Squad</Link>
                <Link to="/products">My Business</Link>
                <Link to="/exclusive">Exclusive Content</Link>
                <div className="dropdown">
                    <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        <i className="fa fa-circle" aria-hidden="true"></i>
                        <i className="fa fa-circle" aria-hidden="true"></i>
                        <i className="fa fa-circle" aria-hidden="true"></i>
                    </button>
                    <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                    >
                        {/* <!-- <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <a className="dropdown-item" href="#">Something else here</a> --> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserInfo;
