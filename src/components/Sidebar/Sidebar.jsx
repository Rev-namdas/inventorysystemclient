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
        <div className="sidebar">
            <div className="logo-wrapper">
                <div className="logo">Inventory System</div>
            </div>
            <div className="content">
                <NavLink exact="true" to="/" className="text-decoration" activeClassName="active">
                    <div>
                        <MdSpaceDashboard className="icon" />
                        <span>Dashboard</span>
                    </div>
                </NavLink>
                <NavLink exact="true" to="/product/new" className="text-decoration" activeClassName="active">
                    <div>
                        <MdAddToPhotos className="icon" />
                        <span>Add Product</span>
                    </div>
                </NavLink>
                <NavLink exact="true" to="/products" className="text-decoration" activeClassName="active">
                    <div>
                        <TiThList className="icon" />
                        <span>Products</span>
                    </div>
                </NavLink>
                <NavLink exact="true" to="/customer/new" className="text-decoration" activeClassName="active">
                    <div>
                        <FaCartPlus className="icon" />
                        <span>Sell</span>
                    </div>
                </NavLink>
                <NavLink exact="true" to="/customers" className="text-decoration" activeClassName="active">
                    <div>
                        <RiTeamFill className="icon" />
                        <span>Customers</span>
                    </div>
                </NavLink>
                <NavLink exact="true" to="/report" className="text-decoration" activeClassName="active">
                    <div>
                        <HiDocumentReport className="icon" />
                        <span>Report</span>
                    </div>
                </NavLink>
            </div>
            <div className="footer">
                <span>Copyright &copy;Ahmed Sadman</span>
            </div>
        </div>
    );
}