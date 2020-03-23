import React from "react";
import Chat1Icon from "./../../require/assets/img/chat/1.png";

function Message() {
	return (
		<li className="d-flex justify-content-between align-items-center">
			<div className="d-flex">
				<div className="form-group">
					<input type="checkbox" id="javascript" />
					<label className="mt-m2" htmlFor="javascript"></label>
				</div>
				<div className="media ml-20">
					<img src={Chat1Icon} className="mr-3" alt="thumbnails" />
					<div className="media-body align-self-center">
						<h5 className="mt-0 mb-0">Charles mentioned you</h5>
						<p className="secondary-color">8 months, 1 week ago</p>
					</div>
				</div>
			</div>
			<div className="notific-icon">
				<i className="far fa-eye-slash mr-20"></i>
				<i className="far fa-trash-alt"></i>
			</div>
		</li>
	);
}

export default Message;
