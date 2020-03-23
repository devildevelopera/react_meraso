import React from "react";
import OnlineMember from "./OnlineMember";

function OnlineMembers(props) {
	return (
		<div
			className="tab-pane fade show active"
			id="home"
			role="tabpanel"
			aria-labelledby="home-tab"
		>
			<div className="online-members">
				<ul>
					<OnlineMember postOnlineIcon={props.postOnlineIcon} />
					<OnlineMember postOnlineIcon={props.postOnlineIcon} />
					<OnlineMember postOnlineIcon={props.postOnlineIcon} />
					<OnlineMember postOnlineIcon={props.postOnlineIcon} />
					<OnlineMember postOnlineIcon={props.postOnlineIcon} />
					<OnlineMember postOnlineIcon={props.postOnlineIcon} />
				</ul>
				<div className="see-more-btn">
					<a href="#">
						More
						<i className="fa fa-angle-right" aria-hidden="true"></i>
					</a>
				</div>
			</div>
		</div>
	);
}

export default OnlineMembers;
