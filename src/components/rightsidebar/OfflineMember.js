import React from "react";

function OfflineMember(props) {
	return (
		<div className="user-detail">
			<div className="user-img">
				<img src={props.postOfflineIcon} alt="offline user" />
			</div>
			<div className="user-name">
				<h2>Profile name</h2>
			</div>
		</div>
	);
}

export default OfflineMember;
