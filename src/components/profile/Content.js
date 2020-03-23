import React from "react";

// Required Image Files
import ProfileImg from "./../../require/img/home/profile-0mg.png";
import IconImg1 from "./../../require/img/home/icon-1.png";
import IconImg2 from "./../../require/img/home/icon-2.png";
import CardIconImg1 from "./../../require/img/home/card-icon-1.png";
import CardIconImg2 from "./../../require/img/home/card-icon-2.png";

import Friends from "./Friends";
import Request from "./Request";
import UserInfo from "./UserInfo";

function ProfileContent() {
	return (
		<div id="content" className="mt-0">
			<UserInfo />

			<div className="albums-tabs">
				<ul className="nav nav-tabs" id="myTab" role="tablist">
					<li className="nav-item">
						<a
							className="nav-link active"
							id="my-connection-tab"
							data-toggle="tab"
							href="#my-connection"
							role="tab"
							aria-controls="my-connection"
							aria-selected="true"
						>
							My Connections
						</a>
					</li>
					<li className="nav-item">
						<a
							className="nav-link"
							id="Albums-tab"
							data-toggle="tab"
							href="#Albums"
							role="tab"
							aria-controls="Albums"
							aria-selected="false"
						>
							Requests
						</a>
					</li>
				</ul>
				<div className="tab-content" id="myTabContent">
					<Friends
						profileImg={ProfileImg}
						cardIconImg1={CardIconImg1}
						cardIconImg2={CardIconImg2}
						iconImg1={IconImg1}
						iconImg2={IconImg2}
					/>
					<Request />
				</div>
			</div>
		</div>
	);
}

export default ProfileContent;
