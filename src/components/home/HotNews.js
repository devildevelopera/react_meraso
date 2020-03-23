import React from "react";
import HotNewsItem from "./HotNewsItem";

function HotNews(props) {
	return (
		<div className="latest-update">
			<div className="update-title">
				<h2>24 HOURS HOT NEWS</h2>
			</div>
			<div className="hot_news">
				<HotNewsItem postOfflineIcon={props.postOfflineIcon} />
				<HotNewsItem postOfflineIcon={props.postOfflineIcon} />
				<HotNewsItem postOfflineIcon={props.postOfflineIcon} />
				<HotNewsItem postOfflineIcon={props.postOfflineIcon} />
				<HotNewsItem postOfflineIcon={props.postOfflineIcon} />
				<HotNewsItem postOfflineIcon={props.postOfflineIcon} />
				<HotNewsItem postOfflineIcon={props.postOfflineIcon} />
				<HotNewsItem postOfflineIcon={props.postOfflineIcon} />
			</div>
			<div className="see-more-btn">
				<a href="#">
					More
					<i className="fa fa-angle-right" aria-hidden="true"></i>
				</a>
			</div>
		</div>
	);
}

export default HotNews;
