import React from "react";
import Message from "./Message";

function UnreadMessges() {
    return (
        <div
            className="tab-pane fade show active"
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
        >
            <div className="row">
                <div className="col-12">
                    <div className="notification-box mb-50">
                        <ul>
                            <li className="d-flex justify-content-between align-items-center border-bottom">
                                <div className="d-flex ">
                                    <div className="form-group">
                                        <input type="checkbox" id="html" />
                                        <label
                                            className="mt-m"
                                            htmlFor="html"
                                        ></label>
                                    </div>
                                    <select className="select ml-20 ">
                                        <option>Bulk Actions</option>
                                        <option>Bulk Actions 2</option>
                                        <option>Bulk Actions 3</option>
                                    </select>
                                </div>
                                <div className="form-check">
                                    <div className="form-group">
                                        <span className="secondary-color">
                                            Sort by
                                        </span>
                                        <input type="checkbox" id="css" />
                                        <label htmlFor="css"></label>
                                    </div>
                                </div>
                            </li>
                            <Message />
                            <Message />
                        </ul>
                    </div>
                    <p className="secondary-color pl-4 pl-md-0">
                        Viewing 1 notification
                    </p>
                </div>
            </div>
        </div>
    );
}

export default UnreadMessges;
