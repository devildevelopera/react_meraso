import React from "react";

function SearchModal() {
	return (
		<div
			className="modal fade"
			id="exampleModalCenter1"
			tabindex="-1"
			role="dialog"
			aria-labelledby="exampleModalCenter1Title"
			aria-hidden="true"
		>
			<div className="modal-dialog modal-dialog-centered" role="document">
				<div className="modal-content">
					<div className="modal-body">
						<div className="search_field">
							<input type="text" placeholder="Search" />
						</div>
						<div className="close_btn">
							<button
								type="button"
								className="close"
								data-dismiss="modal"
								aria-label="Close"
							>
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SearchModal;
