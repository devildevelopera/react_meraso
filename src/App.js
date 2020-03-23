import React from "react";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Community from "./pages/Community";
import Exclusive from "./pages/Exclusive";
import Feedback from "./pages/Feedback";
import Library from "./pages/Library";
import Media from "./pages/Media";
import Media2 from "./pages/Media2";
import MediaLibrary from "./pages/MediaLibrary";
import Message from "./pages/Message";
import Post from "./pages/Post";
import Products from "./pages/Products";
import ProductGallery from "./pages/ProductGallery";
import ProfileAlbum from "./pages/ProfileAlbum";
import Setting from "./pages/Setting";
import StyleKidBoy from "./pages/StyleKidBoy";
import TopSeller from "./pages/TopSeller";
import UploadMedia from "./pages/UploadMedia";
import UserDetails from "./pages/UserDetails";
import Account from "./pages/Account";
import Notification from "./pages/Notification";
import EmailPage from "./pages/EmailPage";
import AccountsettingPage from "./pages/LoginPage";
import PrivacyPage from "./pages/PrivacyPage";
import Navbar from "./components/Navbar";
import NavSidebar from "./components/NavSidebar";
import MesaroRegisterPage from "./pages/MesaroRegisterPage";
import MesaroLoginPage from "./pages/MesaroLoginPage";
import MesaroWelcomePage from "./pages/MesaroWelcomePage";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Import Required CSS
import "bootstrap/dist/css/bootstrap.css";
import "./require/css/style.css";
// Import Required JS
import jquery from "jquery";
window.$ = window.jQuery = jquery;
require("jquery-slimscroll");
require("jquery-nice-select");
require("bootstrap");
require("popper.js");
require("./require/js/app");

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <div className="container-fulid">
                    <div className="wrapper">
                        <NavSidebar />
                        <Switch>
                            <Route path="/home" component={Home} />
                            <Route path="/profile" component={Profile} />
                            <Route path="/community" component={Community} />
                            <Route path="/exclusive" component={Exclusive} />
                            <Route path="/feedback" component={Feedback} />
                            <Route path="/library" component={Library} />
                            <Route path="/media" component={Media} />
                            <Route path="/media2" component={Media2} />
                            <Route
                                path="/media-library"
                                component={MediaLibrary}
                            />
                            <Route path="/message" component={Message} />
                            <Route path="/post" component={Post} />
                            <Route
                                path="/product-gallery"
                                component={ProductGallery}
                            />
                            <Route path="/products" component={Products} />
                            <Route
                                path="/profile-album"
                                component={ProfileAlbum}
                            />
                            <Route path="/setting" component={Setting} />
                            <Route
                                path="/stylekid-boy"
                                component={StyleKidBoy}
                            />
                            <Route path="/top-seller" component={TopSeller} />
                            <Route
                                path="/upload-media"
                                component={UploadMedia}
                            />
                            <Route
                                path="/user-details"
                                component={UserDetails}
                            />
                            <Route path="/account" component={Account} />
                            <Route
                                path="/notification"
                                component={Notification}
                            />
                            <Route path="/email" component={EmailPage} />
                            <Route path="/accout_setting" component={AccountsettingPage} />
                            <Route path="/privacy" component={PrivacyPage} />
                        </Switch>
                    </div>
                </div>
                <Route exact path="/" component={MesaroWelcomePage} />
                <Route exact path="/register" component={MesaroRegisterPage} />
                <Route exact path="/login" component={MesaroLoginPage} />
            </BrowserRouter>
        </div>
    );
}

export default App;
