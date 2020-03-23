import React from "react";

function Content() {
    return (
        <div id="content" className="mt-0">
            <div className="container">
                <div className="stylekid-detail">
                    <div className="stylekid-option">
                        <h2>Stylekid Boy</h2>
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item">
                                <a
                                    className="nav-link "
                                    id="About-tab"
                                    data-toggle="tab"
                                    href="#About"
                                    role="tab"
                                    aria-controls="About"
                                    aria-selected="true"
                                >
                                    About
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link "
                                    id="Login-tab"
                                    data-toggle="tab"
                                    href="#Login"
                                    role="tab"
                                    aria-controls="Login"
                                    aria-selected="false"
                                >
                                    Login
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link "
                                    id="Preference-tab"
                                    data-toggle="tab"
                                    href="#Preference"
                                    role="tab"
                                    aria-controls="Preference"
                                    aria-selected="false"
                                >
                                    Preference
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link active"
                                    id="Privacy-tab"
                                    data-toggle="tab"
                                    href="#Privacy"
                                    role="tab"
                                    aria-controls="Privacy"
                                    aria-selected="false"
                                >
                                    Privacy
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    id="Community-tab"
                                    data-toggle="tab"
                                    href="#Community"
                                    role="tab"
                                    aria-controls="Community"
                                    aria-selected="false"
                                >
                                    Community
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="tab-content" id="myTabContent">
                        <div
                            className="tab-pane fade "
                            id="About"
                            role="tabpanel"
                            aria-labelledby="About-tab"
                        >
                            <div className="stylekid-join">
                                <div className="joined_date">
                                    <p>Joined Sep 29, 2015</p>
                                    <h2>Description</h2>
                                </div>
                                <div className="flip_effect">
                                    <div id="side-1" className="flip flip-1">
                                        <a id="signup" href="#">
                                            <i
                                                className="fa fa-plus-circle"
                                                aria-hidden="true"
                                            ></i>
                                            Few words about you
                                        </a>
                                    </div>
                                    <div id="side-2" className="flip">
                                        <textarea
                                            name=""
                                            id=""
                                            cols="30"
                                            rows="10"
                                            placeholder="Write You Description Here...."
                                        ></textarea>
                                        <a id="create" href="#">
                                            Close
                                        </a>
                                        <a href="#" className="done">
                                            Done
                                        </a>
                                    </div>
                                </div>
                                <div className="personal-details">
                                    <h2>Personal Details</h2>
                                    <div className="flip_effect">
                                        <div
                                            id="side-3"
                                            className="flip flip-1"
                                        >
                                            <a id="signup1" href="#">
                                                <i
                                                    className="fa fa-plus-circle"
                                                    aria-hidden="true"
                                                ></i>
                                                Name
                                            </a>
                                        </div>
                                        <div id="side-4" className="flip">
                                            <input
                                                type="text"
                                                placeholder="Name"
                                            />
                                            <a id="create2" href="#">
                                                Close
                                            </a>
                                            <a href="#" className="done">
                                                Done
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="location_name">
                                    <label for="">location:</label>
                                    <select name="" id="">
                                        <option value="">Select...</option>
                                        <option value="AF">Afghanistan</option>
                                        <option value="AX">
                                            Åland Islands
                                        </option>
                                        <option value="AL">Albania</option>
                                        <option value="DZ">Algeria</option>
                                        <option value="AS">
                                            American Samoa
                                        </option>
                                        <option value="AD">Andorra</option>
                                        <option value="AO">Angola</option>
                                        <option value="AI">Anguilla</option>
                                        <option value="AQ">Antarctica</option>
                                        <option value="AG">
                                            Antigua and Barbuda
                                        </option>
                                        <option value="AR">Argentina</option>
                                        <option value="AM">Armenia</option>
                                        <option value="AW">Aruba</option>
                                        <option value="AU">Australia</option>
                                        <option value="AT">Austria</option>
                                        <option value="AZ">Azerbaijan</option>
                                        <option value="BS">Bahamas</option>
                                        <option value="BH">Bahrain</option>
                                        <option value="BD">Bangladesh</option>
                                        <option value="BB">Barbados</option>
                                        <option value="BY">Belarus</option>
                                        <option value="BE">Belgium</option>
                                        <option value="BZ">Belize</option>
                                        <option value="BJ">Benin</option>
                                        <option value="BM">Bermuda</option>
                                        <option value="BT">Bhutan</option>
                                        <option value="BO">
                                            Bolivia, Plurinational State of
                                        </option>
                                        <option value="BQ">
                                            Bonaire, Sint Eustatius and Saba
                                        </option>
                                        <option value="BA">
                                            Bosnia and Herzegovina
                                        </option>
                                        <option value="BW">Botswana</option>
                                        <option value="BV">
                                            Bouvet Island
                                        </option>
                                        <option value="BR">Brazil</option>
                                        <option value="IO">
                                            British Indian Ocean Territory
                                        </option>
                                        <option value="BN">
                                            Brunei Darussalam
                                        </option>
                                        <option value="BG">Bulgaria</option>
                                        <option value="BF">Burkina Faso</option>
                                        <option value="BI">Burundi</option>
                                        <option value="KH">Cambodia</option>
                                        <option value="CM">Cameroon</option>
                                        <option value="CA">Canada</option>
                                        <option value="CV">Cape Verde</option>
                                        <option value="KY">
                                            Cayman Islands
                                        </option>
                                        <option value="CF">
                                            Central African Republic
                                        </option>
                                        <option value="TD">Chad</option>
                                        <option value="CL">Chile</option>
                                        <option value="CN">China</option>
                                        <option value="CX">
                                            Christmas Island
                                        </option>
                                        <option value="CC">
                                            Cocos (Keeling) Islands
                                        </option>
                                        <option value="CO">Colombia</option>
                                        <option value="KM">Comoros</option>
                                        <option value="CG">Congo</option>
                                        <option value="CD">
                                            Congo, the Democratic Republic of
                                            the
                                        </option>
                                        <option value="CK">Cook Islands</option>
                                        <option value="CR">Costa Rica</option>
                                        <option value="CI">
                                            Côte d'Ivoire
                                        </option>
                                        <option value="HR">Croatia</option>
                                        <option value="CU">Cuba</option>
                                        <option value="CW">Curaçao</option>
                                        <option value="CY">Cyprus</option>
                                        <option value="CZ">
                                            Czech Republic
                                        </option>
                                        <option value="DK">Denmark</option>
                                        <option value="DJ">Djibouti</option>
                                        <option value="DM">Dominica</option>
                                        <option value="DO">
                                            Dominican Republic
                                        </option>
                                        <option value="EC">Ecuador</option>
                                        <option value="EG">Egypt</option>
                                        <option value="SV">El Salvador</option>
                                        <option value="GQ">
                                            Equatorial Guinea
                                        </option>
                                        <option value="ER">Eritrea</option>
                                        <option value="EE">Estonia</option>
                                        <option value="ET">Ethiopia</option>
                                        <option value="FK">
                                            Falkland Islands (Malvinas)
                                        </option>
                                        <option value="FO">
                                            Faroe Islands
                                        </option>
                                        <option value="FJ">Fiji</option>
                                        <option value="FI">Finland</option>
                                        <option value="FR">France</option>
                                        <option value="GF">
                                            French Guiana
                                        </option>
                                        <option value="PF">
                                            French Polynesia
                                        </option>
                                        <option value="TF">
                                            French Southern Territories
                                        </option>
                                        <option value="GA">Gabon</option>
                                        <option value="GM">Gambia</option>
                                        <option value="GE">Georgia</option>
                                        <option value="DE">Germany</option>
                                        <option value="GH">Ghana</option>
                                        <option value="GI">Gibraltar</option>
                                        <option value="GR">Greece</option>
                                        <option value="GL">Greenland</option>
                                        <option value="GD">Grenada</option>
                                        <option value="GP">Guadeloupe</option>
                                        <option value="GU">Guam</option>
                                        <option value="GT">Guatemala</option>
                                        <option value="GG">Guernsey</option>
                                        <option value="GN">Guinea</option>
                                        <option value="GW">
                                            Guinea-Bissau
                                        </option>
                                        <option value="GY">Guyana</option>
                                        <option value="HT">Haiti</option>
                                        <option value="HM">
                                            Heard Island and McDonald Islands
                                        </option>
                                        <option value="VA">
                                            Holy See (Vatican City State)
                                        </option>
                                        <option value="HN">Honduras</option>
                                        <option value="HK">Hong Kong</option>
                                        <option value="HU">Hungary</option>
                                        <option value="IS">Iceland</option>
                                        <option value="IN">India</option>
                                        <option value="ID">Indonesia</option>
                                        <option value="IR">
                                            Iran, Islamic Republic of
                                        </option>
                                        <option value="IQ">Iraq</option>
                                        <option value="IE">Ireland</option>
                                        <option value="IM">Isle of Man</option>
                                        <option value="IL">Israel</option>
                                        <option value="IT">Italy</option>
                                        <option value="JM">Jamaica</option>
                                        <option value="JP">Japan</option>
                                        <option value="JE">Jersey</option>
                                        <option value="JO">Jordan</option>
                                        <option value="KZ">Kazakhstan</option>
                                        <option value="KE">Kenya</option>
                                        <option value="KI">Kiribati</option>
                                        <option value="KP">
                                            Korea, Democratic People's Republic
                                            of
                                        </option>
                                        <option value="KR">
                                            Korea, Republic of
                                        </option>
                                        <option value="KW">Kuwait</option>
                                        <option value="KG">Kyrgyzstan</option>
                                        <option value="LA">
                                            Lao People's Democratic Republic
                                        </option>
                                        <option value="LV">Latvia</option>
                                        <option value="LB">Lebanon</option>
                                        <option value="LS">Lesotho</option>
                                        <option value="LR">Liberia</option>
                                        <option value="LY">Libya</option>
                                        <option value="LI">
                                            Liechtenstein
                                        </option>
                                        <option value="LT">Lithuania</option>
                                        <option value="LU">Luxembourg</option>
                                        <option value="MO">Macao</option>
                                        <option value="MK">
                                            Macedonia, the former Yugoslav
                                            Republic of
                                        </option>
                                        <option value="MG">Madagascar</option>
                                        <option value="MW">Malawi</option>
                                        <option value="MY">Malaysia</option>
                                        <option value="MV">Maldives</option>
                                        <option value="ML">Mali</option>
                                        <option value="MT">Malta</option>
                                        <option value="MH">
                                            Marshall Islands
                                        </option>
                                        <option value="MQ">Martinique</option>
                                        <option value="MR">Mauritania</option>
                                        <option value="MU">Mauritius</option>
                                        <option value="YT">Mayotte</option>
                                        <option value="MX">Mexico</option>
                                        <option value="FM">
                                            Micronesia, Federated States of
                                        </option>
                                        <option value="MD">
                                            Moldova, Republic of
                                        </option>
                                        <option value="MC">Monaco</option>
                                        <option value="MN">Mongolia</option>
                                        <option value="ME">Montenegro</option>
                                        <option value="MS">Montserrat</option>
                                        <option value="MA">Morocco</option>
                                        <option value="MZ">Mozambique</option>
                                        <option value="MM">Myanmar</option>
                                        <option value="NA">Namibia</option>
                                        <option value="NR">Nauru</option>
                                        <option value="NP">Nepal</option>
                                        <option value="NL">Netherlands</option>
                                        <option value="NC">
                                            New Caledonia
                                        </option>
                                        <option value="NZ">New Zealand</option>
                                        <option value="NI">Nicaragua</option>
                                        <option value="NE">Niger</option>
                                        <option value="NG">Nigeria</option>
                                        <option value="NU">Niue</option>
                                        <option value="NF">
                                            Norfolk Island
                                        </option>
                                        <option value="MP">
                                            Northern Mariana Islands
                                        </option>
                                        <option value="NO">Norway</option>
                                        <option value="OM">Oman</option>
                                        <option value="PK">Pakistan</option>
                                        <option value="PW">Palau</option>
                                        <option value="PS">
                                            Palestinian Territory, Occupied
                                        </option>
                                        <option value="PA">Panama</option>
                                        <option value="PG">
                                            Papua New Guinea
                                        </option>
                                        <option value="PY">Paraguay</option>
                                        <option value="PE">Peru</option>
                                        <option value="PH">Philippines</option>
                                        <option value="PN">Pitcairn</option>
                                        <option value="PL">Poland</option>
                                        <option value="PT">Portugal</option>
                                        <option value="PR">Puerto Rico</option>
                                        <option value="QA">Qatar</option>
                                        <option value="RE">Réunion</option>
                                        <option value="RO">Romania</option>
                                        <option value="RU">
                                            Russian Federation
                                        </option>
                                        <option value="RW">Rwanda</option>
                                        <option value="BL">
                                            Saint Barthélemy
                                        </option>
                                        <option value="SH">
                                            Saint Helena, Ascension and Tristan
                                            da Cunha
                                        </option>
                                        <option value="KN">
                                            Saint Kitts and Nevis
                                        </option>
                                        <option value="LC">Saint Lucia</option>
                                        <option value="MF">
                                            Saint Martin (French part)
                                        </option>
                                        <option value="PM">
                                            Saint Pierre and Miquelon
                                        </option>
                                        <option value="VC">
                                            Saint Vincent and the Grenadines
                                        </option>
                                        <option value="WS">Samoa</option>
                                        <option value="SM">San Marino</option>
                                        <option value="ST">
                                            Sao Tome and Principe
                                        </option>
                                        <option value="SA">Saudi Arabia</option>
                                        <option value="SN">Senegal</option>
                                        <option value="RS">Serbia</option>
                                        <option value="SC">Seychelles</option>
                                        <option value="SL">Sierra Leone</option>
                                        <option value="SG">Singapore</option>
                                        <option value="SX">
                                            Sint Maarten (Dutch part)
                                        </option>
                                        <option value="SK">Slovakia</option>
                                        <option value="SI">Slovenia</option>
                                        <option value="SB">
                                            Solomon Islands
                                        </option>
                                        <option value="SO">Somalia</option>
                                        <option value="ZA">South Africa</option>
                                        <option value="GS">
                                            South Georgia and the South Sandwich
                                            Islands
                                        </option>
                                        <option value="SS">South Sudan</option>
                                        <option value="ES">Spain</option>
                                        <option value="LK">Sri Lanka</option>
                                        <option value="SD">Sudan</option>
                                        <option value="SR">Suriname</option>
                                        <option value="SJ">
                                            Svalbard and Jan Mayen
                                        </option>
                                        <option value="SZ">Swaziland</option>
                                        <option value="SE">Sweden</option>
                                        <option value="CH">Switzerland</option>
                                        <option value="SY">
                                            Syrian Arab Republic
                                        </option>
                                        <option value="TW">
                                            Taiwan, Province of China
                                        </option>
                                        <option value="TJ">Tajikistan</option>
                                        <option value="TZ">
                                            Tanzania, United Republic of
                                        </option>
                                        <option value="TH">Thailand</option>
                                        <option value="TL">Timor-Leste</option>
                                        <option value="TG">Togo</option>
                                        <option value="TK">Tokelau</option>
                                        <option value="TO">Tonga</option>
                                        <option value="TT">
                                            Trinidad and Tobago
                                        </option>
                                        <option value="TN">Tunisia</option>
                                        <option value="TR">Turkey</option>
                                        <option value="TM">Turkmenistan</option>
                                        <option value="TC">
                                            Turks and Caicos Islands
                                        </option>
                                        <option value="TV">Tuvalu</option>
                                        <option value="UG">Uganda</option>
                                        <option value="UA">Ukraine</option>
                                        <option value="AE">
                                            United Arab Emirates
                                        </option>
                                        <option value="GB">
                                            United Kingdom
                                        </option>
                                        <option value="US">
                                            United States
                                        </option>
                                        <option value="UM">
                                            United States Minor Outlying Islands
                                        </option>
                                        <option value="UY">Uruguay</option>
                                        <option value="UZ">Uzbekistan</option>
                                        <option value="VU">Vanuatu</option>
                                        <option value="VE">
                                            Venezuela, Bolivarian Republic of
                                        </option>
                                        <option value="VN">Viet Nam</option>
                                        <option value="VG">
                                            Virgin Islands, British
                                        </option>
                                        <option value="VI">
                                            Virgin Islands, U.S.
                                        </option>
                                        <option value="WF">
                                            Wallis and Futuna
                                        </option>
                                        <option value="EH">
                                            Western Sahara
                                        </option>
                                        <option value="YE">Yemen</option>
                                        <option value="ZM">Zambia</option>
                                        <option value="ZW">Zimbabwe</option>
                                    </select>
                                </div>
                                <div className="business_inquiries">
                                    <h2>For business inquiries :</h2>
                                    <div className="flip_effect all-effect">
                                        <div
                                            id="side-5"
                                            className="flip flip-1"
                                        >
                                            <a id="signup2" href="#">
                                                <i
                                                    className="fa fa-plus-circle"
                                                    aria-hidden="true"
                                                ></i>
                                                Email
                                            </a>
                                        </div>
                                        <div
                                            id="side-7"
                                            className="flip flip-1"
                                        >
                                            <a id="signup3" href="#">
                                                <i
                                                    className="fa fa-plus-circle"
                                                    aria-hidden="true"
                                                ></i>
                                                Contact Number
                                            </a>
                                        </div>
                                        <div
                                            id="side-9"
                                            className="flip flip-1"
                                        >
                                            <a id="signup4" href="#">
                                                <i
                                                    className="fa fa-plus-circle"
                                                    aria-hidden="true"
                                                ></i>
                                                Business Name
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="flip_effect">
                                    <div id="side-6" className="flip file-100">
                                        <input
                                            type="text"
                                            placeholder="Email"
                                        />
                                        <a id="create3" href="#">
                                            Close
                                        </a>
                                        <a href="#" className="done">
                                            Done
                                        </a>
                                    </div>
                                    <div id="side-8" className="flip file-100">
                                        <div className="phone_style">
                                            <input
                                                id="phone"
                                                name="phone"
                                                type="tel"
                                            />
                                        </div>
                                        <a id="create4" href="#">
                                            Close
                                        </a>
                                        <a href="#" className="done">
                                            Done
                                        </a>
                                    </div>
                                    <div id="side-10" className="flip file-100">
                                        <input
                                            type="text"
                                            placeholder="Business Name"
                                        />
                                        <a id="create5" href="#">
                                            Close
                                        </a>
                                        <a href="#" className="done">
                                            Done
                                        </a>
                                    </div>
                                </div>
                                <div className="add_links">
                                    <h2>Links</h2>
                                    <div className="flip_effect">
                                        <div id="side-11" className="flip ">
                                            <a id="signup5" href="#">
                                                <i
                                                    className="fa fa-plus-circle"
                                                    aria-hidden="true"
                                                ></i>
                                                Link
                                            </a>
                                        </div>
                                        <div
                                            id="side-12"
                                            className="flip flip-detail"
                                        >
                                            <div className="links_add">
                                                <div className="plus_link">
                                                    <i
                                                        className="fa fa-plus-circle"
                                                        aria-hidden="true"
                                                    ></i>
                                                </div>
                                                <div className="link_input">
                                                    <input type="link" />
                                                </div>
                                            </div>
                                            <a id="create6" href="#">
                                                Close
                                            </a>
                                            <a href="#" className="done">
                                                Done
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="tab-pane fade "
                            id="Login"
                            role="tabpanel"
                            aria-labelledby="Login-tab"
                        >
                            <div className="login_account">
                                <div className="account_title">
                                    <h2>Login Information</h2>
                                </div>
                                <div className="account_form">
                                    <form>
                                        <div className="form-group">
                                            <label for="exampleInputEmail1">
                                                Account Email
                                            </label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="exampleInputEmail1"
                                            />
                                        </div>
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">
                                                    <i
                                                        className="fa fa-info-circle"
                                                        aria-hidden="true"
                                                    ></i>
                                                </div>
                                            </div>
                                            <input
                                                type="text"
                                                className="form-control border-left-0"
                                                id="inlineFormInputGroup"
                                                placeholder="Leave password fields blank for no change"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label for="exampleInputPassword1">
                                                Add Your New Password
                                            </label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="exampleInputPassword1"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label for="exampleInputPassword2">
                                                Repeat Your New Paawoord
                                            </label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="exampleInputPassword2"
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                        >
                                            Save Changes
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div
                            className="tab-pane fade"
                            id="Preference"
                            role="tabpanel"
                            aria-labelledby="Preference-tab"
                        >
                            <div className="Preference_detail">
                                <form action="#">
                                    <div className="privacy-right email">
                                        <div className="email-title">
                                            <h3 className="mb-25">
                                                Email Preferences
                                            </h3>
                                            <p className="mb-25 pb-2">
                                                Choose your email notification
                                                preferences.
                                            </p>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 ">
                                                <div className="email-checkbox">
                                                    <div className="table-responsive">
                                                        <table className="table table-sm borderless">
                                                            <thead>
                                                                <tr>
                                                                    <th scope="col">
                                                                        <h6 className="text-uppercase">
                                                                            Messages
                                                                        </h6>
                                                                    </th>
                                                                    <td></td>
                                                                    <th
                                                                        className="text-right"
                                                                        scope="col"
                                                                    >
                                                                        <div className="w-80 table-secon">
                                                                            <span className="text-uppercase pr-30">
                                                                                Yes
                                                                            </span>
                                                                            <span className="email-no text-uppercase">
                                                                                No
                                                                            </span>
                                                                        </div>
                                                                    </th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <div>
                                                                            <h6>
                                                                                A
                                                                                member
                                                                                sends
                                                                                you
                                                                                a
                                                                                new
                                                                                mesaage
                                                                            </h6>
                                                                        </div>
                                                                    </td>
                                                                    <td></td>
                                                                    <td className="text-right">
                                                                        <div className="w-80 table-secon">
                                                                            <div className="custom-control custom-radio custom-control-inline pr-4">
                                                                                <input
                                                                                    type="radio"
                                                                                    id="one-third"
                                                                                    name="one-third"
                                                                                    className="custom-control-input"
                                                                                />
                                                                                <label
                                                                                    className="custom-control-label"
                                                                                    for="one-third"
                                                                                ></label>
                                                                            </div>
                                                                            <div className="custom-control custom-radio custom-control-inline">
                                                                                <input
                                                                                    type="radio"
                                                                                    id="three"
                                                                                    name="one-third"
                                                                                    className="custom-control-input"
                                                                                />
                                                                                <label
                                                                                    className="custom-control-label"
                                                                                    for="three"
                                                                                ></label>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <hr />
                                                    <div className="table-responsive">
                                                        <table className="table table-sm borderless">
                                                            <thead>
                                                                <tr>
                                                                    <th scope="col">
                                                                        <h6 className="text-uppercase">
                                                                            Messages
                                                                        </h6>
                                                                    </th>
                                                                    <td></td>
                                                                    <th
                                                                        className="text-right"
                                                                        scope="col"
                                                                    >
                                                                        <div className="w-80 table-secon">
                                                                            <span className="text-uppercase pr-30">
                                                                                Yes
                                                                            </span>
                                                                            <span className="email-no text-uppercase">
                                                                                No
                                                                            </span>
                                                                        </div>
                                                                    </th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <div>
                                                                            <h6>
                                                                                A
                                                                                member
                                                                                sends
                                                                                you
                                                                                a
                                                                                new
                                                                                mesaage
                                                                            </h6>
                                                                        </div>
                                                                    </td>
                                                                    <td></td>
                                                                    <td className="text-right">
                                                                        <div className="w-80 table-secon">
                                                                            <div className="custom-control custom-radio custom-control-inline pr-4">
                                                                                <input
                                                                                    type="radio"
                                                                                    id="one-thirds"
                                                                                    name="one-thirds"
                                                                                    className="custom-control-input"
                                                                                />
                                                                                <label
                                                                                    className="custom-control-label"
                                                                                    for="one-thirds"
                                                                                ></label>
                                                                            </div>
                                                                            <div className="custom-control custom-radio custom-control-inline">
                                                                                <input
                                                                                    type="radio"
                                                                                    id="thre"
                                                                                    name="one-third"
                                                                                    className="custom-control-input"
                                                                                />
                                                                                <label
                                                                                    className="custom-control-label"
                                                                                    for="thre"
                                                                                ></label>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    {/* <!-- Singel table  --> */}
                                                    <hr />
                                                    <div className="table-responsive">
                                                        <table className="table table-sm borderless">
                                                            <thead>
                                                                <tr>
                                                                    <th scope="col">
                                                                        <h6 className="text-uppercase">
                                                                            Social
                                                                            Groups
                                                                        </h6>
                                                                    </th>
                                                                    <td></td>
                                                                    <th
                                                                        className="text-right"
                                                                        scope="col"
                                                                    >
                                                                        <div className="w-80 table-secon">
                                                                            <span className="text-uppercase pr-30">
                                                                                Yes
                                                                            </span>
                                                                            <span className="email-no text-uppercase">
                                                                                No
                                                                            </span>
                                                                        </div>
                                                                    </th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <div>
                                                                            <h6>
                                                                                A
                                                                                member
                                                                                invites
                                                                                you
                                                                                to
                                                                                join
                                                                                a
                                                                                group
                                                                            </h6>
                                                                        </div>
                                                                    </td>
                                                                    <td></td>
                                                                    <td className="text-right">
                                                                        <div className="w-80 table-secon">
                                                                            <div className="custom-control custom-radio custom-control-inline pr-4">
                                                                                <input
                                                                                    type="radio"
                                                                                    id="socialOne"
                                                                                    name="socialOne"
                                                                                    className="custom-control-input"
                                                                                />
                                                                                <label
                                                                                    className="custom-control-label"
                                                                                    for="socialOne"
                                                                                ></label>
                                                                            </div>
                                                                            <div className="custom-control custom-radio custom-control-inline">
                                                                                <input
                                                                                    type="radio"
                                                                                    id="socia"
                                                                                    name="socialOne"
                                                                                    className="custom-control-input"
                                                                                />
                                                                                <label
                                                                                    className="custom-control-label"
                                                                                    for="socia"
                                                                                ></label>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div>
                                                                            <h6>
                                                                                Group
                                                                                information
                                                                                is
                                                                                updated
                                                                            </h6>
                                                                        </div>
                                                                    </td>
                                                                    <td></td>
                                                                    <td className="text-right">
                                                                        <div className="w-80 table-secon">
                                                                            <div className="custom-control custom-radio custom-control-inline pr-4">
                                                                                <input
                                                                                    type="radio"
                                                                                    id="socialTwo"
                                                                                    name="socialTwo"
                                                                                    className="custom-control-input"
                                                                                />
                                                                                <label
                                                                                    className="custom-control-label"
                                                                                    for="socialTwo"
                                                                                ></label>
                                                                            </div>
                                                                            <div className="custom-control custom-radio custom-control-inline">
                                                                                <input
                                                                                    type="radio"
                                                                                    id="socia-One"
                                                                                    name="socialTwo"
                                                                                    className="custom-control-input"
                                                                                />
                                                                                <label
                                                                                    className="custom-control-label"
                                                                                    for="socia-One"
                                                                                ></label>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div>
                                                                            <h6>
                                                                                You
                                                                                are
                                                                                promoted
                                                                                to
                                                                                a
                                                                                group
                                                                            </h6>
                                                                        </div>
                                                                    </td>
                                                                    <td></td>
                                                                    <td className="text-right">
                                                                        <div className="w-80 table-secon">
                                                                            <div className="custom-control custom-radio custom-control-inline pr-4">
                                                                                <input
                                                                                    type="radio"
                                                                                    id="social-Seve"
                                                                                    name="social-Seve"
                                                                                    className="custom-control-input"
                                                                                />
                                                                                <label
                                                                                    className="custom-control-label"
                                                                                    for="social-Seve"
                                                                                ></label>
                                                                            </div>
                                                                            <div className="custom-control custom-radio custom-control-inline">
                                                                                <input
                                                                                    type="radio"
                                                                                    id="socia-seven"
                                                                                    name="social-Seve"
                                                                                    className="custom-control-input"
                                                                                />
                                                                                <label
                                                                                    className="custom-control-label"
                                                                                    for="socia-seven"
                                                                                ></label>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div>
                                                                            <h6>
                                                                                A
                                                                                member
                                                                                requests
                                                                                to
                                                                                join
                                                                                a
                                                                                private
                                                                                gr
                                                                            </h6>
                                                                        </div>
                                                                    </td>
                                                                    <td></td>
                                                                    <td className="text-right">
                                                                        <div className="w-80 table-secon">
                                                                            <div className="custom-control custom-radio custom-control-inline pr-4">
                                                                                <input
                                                                                    type="radio"
                                                                                    id="sociaSix"
                                                                                    name="sociaSix"
                                                                                    className="custom-control-input"
                                                                                />
                                                                                <label
                                                                                    className="custom-control-label"
                                                                                    for="sociaSix"
                                                                                ></label>
                                                                            </div>
                                                                            <div className="custom-control custom-radio custom-control-inline">
                                                                                <input
                                                                                    type="radio"
                                                                                    id="soci-Six"
                                                                                    name="sociaSix"
                                                                                    className="custom-control-input"
                                                                                />
                                                                                <label
                                                                                    className="custom-control-label"
                                                                                    for="soci-Six"
                                                                                ></label>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div>
                                                                            <h6>
                                                                                Your
                                                                                request
                                                                                to
                                                                                join
                                                                                a
                                                                                group
                                                                                has
                                                                                been
                                                                            </h6>
                                                                        </div>
                                                                    </td>
                                                                    <td></td>
                                                                    <td className="text-right">
                                                                        <div className="w-80 table-secon">
                                                                            <div className="custom-control custom-radio custom-control-inline pr-4">
                                                                                <input
                                                                                    type="radio"
                                                                                    id="socialFour"
                                                                                    name="socialFour"
                                                                                    className="custom-control-input"
                                                                                />
                                                                                <label
                                                                                    className="custom-control-label"
                                                                                    for="socialFour"
                                                                                ></label>
                                                                            </div>
                                                                            <div className="custom-control custom-radio custom-control-inline">
                                                                                <input
                                                                                    type="radio"
                                                                                    id="socia-Five"
                                                                                    name="socialFour"
                                                                                    className="custom-control-input"
                                                                                />
                                                                                <label
                                                                                    className="custom-control-label"
                                                                                    for="socia-Five"
                                                                                ></label>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    {/* <!-- Singel table  -->
                                            <!-- Social Group Stat --> */}
                                                    <hr />
                                                    <div className="table-responsive">
                                                        <table className="table table-sm borderless">
                                                            <thead>
                                                                <tr>
                                                                    <th scope="col">
                                                                        <h6 className="text-uppercase">
                                                                            Connection
                                                                        </h6>
                                                                    </th>

                                                                    <th
                                                                        className="text-right"
                                                                        scope="col"
                                                                    >
                                                                        <div className="w-80 table-secon">
                                                                            <span className="text-uppercase pr-30">
                                                                                Yes
                                                                            </span>
                                                                            <span className="email-no text-uppercase">
                                                                                No
                                                                            </span>
                                                                        </div>
                                                                    </th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <th scope="row">
                                                                        <h6>
                                                                            A
                                                                            member
                                                                            invites
                                                                            you
                                                                            to
                                                                            connect
                                                                        </h6>
                                                                    </th>
                                                                    <td className="text-right">
                                                                        <div className="w-80 table-secon">
                                                                            <div className="custom-control custom-radio custom-control-inline pr-4">
                                                                                <input
                                                                                    type="radio"
                                                                                    id="conn-third"
                                                                                    name="conn-third"
                                                                                    className="custom-control-input"
                                                                                />
                                                                                <label
                                                                                    className="custom-control-label"
                                                                                    for="conn-third"
                                                                                ></label>
                                                                            </div>
                                                                            <div className="custom-control custom-radio custom-control-inline">
                                                                                <input
                                                                                    type="radio"
                                                                                    id="conn-3"
                                                                                    name="conn-third"
                                                                                    className="custom-control-input"
                                                                                />
                                                                                <label
                                                                                    className="custom-control-label"
                                                                                    for="conn-3"
                                                                                ></label>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">
                                                                        <h6>
                                                                            A
                                                                            member
                                                                            accepts
                                                                            your
                                                                            connection
                                                                            reque
                                                                        </h6>
                                                                    </th>
                                                                    <td className="text-right">
                                                                        <div className="w-80 table-secon">
                                                                            <div className="custom-control custom-radio custom-control-inline pr-4">
                                                                                <input
                                                                                    type="radio"
                                                                                    id="connOne"
                                                                                    name="connOne"
                                                                                    className="custom-control-input"
                                                                                />
                                                                                <label
                                                                                    className="custom-control-label"
                                                                                    for="connOne"
                                                                                ></label>
                                                                            </div>
                                                                            <div className="custom-control custom-radio custom-control-inline">
                                                                                <input
                                                                                    type="radio"
                                                                                    id="connTwo"
                                                                                    name="connOne"
                                                                                    className="custom-control-input"
                                                                                />
                                                                                <label
                                                                                    className="custom-control-label"
                                                                                    for="connTwo"
                                                                                ></label>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    {/* <!-- Singel table  --> */}
                                                    <div className="submite-btn">
                                                        <button
                                                            type="submit"
                                                            className="btn btn-primary mt-20"
                                                        >
                                                            Save Changes
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div
                            className="tab-pane fade show active"
                            id="Privacy"
                            role="tabpanel"
                            aria-labelledby="Privacy-tab"
                        >
                            <div className="privacy_detail">
                                <div className="privacy-title">
                                    <h2 className="mb-25">
                                        Profile Visibility Settings
                                    </h2>
                                    <p className="mb-20">
                                        Select who may see your profile details.
                                    </p>
                                </div>
                                <div className="row">
                                    <div className="col-12 ">
                                        <div className="table-responsive">
                                            <div className=" general-info d-flex login-border">
                                                <table className="table table-striped">
                                                    <thead>
                                                        <tr>
                                                            <th className="col">
                                                                <h5>
                                                                    General
                                                                    Information
                                                                </h5>
                                                            </th>
                                                            <th className="col">
                                                                <h4>
                                                                    Visibillity
                                                                </h4>
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td className="col">
                                                                First Name
                                                            </td>
                                                            <td className="col">
                                                                <p>Public</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="col">
                                                                Last Name
                                                            </td>
                                                            <td className="col">
                                                                <select className="select">
                                                                    <option>
                                                                        Public
                                                                    </option>
                                                                    <option>
                                                                        Public 2
                                                                    </option>
                                                                    <option>
                                                                        Public 3
                                                                    </option>
                                                                    <option>
                                                                        Public 4
                                                                    </option>
                                                                    <option>
                                                                        Public 5
                                                                    </option>
                                                                </select>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="col">
                                                                Nickname
                                                            </td>
                                                            <td className="col">
                                                                <select className="select">
                                                                    <option>
                                                                        Public
                                                                    </option>
                                                                    <option>
                                                                        Public 2
                                                                    </option>
                                                                    <option>
                                                                        Public 3
                                                                    </option>
                                                                    <option>
                                                                        Public 4
                                                                    </option>
                                                                    <option>
                                                                        Public 5
                                                                    </option>
                                                                </select>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="col">
                                                                Birth Date
                                                            </td>
                                                            <td className="col">
                                                                <select className="select">
                                                                    <option>
                                                                        Public
                                                                    </option>
                                                                    <option>
                                                                        Public 2
                                                                    </option>
                                                                    <option>
                                                                        Public 3
                                                                    </option>
                                                                    <option>
                                                                        Public 4
                                                                    </option>
                                                                    <option>
                                                                        Public 5
                                                                    </option>
                                                                </select>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="col">
                                                                Gender
                                                            </td>
                                                            <td className="col">
                                                                <select className="select">
                                                                    <option>
                                                                        Public
                                                                    </option>
                                                                    <option>
                                                                        Public 2
                                                                    </option>
                                                                    <option>
                                                                        Public 3
                                                                    </option>
                                                                    <option>
                                                                        Public 4
                                                                    </option>
                                                                    <option>
                                                                        Public 5
                                                                    </option>
                                                                </select>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="col">
                                                                Phone
                                                            </td>
                                                            <td className="col">
                                                                <select className="select">
                                                                    <option>
                                                                        Public
                                                                    </option>
                                                                    <option>
                                                                        Public 2
                                                                    </option>
                                                                    <option>
                                                                        Public 3
                                                                    </option>
                                                                    <option>
                                                                        Public 4
                                                                    </option>
                                                                    <option>
                                                                        Public 5
                                                                    </option>
                                                                </select>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="mt-20">
                                            <div className=" general-info d-flex login-border">
                                                <table className="table table-striped">
                                                    <thead>
                                                        <tr>
                                                            <th>
                                                                <h5>Social</h5>
                                                            </th>
                                                            <th>
                                                                <h4>
                                                                    Visibillity
                                                                </h4>
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                Social Links
                                                            </td>
                                                            <td>
                                                                <p>Public</p>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="table-responsive mt-20">
                                            <div className=" general-info d-flex login-border">
                                                <table className="table table-striped">
                                                    <thead>
                                                        <tr>
                                                            <th className="col">
                                                                <h5>
                                                                    Biography
                                                                </h5>
                                                            </th>
                                                            <th className="col">
                                                                <h4>
                                                                    Visibillity
                                                                </h4>
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td className="col">
                                                                Last Name
                                                            </td>
                                                            <td className="col">
                                                                <select className="select">
                                                                    <option>
                                                                        Public
                                                                    </option>
                                                                    <option>
                                                                        Public 2
                                                                    </option>
                                                                    <option>
                                                                        Public 3
                                                                    </option>
                                                                    <option>
                                                                        Public 4
                                                                    </option>
                                                                    <option>
                                                                        Public 5
                                                                    </option>
                                                                </select>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="tab-pane fade"
                            id="Community"
                            role="tabpanel"
                            aria-labelledby="Community-tab"
                        >
                            Community
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;
