import React from "react";
import Community from "./Community";

import IconImg1 from "./../../require/img/home/icon-1.png";
import IconImg2 from "./../../require/img/home/icon-2.png";

import ArchitectureImg from "./../../require/img/home/banner-group.jpg";
import CoffeAddictImg from "./../../require/img/home/albums-img.png";
import WeekendImg from "./../../require/img/home/weekendImage.jpg";

function Communities() {
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
                            Action
                        </a>
                        <a className="dropdown-item" href="#">
                            Another action
                        </a>
                        <a className="dropdown-item" href="#">
                            Something else here
                        </a>
                    </div>
                </div>
                <div className="connection-icon">
                    <a id="communityGridView" href="#CommunitiesGroup">
                        <img src={IconImg1} alt="Icon" />
                    </a>
                    <a id="communityListView" href="#CommunitiesGroup">
                        <img src={IconImg2} alt="Icon" />
                    </a>
                </div>
            </div>
            <div className="groups-detail" id="CommunitiesGroup">
                <Community
                    groupTitle="Architecture"
                    groupImage={ArchitectureImg}
                />
                <Community
                    groupTitle="Coffee Addicts"
                    groupImage={CoffeAddictImg}
                />
                <Community
                    groupTitle="Weekend Outline"
                    groupImage={WeekendImg}
                />
            </div>
        </div>
    );
}

export default Communities;
