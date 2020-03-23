import React from "react";

// Required Image Files
import UploadFileImg from "./../../require/img/home/upload-file.png";

function Content() {
	return (
		<div id="content" className="mt-0">
			<div className="container">
				<div className="feedback_info">
					<div className="feedback-detail">
						<div className="feedback-title">
							<h2>Send feedback</h2>
						</div>
						<div className="dic-detail">
							<textarea
								name=""
								id=""
								cols="30"
								rows="10"
								placeholder="Describe your issue or share your ideas"
							></textarea>
						</div>
						<div className="upload-file-icon">
							<label className="check_field">
								Include screenshot
								<input type="checkbox" checked="checked" />
								<span className="checkmark"></span>
							</label>
							<div className="box">
								<input
									type="file"
									name="file-5[]"
									id="file-5"
									className="inputfile inputfile-4"
									data-multiple-caption="{count} files selected"
									multiple=""
								/>
								<label htmlFor="file-5">
									<figure>
										<img src={UploadFileImg} alt="icon" />
									</figure>
								</label>
							</div>
						</div>
						<div className="sent_option">
							<a href="#">CANCEL</a>
							<a href="#">SEND</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Content;
