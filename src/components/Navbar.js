import React from "react";
import { Link } from "react-router-dom";

// Required Image Files
import Logo from "./../require/img/home/logo.png";
import ProfileImage from "./../require/img/home/profile-icon.png";
import SearchIcon from "./../require/img/home/search-icon.png";
import FileIcon from "./../require/img/home/file.png";
import CartIcon from "./../require/img/home/cart.png";
import SOSIcon from "./../require/img/home/sos-icon.png";
import UploadVideoIcon from "./../require/img/home/uploads-file.png";
import VideoIcon from "./../require/img/home/video.png";
import UploadImageIcon from "./../require/img/home/uploads-file1.png";
import UploadLiveIcon from "./../require/img/home/uploads-image.png";
import BoxIcon from "./../require/img/home/box.png";

function Navbar() {
    return (
        <header>
            <nav
                id="navbar_menu"
                className="navbar navbar-expand-lg navbar-light"
            >
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src={Logo} alt="Logo" />
                    </Link>
                    <div className="nav_icons">
                        <div className="profile-icon">
                            <div className="dropdown show">
                                <a
                                    className="btn btn-secondary dropdown-toggle"
                                    href="#"
                                    role="button"
                                    id="dropdownMenuLink"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    jhon
                                </a>
                                <Link to="/profile">
                                    <img src={ProfileImage} alt="Profile" />
                                </Link>
                                <div
                                    className="dropdown-menu"
                                    aria-labelledby="dropdownMenuLink"
                                >
                                    <a className="dropdown-item" href="#">
                                        Edit detail
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="other_icons">
                            <a
                                href="#"
                                data-toggle="modal"
                                data-target="#exampleModalCenter1"
                            >
                                <img src={SearchIcon} alt="Icon" />
                            </a>
                            <a href="#">
                                <img src={FileIcon} alt="Icon" />
                            </a>
                            <a href="#">
                                <img src={CartIcon} alt="Icon" />
                            </a>
                            <a href="#">
                                <img src={SOSIcon} alt="Icon" />
                            </a>
                            <div className="dropdown show">
                                <a
                                    className="btn btn-secondary dropdown-toggle"
                                    href="#"
                                    role="button"
                                    id="dropdownMenuLink"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    <img src={VideoIcon} alt="Icon" />
                                </a>
                                <div
                                    className="dropdown-menu"
                                    aria-labelledby="dropdownMenuLink"
                                >
                                    <Link
                                        className="dropdown-item"
                                        to="/upload-media"
                                    >
                                        <img
                                            src={UploadVideoIcon}
                                            alt="Upload Video"
                                        />
                                        Upload video
                                    </Link>
                                    <Link
                                        className="dropdown-item"
                                        to="/upload-media"
                                    >
                                        <img
                                            src={UploadImageIcon}
                                            alt="Upload"
                                        />
                                        Upload picture
                                    </Link>
                                    <Link
                                        className="dropdown-item"
                                        to="/upload-media"
                                    >
                                        <img
                                            src={UploadLiveIcon}
                                            alt="Upload Live"
                                        />
                                        Upload live
                                    </Link>
                                </div>
                            </div>
                            <a href="#">
                                <img src={BoxIcon} alt="Icon" />
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
            <div
                className="modal fade"
                id="exampleModalCenter1"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="exampleModalCenter1Title"
                aria-hidden="true"
            >
                <div
                    className="modal-dialog modal-dialog-centered"
                    role="document"
                >
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="search_field">
                                <input type="text" placeholder="Search" />
                            </div>
                            <div className="close_btn">
                                <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                >
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
