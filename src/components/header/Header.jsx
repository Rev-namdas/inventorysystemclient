import React from "react";
import { NavLink } from "react-router-dom";
import { MdAddToPhotos, MdSpaceDashboard } from 'react-icons/md'
import { TiThList } from 'react-icons/ti'
import { FaCartPlus } from 'react-icons/fa'
import { RiTeamFill } from 'react-icons/ri'
import { HiDocumentReport } from 'react-icons/hi'
import "./header.css";

export default function Header(props) {
    return (
        <React.Fragment>
            <div className="navbar">
                <div className="navbar-content">
                    <span>Hello User</span>
                    <div className="navigation">
                        <div className="dropdown">
                            <button
                                className="btn btn-light dropdown-toggle"
                                type="button"
                                id="dropdownMenuButton1"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Navigation
                            </button>
                            <ul
                                class="dropdown-menu"
                                aria-labelledby="dropdownMenuButton1"
                            >
                                <li>
                                    <NavLink
                                        exact="true"
                                        to="/"
                                        className="text-decoration"
                                        activeClassName="active"
                                    >
                                        <div>
                                            <MdSpaceDashboard className="icon" />
                                            <span>Dashboard</span>
                                        </div>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        exact="true"
                                        to="/product/new"
                                        className="text-decoration"
                                        activeClassName="active"
                                    >
                                        <div>
                                            <MdAddToPhotos className="icon" />
                                            <span>Add Product</span>
                                        </div>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        exact="true"
                                        to="/products"
                                        className="text-decoration"
                                        activeClassName="active"
                                    >
                                        <div>
                                            <TiThList className="icon" />
                                            <span>Products</span>
                                        </div>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        exact="true"
                                        to="/customer/new"
                                        className="text-decoration"
                                        activeClassName="active"
                                    >
                                        <div>
                                            <FaCartPlus className="icon" />
                                            <span>Sell</span>
                                        </div>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        exact="true"
                                        to="/customers"
                                        className="text-decoration"
                                        activeClassName="active"
                                    >
                                        <div>
                                            <RiTeamFill className="icon" />
                                            <span>Customers</span>
                                        </div>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        exact="true"
                                        to="/report"
                                        className="text-decoration"
                                        activeClassName="active"
                                    >
                                        <div>
                                            <HiDocumentReport className="icon" />
                                            <span>Report</span>
                                        </div>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <span>User Profile</span>
                </div>
            </div>
            {props.children}
        </React.Fragment>
    );
}
