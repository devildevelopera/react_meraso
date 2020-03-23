import React from "react";
import MesaroWelcome from "../components/merasowelcome/MesaroWelcome"

// import "./MesaroLogin.css";

class MesaroWelcomePage extends React.Component {
    componentDidMount() {
        require("./MesaroLogin.css");
    }
    render() {
        return (
            <React.Fragment>
                <MesaroWelcome></MesaroWelcome>
            </React.Fragment>
        );
    }
}

export default MesaroWelcomePage;
