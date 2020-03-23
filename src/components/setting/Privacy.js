import React from "react";

function Privacy() {
    return (
        <div className="col-12 col-md-7 col-lg-9">
            <div className="privacy-right">
                <div className="privacy-title">
                    <h2 className="mb-25">Profile Visibility Settings</h2>
                    <p className="mb-20">
                        Select who may see your profile details.
                    </p>
                </div>
                <div className="row">
                    <div className="col-12 col-lg-8 ">
                        <div className="table-responsive">
                            <div className=" general-info d-flex login-border">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th className="col">
                                                <h5>General Information</h5>
                                            </th>
                                            <th className="col">
                                                <h4>Visibillity</h4>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="col">First Name</td>
                                            <td className="col">
                                                <p>Public</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="col">Last Name</td>
                                            <td className="col">
                                                <select className="select">
                                                    <option>Public</option>
                                                    <option>Public 2</option>
                                                    <option>Public 3</option>
                                                    <option>Public 4</option>
                                                    <option>Public 5</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="col">Nickname</td>
                                            <td className="col">
                                                <select className="select">
                                                    <option>Public</option>
                                                    <option>Public 2</option>
                                                    <option>Public 3</option>
                                                    <option>Public 4</option>
                                                    <option>Public 5</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="col">Birth Date</td>
                                            <td className="col">
                                                <select className="select">
                                                    <option>Public</option>
                                                    <option>Public 2</option>
                                                    <option>Public 3</option>
                                                    <option>Public 4</option>
                                                    <option>Public 5</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="col">Gender</td>
                                            <td className="col">
                                                <select className="select">
                                                    <option>Public</option>
                                                    <option>Public 2</option>
                                                    <option>Public 3</option>
                                                    <option>Public 4</option>
                                                    <option>Public 5</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="col">Phone</td>
                                            <td className="col">
                                                <select className="select">
                                                    <option>Public</option>
                                                    <option>Public 2</option>
                                                    <option>Public 3</option>
                                                    <option>Public 4</option>
                                                    <option>Public 5</option>
                                                </select>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-8">
                        <div className="mt-20">
                            <div className=" general-info d-flex login-border">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>
                                                <h5>Social</h5>
                                            </th>
                                            <th>
                                                <h4>Visibillity</h4>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Social Links</td>
                                            <td>
                                                <p>Public</p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-8">
                        <div className="table-responsive mt-20">
                            <div className=" general-info d-flex login-border">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th className="col">
                                                <h5>Biography</h5>
                                            </th>
                                            <th className="col">
                                                <h4>Visibillity</h4>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="col">Last Name</td>
                                            <td className="col">
                                                <select className="select">
                                                    <option>Public</option>
                                                    <option>Public 2</option>
                                                    <option>Public 3</option>
                                                    <option>Public 4</option>
                                                    <option>Public 5</option>
                                                </select>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Privacy;
