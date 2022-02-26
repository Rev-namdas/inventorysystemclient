import React, { useEffect, useState } from "react";
import "./dashboard.css";
import * as api from "../../api/apiCalls";
import {
    MdLocalGroceryStore,
    MdProductionQuantityLimits
} from "react-icons/md";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { BsPeopleFill } from "react-icons/bs";
import Box from "./Box";

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

    const box_contents = [
        {
            icon: <MdLocalGroceryStore />,
            quantity: totalProducts,
            label: "Total Products"
        },
        {
            icon: <RiShoppingBag3Fill />,
            quantity: soldProducts,
            label: "Sold Products"
        },
        {
            icon: <MdProductionQuantityLimits />,
            quantity: outOfStock,
            label: "Out Of Stock"
        },
        {
            icon: <BsPeopleFill />,
            quantity: totalCustomers,
            label: "Satisfied Customers"
        }
    ]

    return (
        <div className="dashboard-container">
            <div className="card card-wrapper border-0">
                <div className="card-body">
                    <div className="row align-center">
                        {/* 4 Boxes */}
                        {box_contents.map(each => (
                            <Box 
                                icon={each.icon} 
                                quantity={each.quantity} 
                                label={each.label} 
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
