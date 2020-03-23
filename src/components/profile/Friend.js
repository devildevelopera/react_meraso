import React from "react";

function Friend(props) {
    return (
        <div className="card card-shadow">
            <img
                className="card-img-top"
                src={props.profileImg}
                alt="profile"
            />
            <div className="card-body">
                <h5 className="card-title">Profile name</h5>
                <div className="fans-subscriber">
                    <a href="#">10 Fan</a>
                    <a href="#">25 Subscriber</a>
                </div>
                <div className="followers-detail">
                    <a href="#">Country</a>
                    <a href="#">Following</a>
                </div>
                <div className="card_icons">
                    <a href="#">
                        <img src={props.cardIconImg1} alt="Icon" />
                    </a>
                    <a href="#">
                        <img src={props.cardIconImg2} alt="Icon" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Friend;
