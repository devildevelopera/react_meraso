import React from "react";

function Login() {
	return (
		<div className="col-12 col-md-7 col-lg-9">
			<div className="login-info-right">
				<h1 className="mb-30">Login Information</h1>
				<div className="row">
					<div className=" offset-1 col-10">
						<form>
							<div className="form-group">
								<label htmlFor="exampleInputEmail1">
									Account Email
								</label>
								<input
									type="email"
									className="form-control"
									id="exampleInputEmail1"
								/>
							</div>
							<div className="input-group mb-3">
								<div className="input-group-prepend">
									<div className="input-group-text">
										<i className="fas fa-exclamation-circle"></i>
									</div>
								</div>
								<input
									type="text"
									className="form-control border-left-0"
									id="inlineFormInputGroup"
									placeholder="Leave password fields blank for no change"
								/>
							</div>
							<div className="form-group">
								<label htmlFor="exampleInputPassword1">
									Add Your New Password
								</label>
								<input
									type="password"
									className="form-control"
									id="exampleInputPassword1"
								/>
							</div>
							<div className="form-group">
								<label htmlFor="exampleInputPassword2">
									Repeat Your New Paawoord
								</label>
								<input
									type="password"
									className="form-control"
									id="exampleInputPassword2"
								/>
							</div>
							<button type="submit" className="btn btn-primary">
								Save Changes
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;
