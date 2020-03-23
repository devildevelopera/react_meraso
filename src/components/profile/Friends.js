import React from "react";
import Friend from "./Friend";

function Friends(props) {
    return (
        <div
            className="tab-pane fade show active"
            id="my-connection"
            role="tabpanel"
            aria-labelledby="my-connection-tab"
        >
            <div className="search-connection">
                <div className="dropdown">
                    <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        Recent Active
                    </button>
                    <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                    >
                        <a className="dropdown-item" href="#">
                            Subscriber
                        </a>
                        <a className="dropdown-item" href="#">
                            Fans
                        </a>
                        <a className="dropdown-item" href="#">
                            Fans request
                        </a>
                    </div>
                </div>
                <div className="connection-icon">
                    <a id="FriendsGridView" href="#NewProfileCard">
                        <img src={props.iconImg1} alt="Icon" />
                    </a>
                    <a id="FriendsListView" href="#NewProfileCard">
                        <img src={props.iconImg2} alt="Icon" />
                    </a>
                </div>
            </div>
            <div className="new-profle-card" id="NewProfileCard">
                <Friend
                    profileImg={props.profileImg}
                    cardIconImg1={props.cardIconImg1}
                    cardIconImg2={props.cardIconImg2}
                />
                <Friend
                    profileImg={props.profileImg}
                    cardIconImg1={props.cardIconImg1}
                    cardIconImg2={props.cardIconImg2}
                />
                <Friend
                    profileImg={props.profileImg}
                    cardIconImg1={props.cardIconImg1}
                    cardIconImg2={props.cardIconImg2}
                />
                <Friend
                    profileImg={props.profileImg}
                    cardIconImg1={props.cardIconImg1}
                    cardIconImg2={props.cardIconImg2}
                />
            </div>
        </div>
    );
}

export default Friends;
