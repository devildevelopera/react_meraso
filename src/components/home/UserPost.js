import React from "react";

function UserPost(props) {
	return (
		<div className="fans-connnections">
			<div className="post_img_video">
				<div className="post_image">
					<img src={props.img} alt="post" />
				</div>
				<div className="post_video">
					<iframe
						src="https://www.youtube.com/embed/-8HmuLb5vho"
						frameBorder="0"
						allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
						title="video"
					></iframe>
				</div>
			</div>
		</div>
	);
}

export default UserPost;
