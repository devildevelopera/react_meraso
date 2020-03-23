import React from "react";

import "./profile.css";

function UserProfile() {
	return (
		<div className="albums-tabs">
			<div className="view-profile ">
				<h3 className="py-2 px-3">View Prifle</h3>
				<hr />
			</div>
			<div className="general-info">
				<h3 className="py-1 px-3">general information</h3>
				<hr />
				<table className="table">
					<tbody>
						<tr>
							<td>First Name</td>
							<td>Adnan</td>
						</tr>
						<tr>
							<td>Last Name</td>
							<td>Jamil</td>
						</tr>
						<tr>
							<td>Nickname</td>
							<td>Aadi</td>
						</tr>
						<tr>
							<td>Birth Date</td>
							<td>May 23,1997</td>
						</tr>
						<tr>
							<td>Gender</td>
							<td>Male</td>
						</tr>
						<tr>
							<td>Phone</td>
							<td className="text-danger">+123456789</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default UserProfile;
