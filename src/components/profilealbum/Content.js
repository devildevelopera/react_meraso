import React from "react";

// Required Image Files

import UserInfo from "../profile/UserInfo";
import ProfileAlbums from "./ProfileAlbums";

function Content() {
	return (
		<div id="content" className="mt-0">
			<UserInfo />
			<div className="albums-tabs">
				<div className="albums_title">
					<h2>albums</h2>
					{/* <!-- <a href="#" className="create-albums">+ Create Album</a> --> */}
				</div>
				<ul className="nav nav-tabs" id="myTab" role="tablist">
					<li className="nav-item">
						<a
							className="nav-link active"
							id="connections-tab"
							data-toggle="tab"
							href="#connections"
							role="tab"
							aria-controls="connections"
							aria-selected="true"
						>
							Photos Collections
						</a>
					</li>
				</ul>
				<div className="tab-content" id="myTabContent">
					<ProfileAlbums></ProfileAlbums>
				</div>
			</div>
		</div>
	);
}

export default Content;
