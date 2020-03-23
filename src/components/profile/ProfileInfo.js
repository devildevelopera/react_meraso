import React from "react";

function ProfileInfo(props) {
    return (
        <div className="profile-info">
            <div className="profile-img">
                <img src={props.profileImg} alt="" />
            </div>
            <div className="profile-detail text-center ml-3 align-items-start">
                <h2 className="mb-4">
                    Madelyn
                    <i className="fa fa-check-circle-o" aria-hidden="true"></i>
                </h2>
                <ul>
                    <li>
                        @madelyn
                        <i className="fas fa-globe-europe ml-2"></i>
                    </li>
                    <li className="small">
                        <strong>15 Subscriber 20 Fans</strong>
                    </li>
                    <li className="small">
                        <strong>Short Description :</strong> Social Media
                        Entrepreneur
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default ProfileInfo;
