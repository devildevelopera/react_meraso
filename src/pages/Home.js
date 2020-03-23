import React from "react";
import Content from "./../components/home/Content";
import RightSidebar from "./../components/home/RightSidebar";

class Home extends React.Component {
    componentDidMount() {
        require("./Home.css");
    }
    render() {
        return (
            <React.Fragment>
                <Content />
                <RightSidebar />
            </React.Fragment>
        );
    }
}

export default Home;
