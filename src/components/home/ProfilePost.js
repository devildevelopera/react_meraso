import React from "react";

function ProfilePost(props) {
	return (
		<div className="profile-post p-4">
			<div className="post-detail">
				<div className="post-img">
					<img src={props.postOfflineIcon} alt="Profile " />
				</div>
				<div className="post-connnection">
					<span>
						Joseph started the discussion Great places in Wisconsin
						that every nature lover should see ! in the group
					</span>
					<span>
						<img src={props.postOfflineIcon} alt="Profile " />
						nature lovers
					</span>
					<p>3 months, 2 weeks agos</p>
				</div>
			</div>
			<div className="post-text">
				<p>Dear all,</p>
				<p>
					In 3 days i am going for the first time in my life to U.S.
					My GF is visiting her mother in Chicago (so i tagged along),
					and we decided tospend our holidays in the US.
				</p>
				<p>
					I was trying to find some trip advisors/travel guides
					online, but that is not what i was hoping for. I was looking
					for some personal guides, with to some degree of tips and...
				</p>
				<a href="#">Read More</a>
			</div>
			<div className="post-icons">
				<a href="#">
					<img src={props.postLoveIcon} alt="Icon" />
				</a>
				<a href="#">
					<img src={props.postFireIcon} alt="Icon" />
				</a>
				<a href="#">
					<img src={props.postLikeIcon} alt="Icon" />
				</a>
				<a href="#">
					<img src={props.postDangerIcon} alt="Icon" />
				</a>
				<a href="#">Reply Privately</a>
				<a href="#">Reply Publicly</a>
			</div>
		</div>
	);
}

export default ProfilePost;
