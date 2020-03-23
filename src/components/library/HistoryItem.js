import React from "react";

function LibraryItem() {
    return (
        <li>
            <div className="card-detail">
                <iframe
                    width="100%"
                    height="150"
                    src="https://www.youtube.com/embed/Vkiy28XoSAo"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="video"
                ></iframe>
                <h2>Lorem ipsum dolor sit amet</h2>
                <p>
                    Profile Name
                    <i
                        className="fa fa-check-circle ml-2"
                        aria-hidden="true"
                    ></i>
                </p>
                <div className="views-time">
                    <a href="#">176 views</a>
                    <span>
                        <i className="fa fa-circle" aria-hidden="true"></i>
                    </span>
                    <a href="#">13 minutes ago</a>
                </div>
            </div>
        </li>
    );
}

export default LibraryItem;
