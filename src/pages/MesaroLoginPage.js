import React from "react";
import MesaroLogin from "../components/mesarologin/MesaroLogin";

// import "./MesaroLogin.css";

class MesaroLoginPage extends React.Component {
    componentDidMount() {
        require("./MesaroLogin.css");
    }
    render() {
        return (
            <React.Fragment>
                <MesaroLogin></MesaroLogin>
            </React.Fragment>
        );
    }
}

export default MesaroLoginPage;
