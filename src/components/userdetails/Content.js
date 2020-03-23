import React from "react";

// Required Image Files
import UserInfo from "../profile/UserInfo";
import UserProfile from "./UserProfile";

function Content() {
    return (
        <div id="content" className="mt-0">
            <UserInfo />
            <UserProfile></UserProfile>
        </div>
    );
}

export default Content;
