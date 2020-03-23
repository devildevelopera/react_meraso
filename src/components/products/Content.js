import React from "react";

// Required Image Files

import ShopOwnerImg from "./../../require/img/home/shop-owner.png";
// import ProductImg1 from "./../../require/img/home/product-image1.png";
import ProductProfile from "./ProductProfile";
import ProductItem from "./ProductItem";

function Content() {
	return (
		<div id="content" className="mt-0">
			<div className="container">
				<ProductProfile />
				<div className="shop_detail">
					<div className="shop_left_bar">
						<div className="shope-owner">
							<div className="owner-profile">
								<img src={ShopOwnerImg} alt="" />
							</div>
							<div className="owner-detail">
								<h2>Walter Lewis</h2>
								<div className="rating">
									<a href="#">
										<i
											className="fa fa-star"
											aria-hidden="true"
										></i>
										<i
											className="fa fa-star"
											aria-hidden="true"
										></i>
										<i
											className="fa fa-star"
											aria-hidden="true"
										></i>
										<i
											className="fa fa-star"
											aria-hidden="true"
										></i>
										<i
											className="fa fa-star"
											aria-hidden="true"
										></i>
										<span>( 6 ratings)</span>
									</a>
								</div>
							</div>
							<div className="ask-question">
								<a href="#">
									<i
										className="fa fa-question-circle-o"
										aria-hidden="true"
									></i>
									ASK A QUESTION
								</a>
							</div>
						</div>
						<div className="shop-section">
							<div className="shop-title">
								<h2>SHOP SECTIONS</h2>
							</div>
							<div className="shop-table">
								<table>
									<tbody>
										<tr>
											<td>Clothing & accessories</td>
											<td>14</td>
										</tr>
										<tr>
											<td>Belts</td>
											<td>5</td>
										</tr>
										<tr>
											<td>Shoes</td>
											<td>5</td>
										</tr>
										<tr>
											<td>Neckties</td>
											<td>2</td>
										</tr>
										<tr>
											<td>Watches</td>
											<td>1</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
					<div className="shop_information">
						<div className="product_search">
							<div className="input-group">
								<input
									type="text"
									className="form-control"
									placeholder="Search in this shop"
									aria-label="Username"
									aria-describedby="basic-addon1"
								/>
								<div className="input-group-prepend">
									<span
										className="input-group-text"
										id="basic-addon1"
									>
										Search
									</span>
								</div>
							</div>
							<div className="dropdown">
								<button
									className="btn btn-secondary dropdown-toggle"
									type="button"
									id="dropdownMenuButton"
									data-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded="false"
								>
									Dropdown button
								</button>
								<div
									className="dropdown-menu"
									aria-labelledby="dropdownMenuButton"
								>
									<a className="dropdown-item" href="#">
										Action
									</a>
									<a className="dropdown-item" href="#">
										Another action
									</a>
									<a className="dropdown-item" href="#">
										Something else here
									</a>
								</div>
							</div>
						</div>
						<div className="search-products">
							<div className="produst-title">
								<h2>SHOWING ALL 14 RESULTS</h2>
							</div>
							<div className="products_detail">
								<div className="product_cards">
									<ul>
										<ProductItem />
										<ProductItem />
										<ProductItem />
										<ProductItem />
										<ProductItem />
										<ProductItem />
										<ProductItem />
										<ProductItem />
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Content;
