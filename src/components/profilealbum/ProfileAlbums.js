import React from "react";

import AlbumItem from "./AlbumItem";

function ProfileAlbums() {
	return (
		<div
			className="tab-pane fade show active"
			id="connections"
			role="tabpanel"
			aria-labelledby="connections-tab"
		>
			<div className="image-container">
				<ul>
					<AlbumItem />
					<AlbumItem />
					<AlbumItem />
					<AlbumItem />
					<AlbumItem />
					<AlbumItem />
					<AlbumItem />
				</ul>
			</div>
		</div>
	);
}

export default ProfileAlbums;
