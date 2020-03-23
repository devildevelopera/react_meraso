import React from "react";

// Required Image Files
import PostOfflineIcon from "./../../require/img/home/offline.png";
import PostOnlineIcon from "./../../require/img/home/online.png";
import LatestUpdate from "./../rightsidebar/LatestUpdate";
// import HotNews from "./HotNews";
import TabMembers from "./../rightsidebar/TabMembers";

function RightSidebar() {
	return (
		<div className="right_bar">
			<LatestUpdate postOfflineIcon={PostOfflineIcon} />

			{/* <HotNews postOfflineIcon={PostOfflineIcon} /> */}

			<TabMembers
				postOfflineIcon={PostOfflineIcon}
				postOnlineIcon={PostOnlineIcon}
			/>
		</div>
	);
}

export default RightSidebar;
