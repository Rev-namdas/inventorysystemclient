import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShowCustomers from "./components/customers/ShowCustomers";
import Dashboard from "./components/dashboard/Dashboard";
import AddProduct from "./components/products/AddProduct";
import Sidebar from "./components/Sidebar/Sidebar";
import styled from "styled-components";
import AddCustomer from "./components/customers/AddCustomer";
import ShowProducts from "./components/products/ShowProducts";
import Header from "./components/header/Header";
import NotFound from "./components/404/NotFound";
import Report from "./components/report/Report";
import "./index.css"

const FlexBox = styled.div`
    display: flex;
`

export default function App() {
    return (
        <FlexBox>
            <Router>
                <Sidebar />
                <Header />
                <div className="main-content">
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/product/new" element={<AddProduct />} />
                        <Route path="/products" element={<ShowProducts />} />
                        <Route path="/customer/new" element={<AddCustomer />} />
                        <Route path="/customers" element={<ShowCustomers />} />
                        <Route path="/report" element={<Report />} />
                        <Route path="/:404" element={<NotFound />} />
                    </Routes>
                </div>
            </Router>
        </FlexBox>
    );
}
