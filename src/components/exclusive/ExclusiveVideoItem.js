import React from "react";

import ExclusiveContentVideoRecoveredImg from "./../../require/img/home/Exclusive-content-video-Recovered.png";

function ExclusiveVideoItem() {
	return (
		<li>
			<a href="#">
				<div className="exclusive-photo">
					<img src={ExclusiveContentVideoRecoveredImg} alt="Video" />
					<div className="content-detail">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing
							elit. Consequuntur neque culpa ea optio suscipit
							modi, nihil, ipsam natus ut voluptatem illum
							possimus, nulla quisquam, impedit dolorum at debitis
							cumque a.
						</p>
					</div>
					<div className="publish-date">
						<p>8:42 pm, $3.00 not paid yet</p>
					</div>
				</div>
			</a>
		</li>
	);
}

export default ExclusiveVideoItem;
