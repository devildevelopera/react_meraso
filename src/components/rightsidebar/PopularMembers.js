import React from "react";
import OfflineMember from "./OfflineMember";

function PopularMembers(props) {
	return (
		<div
			className="tab-pane fade"
			id="contact"
			role="tabpanel"
			aria-labelledby="contact-tab"
		>
			<div className="online-members">
				<OfflineMember postOfflineIcon={props.postOfflineIcon} />
				<OfflineMember postOfflineIcon={props.postOfflineIcon} />
				<OfflineMember postOfflineIcon={props.postOfflineIcon} />

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

export default PopularMembers;
