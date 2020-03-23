import React from "react";

import PostOfflineIcon from "./../../require/img/home/offline.png";
import GroupProfileImg from "./../../require/img/home/group-profile.png";

function Community(props) {
    return (
        <div className="groups-cards shadow">
            <div className="group-banner">
                <img src={props.groupImage} height="120" width="100%" alt="" />
            </div>
            <div className="card-detail">
                <div className="group-profile">
                    <img src={GroupProfileImg} alt="Group Profile" />
                    <p>You're an organizer</p>
                </div>
                <div className="group-info">
                    <h2>{props.groupTitle}</h2>
                    <p>Public / Group</p>
                    <div className="suggested-mem">
                        <img src={PostOfflineIcon} alt="suggested member" />
                        <img src={PostOfflineIcon} alt="suggested member" />
                        <img src={PostOfflineIcon} alt="suggested member" />
                        <span>+14 members</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Community;
