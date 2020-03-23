import React from "react";
import ProfileContent from "../components/post/ProfileContent";
import RightSidebar from "../components/profile/RightSidebar";

function Post() {
    return (
        <React.Fragment>
            <ProfileContent></ProfileContent>
            <RightSidebar></RightSidebar>
        </React.Fragment>
    );
}

export default Post;
