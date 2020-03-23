import React from "react";
import { Link } from "react-router-dom";
import BurgerIcon from "./../require/img/home/burger.png";
import HomeIcon from "./../require/img/home/nav-1.png";
import ProfileIcon from "./../require/img/home/nav-2.png";
import NotificationIcon from "./../require/assets/img/sidebar-log/10.png";
import AlarmIcon from "./../require/assets/img/sidebar-log/4.png";
import MemberIcon from "./../require/assets/img/sidebar-log/5.png";
import PageIcon from "./../require/img/home/nav-6.png";
import FeedbackIcon from "./../require/img/home/nav-7.png";
import CoinIcon from "./../require/img/home/nav-8.png";
import SettingIcon from "./../require/img/home/nav-9.png";
import logoutIcon from "./../require/img/home/logout.png";
import "./../require/js/app.js";
function NavSidebar() {
    return (
        <div className="grid-slidebarnav-wrapper">
            <div className="mobile-navigation">
                <a href="#" id="sidebarCollapse">
                    <img
                        src={BurgerIcon}
                        alt="burger"
                        className="sidebarCollapseBtn"
                    />
                </a>
            </div>
            <nav id="sidebar" className="active">
                <div className="sidebar-header"></div>
                    <ul className="list-unstyled components">
                        <li>
                            <a href="#" id="sidebarCollapseUi">
                                <img
                                    src={BurgerIcon}
                                    className="sidebarCollapseBtn"
                                    alt="burger"
                                />
                            </a>
                        </li>
                        <li>
                            <Link to="/home">
                                <img src={HomeIcon} alt="Home" />
                                <span>Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/profile">
                                <img src={ProfileIcon} alt="Profile" />
                                <span>About</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/notification">
                                <img src={NotificationIcon} alt="Notification" />
                                <span>Notification</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/library">
                                <img src={AlarmIcon} alt="Alarm" />
                                <span>Alarms</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/message">
                                <img src={MemberIcon} alt="Member" />
                                <span>Members</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/media">
                                <img src={PageIcon} alt="Page" />
                                <span>page</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/feedback">
                                <img src={FeedbackIcon} alt="Feedback" />
                                <span>feedback now</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/account">
                                <img src={CoinIcon} alt="Coin" />
                                <span>Coin Page</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/accout_setting">
                                <img src={SettingIcon} alt="Setting" />
                                <span>Setting</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <img src={logoutIcon} alt="Logout" />
                                <span>Logout</span>
                            </Link>
                        </li>
                    </ul>
            </nav>
        </div>
    );
}

export default NavSidebar;
