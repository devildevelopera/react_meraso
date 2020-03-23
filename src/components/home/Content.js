import React from "react";
import UserPost from "./UserPost";

import { Link } from "react-router-dom";

// Required Image Files
import PostImage from "./../../require/img/home/post-image.png";
import ProfileIcon from "./../../require/img/home/profile-icon.png";
import CameraIcon from "./../../require/img/home/cam-icon.png";
import FilmIcon from "./../../require/img/home/film.png";
import SmileIcon from "./../../require/img/home/smile.png";
import PostEditIcon from "./../../require/img/home/post-edit.png";
import PostOfflineIcon from "./../../require/img/home/offline.png";
import PostLoveIcon from "./../../require/img/home/p1.png";
import PostFireIcon from "./../../require/img/home/p2.png";
import PostLikeIcon from "./../../require/img/home/p3.png";
import PostDangerIcon from "./../../require/img/home/p4.png";
import PostInfo from "./PostInfo";
import ProfilePost from "./ProfilePost";

function ProfileContent() {
    return (
        <div id="content" className="mt-0">
            <div className="user-post mt-0">
                {/* User Post Image & Video */}
                <UserPost img={PostImage} />

                {/* User Post Details */}
                <div className="user-post-detail">
                    <PostInfo
                        profileIcon={ProfileIcon}
                        filmIcon={FilmIcon}
                        smileIcon={SmileIcon}
                        cameraIcon={CameraIcon}
                    />

                    <div className="post-edit">
                        <Link to="/media">
                            <img src={PostEditIcon} alt="post-edit" />
                        </Link>
                        <div className="search_box">
                            <input type="search" placeholder="Search Feed..." />
                        </div>
                    </div>

                    {/* Profile Post */}
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
