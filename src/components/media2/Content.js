import React from "react";

function Content() {
	return (
		<div id="content" className="mt-0">
			<div className="post-one-detail">
				<div className="screen-btn">
					<select
						className="form-control"
						id="exampleFormControlSelect1"
					>
						<option>Screen Options</option>
						<option>Posts</option>
						<option>3</option>
						<option>4</option>
						<option>5</option>
					</select>
					<select
						className="form-control"
						id="exampleFormControlSelect1"
					>
						<option>Help</option>
						<option>Posts</option>
						<option>3</option>
						<option>4</option>
						<option>5</option>
					</select>
				</div>
				<div className="add-category">
					<h2>Post</h2>
					<a href="#">Add New Category</a>
				</div>
				<div className="move-trash">
					<h3>
						1 post moved to the Trash. <a href="#">Undo</a>
					</h3>
					<i className="fa fa-times-circle" aria-hidden="true"></i>
				</div>
				<div className="trash-item">
					<h2>Trash (2)</h2>
					<div className="input-group">
						<input
							type="text"
							className="form-control"
							aria-label="Username"
							aria-describedby="basic-addon1"
						/>
						<div className="input-group-prepend">
							<span
								className="input-group-text"
								id="basic-addon1"
							>
								Search Posts
							</span>
						</div>
					</div>
				</div>
				<div className="filter">
					<div>
						<select
							className="form-control"
							id="exampleFormControlSelect1"
						>
							<option>All Dates</option>
							<option>1</option>
							<option>2</option>
							<option>3</option>
						</select>
						<select
							className="form-control"
							id="exampleFormControlSelect1"
						>
							<option>Video</option>
							<option>3</option>
							<option>4</option>
							<option>5</option>
						</select>
						<a href="#">Filter</a>
					</div>
					<p>15 Item</p>
				</div>
				<div className="table-category">
					<table>
						<tr>
							<th>
								<label className="check_style">
									<input type="checkbox" />
									<span className="checkmark"></span>
								</label>
								Title
							</th>
							<th>User</th>
							<th>Categories</th>
							<th>Tags</th>
							<th>Total Comments</th>
							<th>Posted Date</th>
						</tr>
						<tr>
							<td>
								<label className="check_style">
									<input type="checkbox" />
									<span className="checkmark"></span>
								</label>
								Animation - Draft
							</td>
							<td>John</td>
							<td>Video</td>
							<td>-</td>
							<td>-</td>
							<td>Last Modified 2019/05/17</td>
						</tr>
						<tr>
							<td>
								<label className="check_style">
									<input type="checkbox" />
									<span className="checkmark"></span>
								</label>
								Animation - Draft
							</td>
							<td>John</td>
							<td>Video</td>
							<td>-</td>
							<td>-</td>
							<td>Last Modified 2019/05/17</td>
						</tr>
						<tr>
							<td>
								<label className="check_style">
									<input type="checkbox" />
									<span className="checkmark"></span>
								</label>
								Animation - Draft
							</td>
							<td>John</td>
							<td>Video</td>
							<td>-</td>
							<td>
								<div className="bubble">1</div>
							</td>
							<td>Last Modified 2019/05/17</td>
						</tr>
						<tr>
							<td>
								<label className="check_style">
									<input type="checkbox" />
									<span className="checkmark"></span>
								</label>
								Animation - Draft
							</td>
							<td>John</td>
							<td>Video</td>
							<td>-</td>
							<td>
								<div className="bubble">1</div>
							</td>
							<td>Last Modified 2019/05/17</td>
						</tr>
						<tr>
							<td>
								<label className="check_style">
									<input type="checkbox" />
									<span className="checkmark"></span>
								</label>
								Animation - Draft
								<div className="trash-fields">
									<a href="#">Trash</a>
									<span>|</span>
									<a href="#">Preview</a>
								</div>
							</td>
							<td>John</td>
							<td>Video</td>
							<td>-</td>
							<td>
								<div className="bubble">1</div>
							</td>
							<td>Last Modified 2019/05/17</td>
						</tr>
						<tr>
							<td>
								<label className="check_style">
									<input type="checkbox" />
									<span className="checkmark"></span>
								</label>
								Animation - Draft
							</td>
							<td>John</td>
							<td>Video</td>
							<td>-</td>
							<td>-</td>
							<td>Last Modified 2019/05/17</td>
						</tr>
						<tr>
							<td>
								<label className="check_style">
									<input type="checkbox" />
									<span className="checkmark"></span>
								</label>
								Animation - Draft
							</td>
							<td>John</td>
							<td>Video</td>
							<td>-</td>
							<td>-</td>
							<td>Last Modified 2019/05/17</td>
						</tr>
						<tr>
							<td>
								<label className="check_style">
									<input type="checkbox" />
									<span className="checkmark"></span>
								</label>
								Animation - Draft
							</td>
							<td>John</td>
							<td>Video</td>
							<td>-</td>
							<td>-</td>
							<td>Last Modified 2019/05/17</td>
						</tr>
						<tr>
							<th>
								<label className="check_style">
									<input type="checkbox" />
									<span className="checkmark"></span>
								</label>
								Title
							</th>
							<th>User</th>
							<th>Categories</th>
							<th>Tags</th>
							<th>Total Comments</th>
							<th>Posted Date</th>
						</tr>
					</table>
				</div>
				<div className="bulk-option">
					<div className="bulk-btn">
						<select
							className="form-control"
							id="exampleFormControlSelect1"
						>
							<option>Bulk Actions</option>
							<option>Posts</option>
							<option>3</option>
							<option>4</option>
							<option>5</option>
						</select>
						<a href="#">Apply</a>
					</div>
					<p>15 Item</p>
				</div>
			</div>
		</div>
	);
}

export default Content;
