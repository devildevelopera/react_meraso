import React from "react";

// Required Image Files
import HeadingImg1 from "./../../require/img/home/heading1.png";
import HeadingImg2 from "./../../require/img/home/heading2.png";
import HeadingImg3 from "./../../require/img/home/heading3.png";
import HeadingImg4 from "./../../require/img/home/heading4.png";
import HistoryItem from "./HistoryItem";

function Content() {
	return (
		<div id="content" className="mt-0">
			<div className="library-detail">
				<div className="library-heading">
					<div className="library-title">
						<img src={HeadingImg1} alt="" />
						<h2>All History</h2>
					</div>
					<a href="#">SEE ALL</a>
				</div>
				<div className="card_loop">
					<ul>
						<HistoryItem />
						<HistoryItem />
						<HistoryItem />
						<HistoryItem />
					</ul>
				</div>
			</div>
			<div className="library-detail">
				<div className="library-heading">
					<div className="library-title">
						<img src={HeadingImg2} alt="" />
						<h2>Posts</h2>
					</div>
					<a href="#">SEE ALL</a>
				</div>
				<div className="card_loop">
					<ul>
						<HistoryItem />
						<HistoryItem />
						<HistoryItem />
						<HistoryItem />
					</ul>
				</div>
			</div>
			<div className="library-detail">
				<div className="library-heading">
					<div className="library-title">
						<img src={HeadingImg3} alt="" />
						<h2>Viewed</h2>
					</div>
					<a href="#">SEE ALL</a>
				</div>
				<div className="card_loop">
					<ul>
						<HistoryItem />
						<HistoryItem />
						<HistoryItem />
						<HistoryItem />
					</ul>
				</div>
			</div>
			<div className="library-detail">
				<div className="library-heading">
					<div className="library-title">
						<img src={HeadingImg4} alt="" />
						<h2>Transactiony</h2>
					</div>
					<a href="#">SEE ALL</a>
				</div>
				<div className="card_loop">
					<ul>
						<HistoryItem />
						<HistoryItem />
						<HistoryItem />
						<HistoryItem />
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Content;
