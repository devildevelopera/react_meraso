import React from "react";
import UnreadMessges from "./UnreadMessges";
import ReadMessages from "./ReadMessages";

import $ from "jquery";

class Content extends React.Component {
    componentDidMount() {
        require("./Notification.css");
        require("./../../require/js/app");
        $(".select").niceSelect();
    }
    render() {
        return (
            <div id="content" className="mt-0">
                <section className="notification-area notif">
                    <div className="container">
                        <div className="row mb-50 align-items-center">
                            <div className="col-12 col-md-6">
                                <h2 className="mb-0">Notifications</h2>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="section-title-right d-flex justify-content-end">
                                    <ul
                                        className="nav nav-tabs"
                                        id="myTab"
                                        role="tablist"
                                    >
                                        <li className="nav-item">
                                            <a
                                                className="nav-link active"
                                                id="home-tab"
                                                data-toggle="tab"
                                                href="#home"
                                                role="tab"
                                                aria-controls="home"
                                                aria-selected="true"
                                            >
                                                Unread
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                id="profile-tab"
                                                data-toggle="tab"
                                                href="#profile"
                                                role="tab"
                                                aria-controls="profile"
                                                aria-selected="false"
                                            >
                                                Read
                                            </a>
                                        </li>
                                        <li className="view-all nav-item">
                                            <select className="select">
                                                <option>- View All -</option>
                                                <option>View All 2</option>
                                                <option>View All 3</option>
                                                <option>View All 4</option>
                                                <option>View All 5</option>
                                            </select>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="tab-content" id="myTabContent">
                            <UnreadMessges />
                            <ReadMessages />
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Content;
