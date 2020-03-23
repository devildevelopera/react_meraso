import React from "react";

// Required Image Files

import PostOfflineIcon from "./../../require/img/home/offline.png";
import PostOfflineIcon1 from "./../../require/img/home/offline1.png";
import ProductImg1 from "./../../require/img/home/product-image1.png";
import ProductImg2 from "./../../require/img/home/product-image2.png";

function Content() {
    return (
        <div id="content" className="mt-0">
            <div className="top-sellers_detail">
                <div className="container">
                    <div className="product_search">
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search in this shop"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                            <div className="input-group-prepend">
                                <span
                                    className="input-group-text"
                                    id="basic-addon1"
                                >
                                    Search
                                </span>
                            </div>
                        </div>
                        <div className="dropdown">
                            <button
                                className="btn btn-secondary dropdown-toggle"
                                type="button"
                                id="dropdownMenuButton"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                Sort by: Most Recent
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
                    </div>

                    <div className="top-sellers-shops">
                        <div className="sellers-shops-detail">
                            <div className="shops-profile">
                                <div className="shop-img">
                                    <a href="#">
                                        <i
                                            className="fa fa-heart-o"
                                            aria-hidden="true"
                                        ></i>
                                    </a>
                                    <img src={PostOfflineIcon} alt="" />
                                </div>
                                <div className="shop-name">
                                    <h2>Profile Name</h2>
                                    <div className="social-link">
                                        <a href="#">
                                            <i
                                                className="fa fa-facebook"
                                                aria-hidden="true"
                                            ></i>
                                            /
                                        </a>
                                        <a href="#">
                                            <i
                                                className="fa fa-twitter"
                                                aria-hidden="true"
                                            ></i>
                                            /
                                        </a>
                                        <a href="#">
                                            <i
                                                className="fa fa-youtube"
                                                aria-hidden="true"
                                            ></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="shope-feed">
                                <p>IL Feedback: 21%</p>
                            </div>
                        </div>
                        <div className="sellers-shops-product">
                            <div className="shops-profile">
                                <div className="shop-img">
                                    <img src={PostOfflineIcon1} alt="" />
                                </div>
                                <div className="shop-name">
                                    <h3>Shop</h3>
                                    <h2>Rare Collections</h2>
                                </div>
                            </div>
                            <div className="shops-product">
                                <img src={ProductImg1} alt="product" />
                                <img src={ProductImg2} alt="product" />
                                <img src={ProductImg1} alt="product" />
                                <img src={ProductImg2} alt="product" />
                                <img src={ProductImg1} alt="product" />
                                <div className="more-product">
                                    <a href="#">
                                        <p>
                                            14 <br />
                                            items
                                        </p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="top-sellers-shops">
                        <div className="sellers-shops-detail">
                            <div className="shops-profile">
                                <div className="shop-img">
                                    <a href="#">
                                        <i
                                            className="fa fa-heart-o"
                                            aria-hidden="true"
                                        ></i>
                                    </a>
                                    <img src={PostOfflineIcon} alt="" />
                                </div>
                                <div className="shop-name">
                                    <h2>Profile Name</h2>
                                    <div className="social-link">
                                        <a href="#">
                                            <i
                                                className="fa fa-facebook"
                                                aria-hidden="true"
                                            ></i>
                                            /
                                        </a>
                                        <a href="#">
                                            <i
                                                className="fa fa-twitter"
                                                aria-hidden="true"
                                            ></i>
                                            /
                                        </a>
                                        <a href="#">
                                            <i
                                                className="fa fa-youtube"
                                                aria-hidden="true"
                                            ></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="shope-feed">
                                <p>IL Feedback: 21%</p>
                            </div>
                        </div>
                        <div className="sellers-shops-product">
                            <div className="shops-profile">
                                <div className="shop-img">
                                    <img src={PostOfflineIcon1} alt="" />
                                </div>
                                <div className="shop-name">
                                    <h3>Shop</h3>
                                    <h2>Rare Collections</h2>
                                </div>
                            </div>
                            <div className="shops-product">
                                <img src={ProductImg1} alt="product" />
                                <img src={ProductImg2} alt="product" />
                                <img src={ProductImg1} alt="product" />
                                <img src={ProductImg2} alt="product" />
                                <img src={ProductImg1} alt="product" />
                                <div className="more-product">
                                    <a href="#">
                                        <p>
                                            14 <br />
                                            items
                                        </p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="top-sellers-shops">
                        <div className="sellers-shops-detail">
                            <div className="shops-profile">
                                <div className="shop-img">
                                    <a href="#">
                                        <i
                                            className="fa fa-heart-o"
                                            aria-hidden="true"
                                        ></i>
                                    </a>
                                    <img src={PostOfflineIcon} alt="" />
                                </div>
                                <div className="shop-name">
                                    <h2>Profile Name</h2>
                                    <div className="social-link">
                                        <a href="#">
                                            <i
                                                className="fa fa-facebook"
                                                aria-hidden="true"
                                            ></i>
                                            /
                                        </a>
                                        <a href="#">
                                            <i
                                                className="fa fa-twitter"
                                                aria-hidden="true"
                                            ></i>
                                            /
                                        </a>
                                        <a href="#">
                                            <i
                                                className="fa fa-youtube"
                                                aria-hidden="true"
                                            ></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="shope-feed">
                                <p>IL Feedback: 21%</p>
                            </div>
                        </div>
                        <div className="sellers-shops-product">
                            <div className="shops-profile">
                                <div className="shop-img">
                                    <img src={PostOfflineIcon1} alt="" />
                                </div>
                                <div className="shop-name">
                                    <h3>Shop</h3>
                                    <h2>Rare Collections</h2>
                                </div>
                            </div>
                            <div className="shops-product">
                                <img src={ProductImg1} alt="product" />
                                <img src={ProductImg2} alt="product" />
                                <img src={ProductImg1} alt="product" />
                                <img src={ProductImg2} alt="product" />
                                <img src={ProductImg1} alt="product" />
                                <div className="more-product">
                                    <a href="#">
                                        <p>
                                            14 <br />
                                            items
                                        </p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="top-sellers-shops">
                        <div className="sellers-shops-detail">
                            <div className="shops-profile">
                                <div className="shop-img">
                                    <a href="#">
                                        <i
                                            className="fa fa-heart-o"
                                            aria-hidden="true"
                                        ></i>
                                    </a>
                                    <img src={PostOfflineIcon} alt="" />
                                </div>
                                <div className="shop-name">
                                    <h2>Profile Name</h2>
                                    <div className="social-link">
                                        <a href="#">
                                            <i
                                                className="fa fa-facebook"
                                                aria-hidden="true"
                                            ></i>
                                            /
                                        </a>
                                        <a href="#">
                                            <i
                                                className="fa fa-twitter"
                                                aria-hidden="true"
                                            ></i>
                                            /
                                        </a>
                                        <a href="#">
                                            <i
                                                className="fa fa-youtube"
                                                aria-hidden="true"
                                            ></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="shope-feed">
                                <p>IL Feedback: 21%</p>
                            </div>
                        </div>
                        <div className="sellers-shops-product">
                            <div className="shops-profile">
                                <div className="shop-img">
                                    <img src={PostOfflineIcon1} alt="" />
                                </div>
                                <div className="shop-name">
                                    <h3>Shop</h3>
                                    <h2>Rare Collections</h2>
                                </div>
                            </div>
                            <div className="shops-product">
                                <img src={ProductImg1} alt="product" />
                                <img src={ProductImg2} alt="product" />
                                <img src={ProductImg1} alt="product" />
                                <img src={ProductImg2} alt="product" />
                                <img src={ProductImg1} alt="product" />
                                <div className="more-product">
                                    <a href="#">
                                        <p>
                                            14 <br />
                                            items
                                        </p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="top-sellers-shops">
                        <div className="sellers-shops-detail">
                            <div className="shops-profile">
                                <div className="shop-img">
                                    <a href="#">
                                        <i
                                            className="fa fa-heart-o"
                                            aria-hidden="true"
                                        ></i>
                                    </a>
                                    <img src={PostOfflineIcon} alt="" />
                                </div>
                                <div className="shop-name">
                                    <h2>Profile Name</h2>
                                    <div className="social-link">
                                        <a href="#">
                                            <i
                                                className="fa fa-facebook"
                                                aria-hidden="true"
                                            ></i>
                                            /
                                        </a>
                                        <a href="#">
                                            <i
                                                className="fa fa-twitter"
                                                aria-hidden="true"
                                            ></i>
                                            /
                                        </a>
                                        <a href="#">
                                            <i
                                                className="fa fa-youtube"
                                                aria-hidden="true"
                                            ></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="shope-feed">
                                <p>IL Feedback: 21%</p>
                            </div>
                        </div>
                        <div className="sellers-shops-product">
                            <div className="shops-profile">
                                <div className="shop-img">
                                    <img src={PostOfflineIcon1} alt="" />
                                </div>
                                <div className="shop-name">
                                    <h3>Shop</h3>
                                    <h2>Rare Collections</h2>
                                </div>
                            </div>
                            <div className="shops-product">
                                <img src={ProductImg1} alt="product" />
                                <img src={ProductImg2} alt="product" />
                                <img src={ProductImg1} alt="product" />
                                <img src={ProductImg2} alt="product" />
                                <img src={ProductImg1} alt="product" />
                                <div className="more-product">
                                    <a href="#">
                                        <p>
                                            14 <br />
                                            items
                                        </p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="top-sellers-shops">
                        <div className="sellers-shops-detail">
                            <div className="shops-profile">
                                <div className="shop-img">
                                    <a href="#">
                                        <i
                                            className="fa fa-heart-o"
                                            aria-hidden="true"
                                        ></i>
                                    </a>
                                    <img src={PostOfflineIcon} alt="" />
                                </div>
                                <div className="shop-name">
                                    <h2>Profile Name</h2>
                                    <div className="social-link">
                                        <a href="#">
                                            <i
                                                className="fa fa-facebook"
                                                aria-hidden="true"
                                            ></i>
                                            /
                                        </a>
                                        <a href="#">
                                            <i
                                                className="fa fa-twitter"
                                                aria-hidden="true"
                                            ></i>
                                            /
                                        </a>
                                        <a href="#">
                                            <i
                                                className="fa fa-youtube"
                                                aria-hidden="true"
                                            ></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="shope-feed">
                                <p>IL Feedback: 21%</p>
                            </div>
                        </div>
                        <div className="sellers-shops-product">
                            <div className="shops-profile">
                                <div className="shop-img">
                                    <img src={PostOfflineIcon1} alt="" />
                                </div>
                                <div className="shop-name">
                                    <h3>Shop</h3>
                                    <h2>Rare Collections</h2>
                                </div>
                            </div>
                            <div className="shops-product">
                                <img src={ProductImg1} alt="product" />
                                <img src={ProductImg2} alt="product" />
                                <img src={ProductImg1} alt="product" />
                                <img src={ProductImg2} alt="product" />
                                <img src={ProductImg1} alt="product" />
                                <div className="more-product">
                                    <a href="#">
                                        <p>
                                            14 <br />
                                            items
                                        </p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;
