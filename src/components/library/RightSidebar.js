import React from "react";

// Required Image Files
import LibraryImg from "./../../require/img/home/library-images.png";

function RightSidebar() {
	return (
		<div className="right_bar mt-5">
			<div className="library-profile">
				<img src={LibraryImg} alt="profile" />
				<h2>Stylekid Boy</h2>
				<p>Since 2015</p>
				<ul>
					<li>
						<div className="library-profile-detail">
							<p>Subscriptions</p>
							<p>76</p>
						</div>
					</li>
					<li>
						<div className="library-profile-detail">
							<p>Uploads</p>
							<p>0</p>
						</div>
					</li>
					<li>
						<div className="library-profile-detail">
							<p>Posts</p>
							<p>73</p>
						</div>
					</li>
				</ul>
			</div>
			<div className="history-type">
				<div className="input-group ml-3">
					<div className="input-group-prepend">
						<span className="input-group-text" id="basic-addon1">
							<i className="fa fa-search" aria-hidden="true"></i>
						</span>
					</div>
					<input
						type="text"
						className="form-control"
						placeholder="Search history"
						aria-label="Username"
						aria-describedby="basic-addon1"
					/>
				</div>
				<div className="history-type1 mt-5">
					<h3>History type</h3>
					<ul>
						<li>
							<div className="library-radio">
								<p>Comments</p>
								<label className="radio_btn">
									<input
										type="radio"
										checked="checked"
										name="radio"
									/>
									<span className="checkmark"></span>
								</label>
							</div>
						</li>
						<li>
							<div className="library-radio">
								<p>Activity</p>
								<label className="radio_btn">
									<input type="radio" name="radio" />
									<span className="checkmark"></span>
								</label>
							</div>
						</li>
						<li>
							<div className="library-radio">
								<p>Communication</p>
								<label className="radio_btn">
									<input type="radio" name="radio" />
									<span className="checkmark"></span>
								</label>
							</div>
						</li>
						<li>
							<div className="library-radio">
								<p>Posts</p>
								<label className="radio_btn">
									<input type="radio" name="radio" />
									<span className="checkmark"></span>
								</label>
							</div>
						</li>
						<li>
							<div className="library-radio">
								<p>Subscriptions</p>
								<label className="radio_btn">
									<input type="radio" name="radio" />
									<span className="checkmark"></span>
								</label>
							</div>
						</li>
						<li>
							<div className="library-radio">
								<p>Clear All Watch History</p>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default RightSidebar;
