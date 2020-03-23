import React from "react";

import ProductImg1 from "./../../require/img/home/product-image1.png";

function ProductItem() {
	return (
		<li>
			<div className="card">
				<div className="card_image">
					<div className="hovereffect">
						<img
							className="card-img-top"
							src={ProductImg1}
							alt="Card"
						/>
						<div className="overlay">
							<div className="heart_icon">
								<a className="info" href="#">
									<i
										className="fa fa-heart-o"
										aria-hidden="true"
									></i>
								</a>
								<a className="info" href="#">
									<i
										className="fa fa-shopping-cart"
										aria-hidden="true"
									></i>
								</a>
							</div>
						</div>
					</div>
					<div className="card_sale">
						<h2>SALE</h2>
					</div>
				</div>
				<div className="card-body">
					<h5 className="card-title">
						Lorem ipsum dolor sit amet (4)
					</h5>
					<h3 className="price">$120</h3>
				</div>
			</div>
		</li>
	);
}

export default ProductItem;
