import React from "react";

function UserUpdate(props) {
	return (
		<li>
			<a href="#">
				<div className="user-update">
					<div className="user-img">
						<img src={props.postOfflineIcon} alt="offline user" />
					</div>
					<div className="user-info">
						<h2>
							<span className="post">Nicolina </span>
							posted an update
							<span className="date-detail">3 months ago</span>
						</h2>
					</div>
				</div>
			</a>
		</li>
	);
}

export default UserUpdate;
