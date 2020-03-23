import React from "react";
import ExclusiveVideoItem from "./ExclusiveVideoItem";

function ExclusiveVideos() {
	return (
		<div
			className="tab-pane fade"
			id="exVideo"
			role="tabpanel"
			aria-labelledby="exVideo-tab"
		>
			<div className="exclusive-content">
				<ul>
					<ExclusiveVideoItem />
					<ExclusiveVideoItem />
					<ExclusiveVideoItem />
				</ul>
			</div>
		</div>
	);
}

export default ExclusiveVideos;
