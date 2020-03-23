import React from "react";

import ProfileImage from "./../../require/img/home/profile_image.png";

function ProductProfile() {
	return (
		<div className="product-profile p-3">
			<div className="profile_detail">
				<div className="profile_image">
					<img src={ProfileImage} alt="" />
				</div>
				<div className="profile_social_links">
					<h2>Modern Gentleman</h2>
					<div className="profile_links">
						<a href="#">
							<i
								className="fab fa-facebook-square"
								aria-hidden="true"
							></i>
							Facebook
						</a>
						<a href="#">
							<i className="fab fa-twitter-square"></i>
							Twitter
						</a>
						<a href="#">
							<i className="fab fa-youtube"></i>
							Youtube
						</a>
						<a href="#">
							<i className="fab fa-linkedin"></i>
							Linkedin
						</a>
					</div>
				</div>
			</div>
			<div className="profile_info">
				<p>
					Modern Gentleman is a shop with the latest men’s fashion,
					including suits, ties, cufflinks, shoes and other must have
					accessories.
				</p>
			</div>
		</div>
	);
}

export default ProductProfile;
