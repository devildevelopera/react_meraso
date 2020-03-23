import React from "react";

import FansImg2 from "./../../require/img/home/fans-img.png";

function Fans() {
	return (
		<div className="fans-detail">
			<h3>I am a Fan of 10</h3>
			<div className="fans-images">
				<img src={FansImg2} alt="fans" />
				<img src={FansImg2} alt="fans" />
				<img src={FansImg2} alt="fans" />
				<img src={FansImg2} alt="fans" />
				<img src={FansImg2} alt="fans" />
				<img src={FansImg2} alt="fans" />
				<img src={FansImg2} alt="fans" />
				<img src={FansImg2} alt="fans" />
				<img src={FansImg2} alt="fans" />
				<img src={FansImg2} alt="fans" />
				<img src={FansImg2} alt="fans" />
				<img src={FansImg2} alt="fans" />
				<div className="see-more-btn">
					<a href="#">
						More
						<i className="fa fa-angle-right" aria-hidden="true"></i>
					</a>
				</div>
			</div>
		</div>
	);
}

export default Fans;
