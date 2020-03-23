import React from "react";
import MesaroRegister from "../components/mesaroregister/MesaroRegister";


class MesaroRegisterPage extends React.Component {
    componentDidMount() {
        require("./MesaroLogin.css");
    }
    render() {
        return (
            <React.Fragment>
                <MesaroRegister></MesaroRegister>
            </React.Fragment>
        );
    }
}

export default MesaroRegisterPage;
