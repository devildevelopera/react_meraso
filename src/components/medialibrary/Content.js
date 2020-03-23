import React from "react";

// Required Image Files

import ImgListImg from "./../../require/img/home/img_list.png";
import ImgListImg1 from "./../../require/img/home/img_list1.png";
import Img1 from "./../../require/img/home/img-1.png";

function Content() {
	return (
		<div id="content" className="mt-0">
			<section id="media_library">
				<div className="container">
					<div className="row mt-5">
						<div className="col-12">
							<div className="upload_file_btn">
								<div>
									<div className="media_title">
										<h2>Media Library</h2>
									</div>
									<div className="media_detail">
										<div className="box">
											<input
												type="file"
												name="file-1[]"
												id="file-1"
												className="inputfile inputfile-1"
												data-multiple-caption="{count} files selected"
												multiple=""
											/>
											<label for="file-1">
												<span>upload file</span>
											</label>
										</div>
									</div>
								</div>
								<div className="help_btn">
									<select
										className="form-control"
										id="exampleFormControlSelect1"
									>
										<option>Help</option>
										<option>Posts</option>
										<option>3</option>
										<option>4</option>
										<option>5</option>
									</select>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<div className="img_upload_detail">
								<a href="#" className="img_list">
									<img src={ImgListImg} alt="" />
								</a>
								<a href="#" className="img_list">
									<img src={ImgListImg1} alt="" />
								</a>
								<div className="form-group">
									<select
										className="form-control"
										id="exampleFormControlSelect1"
									>
										<option>Feed</option>
										<option>Posts</option>
										<option>3</option>
										<option>4</option>
										<option>5</option>
									</select>
									<select
										className="form-control"
										id="exampleFormControlSelect1"
									>
										<option>All dates</option>
										<option>2</option>
										<option>3</option>
										<option>4</option>
										<option>5</option>
									</select>
								</div>
								<a href="#" className="bluk-select">
									Bulk Select
								</a>
								<a href="#" className="bluk-select delete-btn">
									Delete
								</a>
								<div className="search_result">
									<form className="form-inline">
										<div className="input-group">
											<div className="input-group-prepend">
												<span
													className="input-group-text"
													id="basic-addon1"
												>
													search
												</span>
											</div>
											<input
												type="text"
												className="form-control"
												aria-label="Username"
												aria-describedby="basic-addon1"
											/>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="bulk_images">
							<ul>
								<li>
									<a href="#">
										<img src={Img1} alt="demo " />
									</a>
								</li>
								<li>
									<a href="#">
										<img src={Img1} alt="demo " />
									</a>
								</li>
								<li>
									<a href="#">
										<img src={Img1} alt="demo " />
									</a>
								</li>
								<li>
									<a href="#">
										<img src={Img1} alt="demo " />
									</a>
								</li>
								<li>
									<a href="#">
										<img src={Img1} alt="demo " />
									</a>
								</li>
								<li>
									<a href="#">
										<img src={Img1} alt="demo " />
									</a>
								</li>
								<li>
									<a href="#">
										<img src={Img1} alt="demo " />
									</a>
								</li>
								<li>
									<a href="#">
										<img src={Img1} alt="demo " />
									</a>
								</li>
								<li>
									<a href="#">
										<img src={Img1} alt="demo " />
									</a>
								</li>
								<li>
									<a href="#">
										<img src={Img1} alt="demo " />
									</a>
								</li>
								<li>
									<a href="#">
										<img src={Img1} alt="demo " />
									</a>
								</li>
								<li>
									<a href="#">
										<img src={Img1} alt="demo " />
									</a>
								</li>
								<li>
									<a href="#">
										<img src={Img1} alt="demo " />
									</a>
								</li>
								<li>
									<a href="#">
										<img src={Img1} alt="demo " />
									</a>
								</li>
								<li>
									<a href="#">
										<img src={Img1} alt="demo " />
									</a>
								</li>
								<li>
									<a href="#">
										<img src={Img1} alt="demo " />
									</a>
								</li>
								<li>
									<a href="#">
										<img src={Img1} alt="demo " />
									</a>
								</li>
								<li>
									<a href="#">
										<img src={Img1} alt="demo " />
									</a>
								</li>
								<li>
									<a href="#">
										<img src={Img1} alt="demo " />
									</a>
								</li>
								<li>
									<a href="#">
										<img src={Img1} alt="demo " />
									</a>
								</li>
								<li>
									<a href="#">
										<img src={Img1} alt="demo " />
									</a>
								</li>
								<li>
									<a href="#">
										<img src={Img1} alt="demo " />
									</a>
								</li>
								<li>
									<a href="#">
										<img src={Img1} alt="demo " />
									</a>
								</li>
								<li>
									<a href="#">
										<img src={Img1} alt="demo " />
									</a>
								</li>
								<li>
									<a href="#">
										<img src={Img1} alt="demo " />
									</a>
								</li>
								<li>
									<a href="#">
										<img src={Img1} alt="demo " />
									</a>
								</li>
								<li>
									<a href="#">
										<img src={Img1} alt="demo " />
									</a>
								</li>
								<li>
									<a href="#">
										<img src={Img1} alt="demo " />
									</a>
								</li>
								<li>
									<a href="#">
										<img src={Img1} alt="demo " />
									</a>
								</li>
								<li>
									<a href="#">
										<img src={Img1} alt="demo " />
									</a>
								</li>
								<li>
									<a href="#">
										<img src={Img1} alt="demo " />
									</a>
								</li>
								<li>
									<a href="#">
										<img src={Img1} alt="demo " />
									</a>
								</li>
								<li>
									<a href="#">
										<img src={Img1} alt="demo " />
									</a>
								</li>
								<li>
									<a href="#">
										<img src={Img1} alt="demo " />
									</a>
								</li>
								<li>
									<a href="#">
										<img src={Img1} alt="demo " />
									</a>
								</li>
								<li>
									<a href="#">
										<img src={Img1} alt="demo " />
									</a>
								</li>
								<li>
									<a href="#">
										<img src={Img1} alt="demo " />
									</a>
								</li>
								<li>
									<a href="#">
										<img src={Img1} alt="demo " />
									</a>
								</li>
								<li>
									<a href="#">
										<img src={Img1} alt="demo " />
									</a>
								</li>
								<li>
									<a href="#">
										<img src={Img1} alt="demo " />
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Content;
