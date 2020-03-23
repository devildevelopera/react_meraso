import React from "react";
import UserUpdate from "./UserUpdate";

function LatestUpdate(props) {
	return (
		<div className="latest-update">
			<div className="update-title">
				<h2>LATEST UPDATES</h2>
			</div>
			<ul>
				<UserUpdate postOfflineIcon={props.postOfflineIcon} />
				<UserUpdate postOfflineIcon={props.postOfflineIcon} />
				<UserUpdate postOfflineIcon={props.postOfflineIcon} />
				<UserUpdate postOfflineIcon={props.postOfflineIcon} />
				<UserUpdate postOfflineIcon={props.postOfflineIcon} />
				<UserUpdate postOfflineIcon={props.postOfflineIcon} />
				<UserUpdate postOfflineIcon={props.postOfflineIcon} />
			</ul>
		</div>
	);
}

export default LatestUpdate;
