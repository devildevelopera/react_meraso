import React from "react";

// Required Image Files

const border_e = {
    border: "1px solid #eee"
};
function content() {
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
                <div className="card">
                    <div className="card-body">
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
                        <div
                            className="table-responsive mt-3 br-e"
                            style={border_e}
                        >
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <th width="30%">
                                            <label className="check_style">
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                            </label>
                                            Title
                                        </th>
                                        <th width="10%">User</th>
                                        <th width="10%">Categories</th>
                                        <th width="10%">Tags</th>
                                        <th width="20%">Total Comments</th>
                                        <th width="20%">Posted Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <label className="check_style">
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                            </label>
                                            <iframe
                                                width="200"
                                                height="150"
                                                src="https://www.youtube.com/embed/Vkiy28XoSAo"
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                                title="video"
                                            ></iframe>
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
                                            <iframe
                                                width="200"
                                                height="150"
                                                src="https://www.youtube.com/embed/Vkiy28XoSAo"
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                                title="video"
                                            ></iframe>
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
                                            <iframe
                                                width="200"
                                                height="150"
                                                src="https://www.youtube.com/embed/Vkiy28XoSAo"
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                                title="video"
                                            ></iframe>
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
                                            <iframe
                                                width="200"
                                                height="150"
                                                src="https://www.youtube.com/embed/Vkiy28XoSAo"
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                                title="video"
                                            ></iframe>
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
                                            <iframe
                                                width="200"
                                                height="150"
                                                src="https://www.youtube.com/embed/Vkiy28XoSAo"
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                                title="video"
                                            ></iframe>
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
                                            <iframe
                                                width="200"
                                                height="150"
                                                src="https://www.youtube.com/embed/Vkiy28XoSAo"
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                                title="video"
                                            ></iframe>
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
                                            <iframe
                                                width="200"
                                                height="150"
                                                src="https://www.youtube.com/embed/Vkiy28XoSAo"
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                                title="video"
                                            ></iframe>
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
                                            <iframe
                                                width="200"
                                                height="150"
                                                src="https://www.youtube.com/embed/Vkiy28XoSAo"
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                                title="video"
                                            ></iframe>
                                        </td>
                                        <td>John</td>
                                        <td>Video</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>Last Modified 2019/05/17</td>
                                    </tr>
                                </tbody>
                                <tfoot>
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
                                </tfoot>
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
            </div>
        </div>
    );
}

export default content;
