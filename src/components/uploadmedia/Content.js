import React from "react";

function Content() {
	return (
		<div id="content" className="mt-0">
			<div className="upload-media-detail">
				<div className="media-close">
					<a href="#">
						<i className="fa fa-times" aria-hidden="true"></i>
					</a>
				</div>
				<div className="media-fields">
					<form action="">
						<div className="upload_video label_style">
							<label htmlFor="">
								Upload Video or Photo in Ad Blocs
							</label>
							<div className="box">
								<input
									type="file"
									name="file-2[]"
									id="file-2"
									className="inputfile inputfile-2"
									data-multiple-caption="{count} files selected"
									multiple=""
								/>
								<label htmlFor="file-2">
									<i
										className="fa fa-camera"
										aria-hidden="true"
									></i>
									<span>Choose a file…</span>
								</label>
							</div>
						</div>
						<div className="title-field label_style">
							<label htmlFor="">Title</label>
							<div className="count-detail">
								<input
									type="text"
									placeholder="Add a title if any "
								/>
								<span>0 / 64</span>
							</div>
						</div>
						<div className="link-field label_style">
							<label htmlFor="">Link</label>
							<div className="video_upload">
								<input type="text" placeholder="" />
								<i
									className="fa fa-video-camera"
									aria-hidden="true"
								></i>
							</div>
						</div>
						<div className="ads-image label_style">
							<label htmlFor="">Ads Image</label>
							<div className="box">
								<input
									type="file"
									name="file-2[]"
									id="file-2"
									className="inputfile inputfile-2"
									data-multiple-caption="files selected"
									multiple=""
								/>
								<label htmlFor="file-2">
									<i
										className="fa fa-camera"
										aria-hidden="true"
									></i>
									<span>Upload Photo</span>
								</label>
							</div>
						</div>
						<div className="submit-form">
							<button type="submit">Submit</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Content;
