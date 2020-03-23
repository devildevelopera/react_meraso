import React from "react";

import { Link } from "react-router-dom";

// Required Image Files
import AmountImg from "./../../require/img/home/ammount.png";

import Transactions from "./Transactions";
import Reloads from "./Reloads";

function Content() {
	return (
		<div id="content" className="mt-0">
			<div className="container">
				<div className="account-information">
					<div className="account-detail">
						<div className="account-profile">
							<div className="account-img">
								<img src="img/home/offline.png" alt="" />
							</div>
							<div className="account-name">
								<h2>danza2020202</h2>
								<p>My Coin Details</p>
							</div>
						</div>
						<div className="account-link">
							<ul>
								<li>
									<Link to="/library">History</Link>
								</li>
								<li>
									<Link to="notification">Notification</Link>
								</li>
								<li>
									<a href="#">Request</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="current_value">
						<div className="ammount_detail">
							<div className="total_ammount">
								<img src={AmountImg} alt="ammount" />
								<h2>
									Current Value : <br />
									$123
								</h2>
							</div>
							<div className="ammount_page">
								<a href="#">Earn more coins ></a>
							</div>
						</div>
						<div className="account_tabs">
							<ul
								className="nav nav-tabs"
								id="myTab"
								role="tablist"
							>
								<li className="nav-item">
									<a
										className="nav-link active"
										id="home-tab"
										data-toggle="tab"
										href="#home"
										role="tab"
										aria-controls="home"
										aria-selected="true"
									>
										All Transaction
									</a>
								</li>
								<li className="nav-item">
									<a
										className="nav-link "
										id="profile-tab"
										data-toggle="tab"
										href="#profile"
										role="tab"
										aria-controls="profile"
										aria-selected="false"
									>
										Reloads
									</a>
								</li>
								<li className="nav-item">
									<a
										className="nav-link"
										id="contact-tab"
										data-toggle="tab"
										href="#contact"
										role="tab"
										aria-controls="contact"
										aria-selected="false"
									>
										Transactions
									</a>
								</li>
								<li className="nav-item">
									<a
										className="nav-link"
										id="Refunds-tab"
										data-toggle="tab"
										href="#Refunds"
										role="tab"
										aria-controls="Refunds"
										aria-selected="false"
									>
										Refunds
									</a>
								</li>
								<li className="nav-item">
									<a
										className="nav-link"
										id="Donations-tab"
										data-toggle="tab"
										href="#Donations"
										role="tab"
										aria-controls="Donations"
										aria-selected="false"
									>
										Donations
									</a>
								</li>
								<li className="nav-item">
									<a
										className="nav-link"
										id="Withdrawals-tab"
										data-toggle="tab"
										href="#Withdrawals"
										role="tab"
										aria-controls="Withdrawals"
										aria-selected="false"
									>
										Withdrawals
									</a>
								</li>
								<li className="nav-item">
									<a
										className="nav-link"
										id="Revenues-tab"
										data-toggle="tab"
										href="#Revenues"
										role="tab"
										aria-controls="Revenues"
										aria-selected="false"
									>
										Revenues
									</a>
								</li>
							</ul>
							<div className="tab-content" id="myTabContent">
								<Transactions />
								<Reloads></Reloads>
								<div
									className="tab-pane fade"
									id="contact"
									role="tabpanel"
									aria-labelledby="contact-tab"
								>
									Transactions
								</div>
								<div
									className="tab-pane fade"
									id="Refunds"
									role="tabpanel"
									aria-labelledby="Refunds-tab"
								>
									Refunds
								</div>
								<div
									className="tab-pane fade"
									id="Donations"
									role="tabpanel"
									aria-labelledby="Donations-tab"
								>
									Donations
								</div>
								<div
									className="tab-pane fade"
									id="Withdrawals"
									role="tabpanel"
									aria-labelledby="Withdrawals-tab"
								>
									Withdrawals
								</div>
								<div
									className="tab-pane fade"
									id="Revenues"
									role="tabpanel"
									aria-labelledby="Revenues-tab"
								>
									Revenues
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
