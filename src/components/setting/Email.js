import React from "react";

class Email extends React.Component {
	componentDidMount() {
		require("./Email.css");
	}
	render() {
		return (
			<div className="col-12 col-md-7 col-lg-9">
				<form action="#">
					<div className="privacy-right email">
						<div className="email-title">
							<h3 className="mb-25">Email Preferences</h3>
							<p className="mb-25 pb-2">
								Choose your email notification preferences.
							</p>
						</div>
						<div className="row">
							<div className="col-12 col-md-10">
								<div className="email-checkbox grid-email-table">
									<div className="table-responsive">
										<table className="table table-sm">
											<thead>
												<tr>
													<th scope="col">
														<h6 className="text-uppercase">
															Messages
														</h6>
													</th>
													<td></td>
													<th
														className="text-right grid-left-full"
														scope="col"
													>
														<div className="w-80 table-secon">
															<span className="text-uppercase pr-30">
																Yes
															</span>
															<span className="email-no text-uppercase">
																No
															</span>
														</div>
													</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>
														<div>
															<h6>
																A member sends
																you a new
																mesaage
															</h6>
														</div>
													</td>
													<td></td>
													<td className="text-right">
														<div className="w-80 table-secon">
															<div className="custom-control custom-radio custom-control-inline pr-4">
																<input
																	type="radio"
																	id="one-third"
																	name="one-third"
																	className="custom-control-input"
																/>
																<label
																	className="custom-control-label"
																	htmlFor="one-third"
																></label>
															</div>
															<div className="custom-control custom-radio custom-control-inline">
																<input
																	type="radio"
																	id="three"
																	name="one-third"
																	className="custom-control-input"
																/>
																<label
																	className="custom-control-label"
																	htmlFor="three"
																></label>
															</div>
														</div>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
									<hr />
									<div className="table-responsive">
										<table className="table table-sm">
											<thead>
												<tr>
													<th scope="col">
														<h6 className="text-uppercase">
															Messages
														</h6>
													</th>
													<td></td>
													<th
														className="text-right grid-left-full"
														scope="col"
													>
														<div className="w-80 table-secon">
															<span className="text-uppercase pr-30">
																Yes
															</span>
															<span className="email-no text-uppercase">
																No
															</span>
														</div>
													</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>
														<div>
															<h6>
																A member sends
																you a new
																mesaage
															</h6>
														</div>
													</td>
													<td></td>
													<td className="text-right">
														<div className="w-80 table-secon">
															<div className="custom-control custom-radio custom-control-inline pr-4">
																<input
																	type="radio"
																	id="one-thirds"
																	name="one-thirds"
																	className="custom-control-input"
																/>
																<label
																	className="custom-control-label"
																	htmlFor="one-thirds"
																></label>
															</div>
															<div className="custom-control custom-radio custom-control-inline">
																<input
																	type="radio"
																	id="thre"
																	name="one-third"
																	className="custom-control-input"
																/>
																<label
																	className="custom-control-label"
																	htmlFor="thre"
																></label>
															</div>
														</div>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
									{/* <!-- Singel table  --> */}
									<hr />
									<div className="table-responsive">
										<table className="table table-sm">
											<thead>
												<tr>
													<th scope="col">
														<h6 className="text-uppercase">
															Social Groups
														</h6>
													</th>
													<td></td>
													<th
														className="text-right grid-left-full"
														scope="col"
													>
														<div className="w-80 table-secon">
															<span className="text-uppercase pr-30">
																Yes
															</span>
															<span className="email-no text-uppercase">
																No
															</span>
														</div>
													</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>
														<div>
															<h6>
																A member invites
																you to join a
																group
															</h6>
														</div>
													</td>
													<td></td>
													<td className="text-right">
														<div className="w-80 table-secon">
															<div className="custom-control custom-radio custom-control-inline pr-4">
																<input
																	type="radio"
																	id="socialOne"
																	name="socialOne"
																	className="custom-control-input"
																/>
																<label
																	className="custom-control-label"
																	htmlFor="socialOne"
																></label>
															</div>
															<div className="custom-control custom-radio custom-control-inline">
																<input
																	type="radio"
																	id="socia"
																	name="socialOne"
																	className="custom-control-input"
																/>
																<label
																	className="custom-control-label"
																	htmlFor="socia"
																></label>
															</div>
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<div>
															<h6>
																Group
																information is
																updated
															</h6>
														</div>
													</td>
													<td></td>
													<td className="text-right">
														<div className="w-80 table-secon">
															<div className="custom-control custom-radio custom-control-inline pr-4">
																<input
																	type="radio"
																	id="socialTwo"
																	name="socialTwo"
																	className="custom-control-input"
																/>
																<label
																	className="custom-control-label"
																	htmlFor="socialTwo"
																></label>
															</div>
															<div className="custom-control custom-radio custom-control-inline">
																<input
																	type="radio"
																	id="socia-One"
																	name="socialTwo"
																	className="custom-control-input"
																/>
																<label
																	className="custom-control-label"
																	htmlFor="socia-One"
																></label>
															</div>
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<div>
															<h6>
																You are promoted
																to a group
															</h6>
														</div>
													</td>
													<td></td>
													<td className="text-right">
														<div className="w-80 table-secon">
															<div className="custom-control custom-radio custom-control-inline pr-4">
																<input
																	type="radio"
																	id="social-Seve"
																	name="social-Seve"
																	className="custom-control-input"
																/>
																<label
																	className="custom-control-label"
																	htmlFor="social-Seve"
																></label>
															</div>
															<div className="custom-control custom-radio custom-control-inline">
																<input
																	type="radio"
																	id="socia-seven"
																	name="social-Seve"
																	className="custom-control-input"
																/>
																<label
																	className="custom-control-label"
																	htmlFor="socia-seven"
																></label>
															</div>
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<div>
															<h6>
																A member
																requests to join
																a private gr
															</h6>
														</div>
													</td>
													<td></td>
													<td className="text-right">
														<div className="w-80 table-secon">
															<div className="custom-control custom-radio custom-control-inline pr-4">
																<input
																	type="radio"
																	id="sociaSix"
																	name="sociaSix"
																	className="custom-control-input"
																/>
																<label
																	className="custom-control-label"
																	htmlFor="sociaSix"
																></label>
															</div>
															<div className="custom-control custom-radio custom-control-inline">
																<input
																	type="radio"
																	id="soci-Six"
																	name="sociaSix"
																	className="custom-control-input"
																/>
																<label
																	className="custom-control-label"
																	htmlFor="soci-Six"
																></label>
															</div>
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<div>
															<h6>
																Your request to
																join a group has
																been
															</h6>
														</div>
													</td>
													<td></td>
													<td className="text-right">
														<div className="w-80 table-secon">
															<div className="custom-control custom-radio custom-control-inline pr-4">
																<input
																	type="radio"
																	id="socialFour"
																	name="socialFour"
																	className="custom-control-input"
																/>
																<label
																	className="custom-control-label"
																	htmlFor="socialFour"
																></label>
															</div>
															<div className="custom-control custom-radio custom-control-inline">
																<input
																	type="radio"
																	id="socia-Five"
																	name="socialFour"
																	className="custom-control-input"
																/>
																<label
																	className="custom-control-label"
																	htmlFor="socia-Five"
																></label>
															</div>
														</div>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
									{/* <!-- Singel table  -->
                                            <!-- Social Group Stat --> */}
									<hr />
									<div className="table-responsive">
										<table className="table table-sm ">
											<thead>
												<tr>
													<th scope="col">
														<h6 className="text-uppercase">
															Connection
														</h6>
													</th>

													<th
														className="text-right grid-left-full"
														scope="col"
													>
														<div className="w-80 table-secon">
															<span className="text-uppercase pr-30">
																Yes
															</span>
															<span className="email-no text-uppercase">
																No
															</span>
														</div>
													</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<th scope="row">
														<h6>
															A member invites you
															to connect
														</h6>
													</th>
													<td className="text-right">
														<div className="w-80 table-secon">
															<div className="custom-control custom-radio custom-control-inline pr-4">
																<input
																	type="radio"
																	id="conn-third"
																	name="conn-third"
																	className="custom-control-input"
																/>
																<label
																	className="custom-control-label"
																	htmlFor="conn-third"
																></label>
															</div>
															<div className="custom-control custom-radio custom-control-inline">
																<input
																	type="radio"
																	id="conn-3"
																	name="conn-third"
																	className="custom-control-input"
																/>
																<label
																	className="custom-control-label"
																	htmlFor="conn-3"
																></label>
															</div>
														</div>
													</td>
												</tr>
												<tr>
													<th scope="row">
														<h6>
															A member accepts
															your connection
															reque
														</h6>
													</th>
													<td className="text-right">
														<div className="w-80 table-secon">
															<div className="custom-control custom-radio custom-control-inline pr-4">
																<input
																	type="radio"
																	id="connOne"
																	name="connOne"
																	className="custom-control-input"
																/>
																<label
																	className="custom-control-label"
																	htmlFor="connOne"
																></label>
															</div>
															<div className="custom-control custom-radio custom-control-inline">
																<input
																	type="radio"
																	id="connTwo"
																	name="connOne"
																	className="custom-control-input"
																/>
																<label
																	className="custom-control-label"
																	htmlFor="connTwo"
																></label>
															</div>
														</div>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
									{/* <!-- Singel table  --> */}
									<div className="submite-btn">
										<button
											type="submit"
											className="btn btn-primary mt-20"
										>
											Save Changes
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

export default Email;
