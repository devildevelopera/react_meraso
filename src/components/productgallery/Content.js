import React from "react";

// Required Image Files

import CoteImg from "./../../require/img/home/cote_image.png";
import R1 from "./../../require/img/home/r1.png";
import R2 from "./../../require/img/home/r2.png";
import R3 from "./../../require/img/home/r3.png";
import R4 from "./../../require/img/home/r4.png";
import LockIconImg from "./../../require/img/home/lock-icon.png";
import SearchImg from "./../../require/img/home/search-image.png";
import CoteMainImg from "./../../require/img/gallery/preview/cote_main.png";
import Car02Img from "./../../require/img/gallery/original/02_o_car.jpg";
import Car03Img from "./../../require/img/gallery/original/03_r_car.jpg";
import Car04Img from "./../../require/img/gallery/original/04_g_car.jpg";
import BtnImg1 from "./../../require/img/home/btn-1.png";
import BtnImg2 from "./../../require/img/home/btn-2.png";
import BtnImg3 from "./../../require/img/home/btn-3.png";

function Content() {
	return (
		<div id="content" className="mt-0">
			<div className="container">
				<div className="product-profile">
					<div className="profile_detail">
						<div className="profile_image">
							<img src={CoteImg} alt="" />
						</div>
						<div className="profile_social_links">
							<h2>Modern Gentleman</h2>
							<div className="profile_links">
								<a href="#">
									<img src={R1} alt="" />
								</a>
								<a href="#">
									<img src={R2} alt="" />
								</a>
								<a href="#">
									<img src={R3} alt="" />
								</a>
								<a href="#">
									<img src={R4} alt="" />
								</a>
							</div>
						</div>
					</div>
					<div className="profile_info">
						<h2>SEE MY OTHER PRODUCTS</h2>
						<div className="image_detail">
							<img src={CoteImg} alt="" />
							<img src={CoteImg} alt="" />
							<img src={CoteImg} alt="" />
							<div className="more_image">
								<p>
									14 <br />
									Items
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="product_slider">
					<div className="product_slides">
						<section id="lens">
							<div className="row">
								<div className="large-5">
									<div className="xzoom-container">
										<div className="lock_icon">
											<a href="#">
												<img src={LockIconImg} alt="" />
											</a>
											<a href="#">
												<img src={SearchImg} alt="" />
											</a>
										</div>
										<img
											className="xzoom3"
											src={CoteMainImg}
											xoriginal={CoteMainImg}
											width="400"
											height="400"
											alt="Cote"
										/>
										<div className="xzoom-thumbs">
											<a href={CoteMainImg}>
												<img
													className="xzoom-gallery3"
													width="80"
													src={CoteMainImg}
													xpreview={CoteMainImg}
													title="The description goes here"
													alt=""
												/>
											</a>
											<a href={Car02Img}>
												<img
													className="xzoom-gallery3"
													width="80"
													src={Car02Img}
													title="The description goes here"
													alt=""
												/>
											</a>
											<a href={Car03Img}>
												<img
													className="xzoom-gallery3"
													width="80"
													src={Car03Img}
													title="The description goes here"
													alt=""
												/>
											</a>
											<a href={Car04Img}>
												<img
													className="xzoom-gallery3"
													width="80"
													src={Car04Img}
													title="The description goes here"
													alt=""
												/>
											</a>
										</div>
									</div>
								</div>
								<div className="large-7 column"></div>
							</div>
						</section>
					</div>

					<div className="product_detail">
						<div className="product_search">
							<a href="#">
								<img src={BtnImg2} alt="" />
							</a>
							<a href="#">
								<img src={BtnImg3} alt="" />
							</a>
							<a href="#">
								<img src={BtnImg1} alt="" />
							</a>
						</div>
						<div className="price">
							<h3>$70</h3>
						</div>
						<div className="products-dic">
							<h2>Product Description</h2>
							<div className="selecitons">
								<div className="dropdown ">
									<a href="#">
										<button
											className="btn btn-secondary dropdown-toggle bg_image"
											type="button"
											id="dropdownMenuButton"
										>
											Color Selection
										</button>
									</a>
								</div>
								<div className="dropdown ">
									<a href="#">
										<button
											className="btn btn-secondary dropdown-toggle bg_image"
											type="button"
											id="dropdownMenuButton"
										>
											Color Selection
										</button>
									</a>
								</div>
							</div>
						</div>
						<div className="ships_from">
							<p>Ships From : United States (US)</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Content;
