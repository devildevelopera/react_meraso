import React from "react";

// Required Image Files
import UserInfo from "../profile/UserInfo";
import Communities from "./Communities";

function Content() {
    return (
        <div id="content" className="mt-0">
            <UserInfo />
            <div className="albums-tabs">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                        <a
                            className="nav-link active"
                            id="my-connection-tab"
                            data-toggle="tab"
                            href="#my-connection"
                            role="tab"
                            aria-controls="my-connection"
                            aria-selected="true"
                        >
                            My Communities
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            id="Albums-tab"
                            data-toggle="tab"
                            href="#Albums"
                            role="tab"
                            aria-controls="Albums"
                            aria-selected="false"
                        >
                            Community Invitation
                        </a>
                    </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                    <Communities></Communities>
                    <div
                        className="tab-pane fade"
                        id="Albums"
                        role="tabpanel"
                        aria-labelledby="Albums-tab"
                    >
                        No Content
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;
