import React from "react";
import Login from "../components/setting/Login";
import { Link } from "react-router-dom";

function AccountsettingPage() {
	return (
		<div id="content" className="mt-0">
			<section className="notification-area mt-80 mb-90">
				<div className="container">
					<div className="row mb-30 align-items-center">
						<div className="col-12 col-sm-6">
							<h2 className="mb-0 mb-sm-20">Account Settiongs</h2>
						</div>
						<div className="col-12 col-sm-6 ">
							<div className="section-title-right text-sm-right">
								<button
									type="submit"
									className="btn btn-primary title-btn"
								>
									View My Profile
								</button>
							</div>
						</div>
					</div>
					<div className="row no-gutters login-border">
						<div className="col-12 col-md-5 col-lg-3">
							<div className="info-menu-left mt-30">
								<ul className="nav flex-column">
									<li className="nav-item active">
										<Link className="nav-link" to="/login">
											<i className="fas fa-unlock-alt"></i>{" "}
											Login Information
										</Link>
									</li>
									<li className="nav-item">
										<Link className="nav-link" to="/email">
											<i className="fas fa-envelope"></i>{" "}
											Email Preferences
										</Link>
									</li>
									<li className="nav-item">
										<Link
											className="nav-link"
											to="/privacy"
										>
											<i className="fas fa-shield-alt"></i>
											Privacy
										</Link>
									</li>
									<li className="nav-item">
										<a className="nav-link" href="#">
											<i className="fas fa-users"></i>{" "}
											Group Invites
										</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" href="#">
											<i className="fas fa-share-square"></i>{" "}
											Export Data
										</a>
									</li>
								</ul>
							</div>
						</div>
						<Login></Login>
					</div>
				</div>
			</section>
		</div>
	);
}

export default AccountsettingPage;
