import React from "react";

class MessageNavbarSidebar extends React.Component {
    componentDidMount() {
        require("./MessageNavbarSidebar.css");
    }
    render() {
        return (
            <React.Fragment>
                <button class="sidebarCollapse d-md-none">
                    <img src="assets/img/sidebar-log/1.png" alt="logo" />
                </button>
                <ul id="sidebar1" class="sidebar1">
                    <li class="nav-item mt-0">
                        <button class="sidebarCollapse d-none d-md-block">
                            <img
                                src="assets/img/sidebar-log/1.png"
                                alt="logo"
                            />
                        </button>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="index.html">
                            <div class="img-s">
                                <img
                                    src="assets/img/sidebar-log/2.png"
                                    alt="logo"
                                />
                            </div>
                            <span>home</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="myconnections.html">
                            <div class="img-s">
                                <img
                                    src="assets/img/sidebar-log/3.png"
                                    alt="logo"
                                />
                            </div>
                            <span>About</span>
                        </a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="./pages/notification.html">
                            <div class="img-s">
                                <img
                                    src="assets/img/sidebar-log/10.png"
                                    alt="logo"
                                />
                            </div>
                            <span>Notification</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            <div class="img-s">
                                <img
                                    src="assets/img/sidebar-log/4.png"
                                    alt="logo"
                                />
                            </div>
                            <span>Alerms</span>
                        </a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="message.html">
                            <div class="img-s">
                                <img
                                    src="assets/img/sidebar-log/5.png"
                                    alt="logo"
                                />
                            </div>
                            <span>Members</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            <div class="img-s">
                                <img
                                    src="assets/img/sidebar-log/6.png"
                                    alt="logo"
                                />
                            </div>
                            <span>Edits</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            <div class="img-s">
                                <img
                                    src="assets/img/sidebar-log/7.png"
                                    alt="logo"
                                />
                            </div>
                            <span>Files</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            <div class="img-s">
                                <img
                                    src="assets/img/sidebar-log/8.png"
                                    alt="logo"
                                />
                            </div>
                            <span>Backup</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="./pages/privacy.html">
                            <div class="img-s">
                                <img
                                    src="assets/img/sidebar-log/9.png"
                                    alt="logo"
                                />
                            </div>
                            <span>Settings</span>
                        </a>
                    </li>
                </ul>
            </React.Fragment>
        );
    }
}

export default MessageNavbarSidebar;
