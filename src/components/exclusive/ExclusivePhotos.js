import React from "react";
import ExclusivePhotoItem from "./ExclusivePhotoItem";

function ExclusivePhotos() {
	return (
		<div
			className="tab-pane fade show active"
			id="exphoto"
			role="tabpanel"
			aria-labelledby="exphoto-tab"
		>
			<div className="exclusive-content">
				<ul>
					<ExclusivePhotoItem />
					<ExclusivePhotoItem />
					<ExclusivePhotoItem />
				</ul>
			</div>
		</div>
	);
}

export default ExclusivePhotos;
