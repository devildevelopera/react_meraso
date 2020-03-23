import React from "react";
import OnlineMembers from "./OnlineMembers";
import OfflineMembers from "./OfflineMembers";
import PopularMembers from "./PopularMembers";

function TabMembers(props) {
    return (
        <div className="tabs_members">
            <div className="tabs_title">
                <h2>MEMBERS</h2>
            </div>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                    <a
                        className="nav-link active"
                        id="home-tab"
                        data-toggle="tab"
                        href="#home"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                    >
                        Newest
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        className="nav-link"
                        id="profile-tab"
                        data-toggle="tab"
                        href="#profile"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                    >
                        Active
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        className="nav-link"
                        id="contact-tab"
                        data-toggle="tab"
                        href="#contact"
                        role="tab"
                        aria-controls="contact"
                        aria-selected="false"
                    >
                        Popular
                    </a>
                </li>
            </ul>

            <div className="tab-content" id="myTabContent">
                <OnlineMembers postOnlineIcon={props.postOnlineIcon} />
                <OfflineMembers postOfflineIcon={props.postOfflineIcon} />
                <PopularMembers postOfflineIcon={props.postOfflineIcon} />
            </div>
        </div>
    );
}

export default TabMembers;
