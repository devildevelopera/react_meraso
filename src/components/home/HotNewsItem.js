import React from "react";

function HotNewsItem(props) {
	return (
		<React.Fragment>
			<img src={props.postOfflineIcon} alt="Offline" />
		</React.Fragment>
	);
}

export default HotNewsItem;
