import React from "react";

// Required Image File
import UserInfo from "../profile/UserInfo";
import ExclusivePhotos from "./ExclusivePhotos";
import ExclusiveVideos from "./ExclusiveVideos";

function Content() {
	return (
		<div id="content" className="mt-0">
			<UserInfo></UserInfo>
			<div className="albums-tabs">
				<div className="albums_title">
					<h2>Exclusive Content Only For You</h2>
					{/* <!-- <a href="#" className="create-albums">+ Create Album</a> --> */}
				</div>
				<ul className="nav nav-tabs" id="myTab" role="tablist">
					<li className="nav-item">
						<a
							className="nav-link active"
							id="exphoto-tab"
							data-toggle="tab"
							href="#exphoto"
							role="tab"
							aria-controls="exphoto"
							aria-selected="true"
						>
							Photos
						</a>
					</li>
					<li className="nav-item">
						<a
							className="nav-link"
							id="exVideo-tab"
							data-toggle="tab"
							href="#exVideo"
							role="tab"
							aria-controls="exVideo"
							aria-selected="false"
						>
							Video
						</a>
					</li>
				</ul>
				<div className="tab-content" id="myTabContent">
					<ExclusivePhotos />
					<ExclusiveVideos />
				</div>
			</div>
		</div>
	);
}

export default Content;
