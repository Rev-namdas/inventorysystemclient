import React, { useEffect, useState } from "react";
import "./dashboard.css";
import * as api from "../../api/apiCalls";
import {
    MdLocalGroceryStore,
    MdProductionQuantityLimits
} from "react-icons/md";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { BsPeopleFill } from "react-icons/bs";

export default function Dashboard() {
    const [totalProducts, setTotalProducts] = useState(0);
    const [soldProducts, setSoldProducts] = useState(0);
    const [outOfStock, setOutOfStock] = useState(0);
    const [totalCustomers, setTotalCustomers] = useState(0);

    const dashboardInfo = async () => {
        const products = await api.fetchProducts();
        setTotalProducts(products.data.length);

        const soldAmount = products.data.filter(
            (each) => each.order_quantity !== 0
        ).length;
        setSoldProducts(soldAmount);

        const stockout = products.data.filter(
            (each) => each.product_quantity - each.order_quantity < 0
        ).length;
        setOutOfStock(stockout);

        const customers = await api.fetchCustomers();
        const customersAmount = customers.data.filter((each) => each).length;
        setTotalCustomers(customersAmount);
    };

    useEffect(
        () => {
            dashboardInfo();
        },
        //eslint-disable-next-line
        []
    );

    return (
        <div>
            <div className="card card-wrapper border-0">
                <div className="card-body">
                    <div className="row align-center">
                        <div className="col-md-3 box">
                            <div className="box-info">
                                <span className="dashboard-icon">
                                    <MdLocalGroceryStore />
                                </span>{" "}
                                {totalProducts}
                            </div>
                            <div className="box-label">Total Products</div>
                        </div>
                        <div className="col-md-3 box">
                            <div className="box-info">
                                <span className="dashboard-icon">
                                    <RiShoppingBag3Fill />
                                </span>{" "}
                                {soldProducts}
                            </div>
                            <div className="box-label">Sold Products</div>
                        </div>
                        <div className="col-md-3 box">
                            <div className="box-info">
                                <span className="dashboard-icon">
                                    <MdProductionQuantityLimits />
                                </span>{" "}
                                {outOfStock}
                            </div>
                            <div className="box-label">Out Of Stock</div>
                        </div>
                        <div className="col-md-3 box">
                            <div className="box-info">
                                <span className="dashboard-icon">
                                    <BsPeopleFill />
                                </span>{" "}
                                {totalCustomers}
                            </div>
                            <div className="box-label">Satisfied Customers</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
