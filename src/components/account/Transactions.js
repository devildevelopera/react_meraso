import React from "react";
import Transaction from "./Transaction";

function Transactions() {
	return (
		<div
			className="tab-pane fade show active"
			id="home"
			role="tabpanel"
			aria-labelledby="home-tab"
		>
			<Transaction />
			<Transaction />
			<Transaction />
		</div>
	);
}

export default Transactions;
