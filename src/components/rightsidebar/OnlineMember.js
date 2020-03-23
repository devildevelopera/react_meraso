import React from "react";

function OnlineMember(props) {
	return (
		<li>
			<a href="#">
				<div className="user-detail">
					<div className="user-img">
						<img src={props.postOnlineIcon} alt="offline user" />
					</div>
					<div className="user-name">
						<h2>Profile name</h2>
					</div>
				</div>
			</a>
		</li>
	);
}

export default OnlineMember;
