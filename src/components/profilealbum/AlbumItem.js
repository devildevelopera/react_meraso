import React from "react";

import AlbumsImg from "./../../require/img/home/albums-img.png";

function AlbumItem() {
	return (
		<li>
			<a href="#">
				<div className="albums-img">
					<img src={AlbumsImg} alt="album" />
					<div className="overlay-img">
						<h2>Explore</h2>
						<p>May 24, 2019 5 photos</p>
					</div>
				</div>
			</a>
		</li>
	);
}

export default AlbumItem;
