import React from "react";

import "./../../require/js/app";

function PostInfo(props) {
    return (
        <div className="post-info">
            <div className="user-prfile">
                <img src={props.profileIcon} alt="profile" />
                <h3>Profile name</h3>
            </div>
            <div className="make-post">
                <input
                    className="onclick_event"
                    type="text"
                    placeholder="Write something to Joseph..."
                />
            </div>
            <div className="onclick_display ">
                <div className="photo_gif">
                    <div className="box">
                        <input
                            type="file"
                            name="file-5[]"
                            id="file-5"
                            className="inputfile inputfile-4"
                            data-multiple-caption="{count} files selected"
                            multiple=""
                        />
                        <label htmlFor="file-5">
                            <figure>
                                <img src={props.cameraIcon} alt="upload icon" />
                            </figure>
                        </label>
                    </div>
                    <div className="box">
                        <input
                            type="file"
                            name="file-5[]"
                            id="file-6"
                            className="inputfile inputfile-4"
                            data-multiple-caption="{count} files selected"
                            multiple=""
                        />
                        <label htmlFor="file-6">
                            <figure>
                                <img src={props.filmIcon} alt="upload icon" />
                            </figure>
                        </label>
                    </div>
                    <div className="box">
                        <input
                            type="file"
                            name="file-5[]"
                            id="file-6"
                            className="inputfile inputfile-4"
                            data-multiple-caption="{count} files selected"
                            multiple=""
                        />
                        <label htmlFor="file-6">
                            <figure>
                                <img src={props.smileIcon} alt="upload icon" />
                            </figure>
                        </label>
                    </div>
                </div>
                <div className="public-option">
                    <select name="" id="" className="form-control">
                        <option value="" defaultValue>
                            Public
                        </option>
                        <option value="">Communities</option>
                        <option value="">Only me</option>
                    </select>
                    <div className="post-upload">
                        <a href="#">Cancel</a>
                        <a href="#" className="upload-post">
                            Publish Now
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostInfo;
