import React from "react";
import Content from "../components/userdetails/Content";
import RightSidebar from "../components/profile/RightSidebar";

function UserDetails() {
    return (
        <React.Fragment>
            <Content />
            <RightSidebar />
        </React.Fragment>
    );
}

export default UserDetails;
