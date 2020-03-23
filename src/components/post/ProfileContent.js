import React from "react";

// Required Image Files
import ProfileIcon from "./../../require/img/home/profile-icon.png";
import CameraIcon from "./../../require/img/home/cam-icon.png";
import FilmIcon from "./../../require/img/home/film.png";
import SmileIcon from "./../../require/img/home/smile.png";
import PostEditImg from "./../../require/img/home/post-edit.png";
import PostOfflineIcon from "./../../require/img/home/offline.png";
import PostLoveIcon from "./../../require/img/home/p1.png";
import PostFireIcon from "./../../require/img/home/p2.png";
import PostLikeIcon from "./../../require/img/home/p3.png";
import PostDangerIcon from "./../../require/img/home/p4.png";
import UserInfo from "../profile/UserInfo";
import Fans from "./Fans";
import Subscribers from "./Subscribers";
import PostInfo from "../home/PostInfo";
import ProfilePost from "../home/ProfilePost";

function ProfileContent() {
    return (
        <div id="content" className="mt-0">
            <UserInfo />
            <div className="user-post">
                <div className="fans-connnections">
                    <Fans></Fans>
                    <Subscribers></Subscribers>
                </div>
                <div className="user-post-detail">
                    <PostInfo
                        profileIcon={ProfileIcon}
                        filmIcon={FilmIcon}
                        smileIcon={SmileIcon}
                        cameraIcon={CameraIcon}
                    />
                    <div className="post-edit">
                        <a href="#">
                            <img src={PostEditImg} alt="post-edit" />
                        </a>
                        <div className="search_box">
                            <input type="search" placeholder="Search Feed..." />
                        </div>
                    </div>

                    <ProfilePost
                        postOfflineIcon={PostOfflineIcon}
                        postLoveIcon={PostLoveIcon}
                        postLikeIcon={PostLikeIcon}
                        postDangerIcon={PostDangerIcon}
                        postFireIcon={PostFireIcon}
                    />
                </div>
            </div>
        </div>
    );
}

export default ProfileContent;
