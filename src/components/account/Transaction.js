import React from "react";

function Transaction() {
	return (
		<div className="all_transaction">
			<table>
				<tbody>
					<tr>
						<th>DEC 18, 2019</th>
						<th>AMOUNTs</th>
					</tr>
					<tr>
						<td>4:28 pm</td>
						<td>
							$6.99
							<i
								className="fa fa-credit-card-alt ml-2"
								aria-hidden="true"
							></i>
						</td>
					</tr>
					<tr>
						<td>
							<a href="#">
								<button>Purchased Sedo from All Shop</button>
							</a>
						</td>
						<td>
							<i className="fa fa-check " aria-hidden="true"></i>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

export default Transaction;
