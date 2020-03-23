import React from "react";

// Required Image Files

import PostOfflineIcon from "./../../require/img/home/offline.png";
import PostOnlineIcon from "./../../require/img/home/online.png";
import TabMembers from "../rightsidebar/TabMembers";
import LatestUpdate from "./../rightsidebar/LatestUpdate";

function RightSidebar() {
    return (
        <div className="right_bar">
            <LatestUpdate postOfflineIcon={PostOfflineIcon} />
            <TabMembers
                postOfflineIcon={PostOfflineIcon}
                postOnlineIcon={PostOnlineIcon}
            />
        </div>
    );
}

export default RightSidebar;
