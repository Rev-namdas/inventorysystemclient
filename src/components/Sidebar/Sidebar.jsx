import React from "react";
import { NavLink } from "react-router-dom";
import { MdAddToPhotos, MdSpaceDashboard } from 'react-icons/md'
import { TiThList } from 'react-icons/ti'
import { FaCartPlus } from 'react-icons/fa'
import { RiTeamFill } from 'react-icons/ri'
import { HiDocumentReport } from 'react-icons/hi'
import './sidebar.css'

export default function Sidebar() {
    return (
        <div className="sidebar-container">
            <div className="sidebar">
                <div className="logo-wrapper">
                    <div className="logo">Inventory System</div>
                </div>
                <div className="content-wrapper">
                    <NavLink exact="true" to="/" className="contents" activeClassName="active">
                        <div>
                            <MdSpaceDashboard className="icon" />
                            <span className="label">Dashboard</span>
                        </div>
                    </NavLink>
                    <NavLink exact="true" to="/product/new" className="contents" activeClassName="active">
                        <div>
                            <MdAddToPhotos className="icon" />
                            <span className="label">Add Product</span>
                        </div>
                    </NavLink>
                    <NavLink exact="true" to="/products" className="contents" activeClassName="active">
                        <div>
                            <TiThList className="icon" />
                            <span className="label">Products</span>
                        </div>
                    </NavLink>
                    <NavLink exact="true" to="/customer/new" className="contents" activeClassName="active">
                        <div>
                            <FaCartPlus className="icon" />
                            <span className="label">Sell</span>
                        </div>
                    </NavLink>
                    <NavLink exact="true" to="/customers" className="contents" activeClassName="active">
                        <div>
                            <RiTeamFill className="icon" />
                            <span className="label">Customers</span>
                        </div>
                    </NavLink>
                    <NavLink exact="true" to="/report" className="contents" activeClassName="active">
                        <div>
                            <HiDocumentReport className="icon" />
                            <span className="label">Report</span>
                        </div>
                    </NavLink>
                </div>
                <div className="footer-wrapper">
                    <span>Copyright &copy;Ahmed Sadman</span>
                </div>
            </div>
        </div>
    );
}
