import React from "react";

import PaymentImg1 from "./../../require/img/home/payment1.png";
import PaymentImg2 from "./../../require/img/home/payment2.png";
import PaymentImg3 from "./../../require/img/home/payment3.png";

function Reload() {
	return (
		<div
			className="tab-pane fade "
			id="profile"
			role="tabpanel"
			aria-labelledby="profile-tab"
		>
			<div className="reload_balance">
				<h2>Reload Your Balance</h2>
				<div className="enter_ammount">
					<h3>Amount</h3>
					<div className="demo_ammount">
						<a href="#">$50.00</a>
						<a href="#">$100.00</a>
						<a href="#">$200.00</a>
						<a href="#">$500.00</a>
						<div className="enter_current_ammount">
							<input
								type="text"
								placeholder="$Enter an amount..."
							/>
						</div>
					</div>
				</div>
				<div className="payment-method">
					<h2>Payment Method</h2>
					<p>Choose a Payment Options</p>
					<ul>
						<li>
							<a href="#">
								<img src={PaymentImg1} alt=" Payment" />
								Add Your Card
							</a>
						</li>
						<li>
							<a href="#">
								<img src={PaymentImg2} alt=" Payment" />
								Online Banking
							</a>
						</li>
						<li>
							<a href="#">
								<img src={PaymentImg3} alt=" Payment" />
								Paypal
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Reload;
