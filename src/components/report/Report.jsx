import React, { useEffect, useState } from "react";
import * as api from "../../api/apiCalls";
import LoadingSpinner from "../Loader/LoadingSpinner";
import EachRow from "./EachRow";

export default function Report() {
    const report_options = ['Product Wise', 'User Wise']
    const [reportSelection, setReportSelection] = useState("")
    const [productSelection, setProductSelection] = useState()
    const [products, setProducts] = useState()
    const [productDetails, setProductDetails] = useState([])
    const [customerSelection, setCustomerSelection] = useState()
    const [customers, setCustomers] = useState()
    const [customerDetails, setCustomerDetails] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    //eslint-disable-next-line
    const [limit, setLimit] = useState(10);
    const [startFrom, setStartFrom] = useState(0);
    const [endFrom, setEndFrom] = useState(limit);
    const [paginationNo, setPaginationNo] = useState(1);
    const [totalRows, setTotalRows] = useState(0);


    const fetchCustomers = async () => {
        setIsLoading(true)
        const res = await api.fetchCustomerNames();
        setCustomers(res.data);
        setIsLoading(false)
    };

    const fetchProducts = async () => {
        setIsLoading(true)
        const res = await api.fetchProducts();
        setProducts(res.data);
        setIsLoading(false)
    };

    useEffect(
        () => {
            fetchProducts();
            fetchCustomers();
        },
        //eslint-disable-next-line
        []
    );

    const handlePrevPage = () => {
        setPaginationNo(paginationNo - 1);
        setEndFrom(startFrom);
        setStartFrom(startFrom - limit);
    };

    const handleNextPage = () => {
        setPaginationNo(paginationNo + 1);
        setStartFrom(endFrom);
        setEndFrom(endFrom + limit);
    };

    const handleProductSearch = async (e) => {
        e.preventDefault();

        const details = {
            product: productSelection
        }

        setIsLoading(true)
        const res = await api.productWiseSearch(details)
        setProductDetails(res.data)
        setProductSelection("")
        setIsLoading(false)
        setTotalRows(res.data.length)
    }

    const handleUserSearch = async (e) => {
        e.preventDefault();

        const details = {
            customername: customerSelection
        }

        setIsLoading(true)
        const res = await api.userWiseSearch(details)
        setCustomerDetails(res.data)
        setCustomerSelection("")
        setIsLoading(false)
        setTotalRows(res.data.length)
    }

    return (
        <React.Fragment>
            {
                isLoading
                ?
                (
                    <div className="center">
                        <LoadingSpinner />
                    </div>
                )
                :
                (
                    <div className="card border-0 me-4">
                        <div className="card-body">
                            <div className="row mt-2">
                                <div className="col-md-5">
                                    <select 
                                        className="form-select outlined"
                                        onChange={(e) => setReportSelection(e.target.value)}
                                    >
                                        <option defaultValue value="">Select Report Type...</option>
                                        {report_options.map((each, index) => (
                                            <option key={index} value={each}>
                                                {each}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="col-md-5">
                                    {
                                        reportSelection === ""
                                        ?
                                            <select 
                                                className="form-select outlined" disabled
                                            >
                                            </select>
                                        :
                                        (reportSelection === "Product Wise"
                                        ?
                                        (
                                            <select 
                                                className="form-select outlined"
                                                onChange={(e) => setProductSelection(e.target.value)}
                                            >
                                                <option defaultValue>Select Product...</option>
                                                {products && 
                                                products
                                                    .sort((a,b) => (a.product_name > b.product_name) ? 1 : (a.product_name < b.product_name ? -1 : 0))
                                                    .map((each, index) => (
                                                        <option key={index} value={each.product_name}>
                                                            {each.product_name}
                                                        </option>
                                                    ))
                                                }
                                            </select>
                                        )
                                        :
                                        (
                                            <select 
                                                className="form-select outlined"
                                                onChange={(e) => setCustomerSelection(e.target.value)}
                                            >
                                                <option defaultValue>Select User...</option>
                                                {customers && 
                                                customers
                                                    .sort((a,b) => (a > b) ? 1 : (a < b ? -1 : 0))
                                                    .map((eachCustomer, index) => (
                                                        <option key={index} value={eachCustomer}>
                                                            {eachCustomer}
                                                        </option>
                                                    ))
                                                }
                                            </select>
                                        ))
                                    }
                                </div>
                                <div className="col-md-2">
                                    {
                                        reportSelection === ""
                                        ?
                                        <button className="btn btn-success form-control" disabled>Search</button>
                                        :
                                        reportSelection === "Product Wise"
                                        ?
                                        <button className="btn btn-success form-control" onClick={handleProductSearch}>Search</button>
                                        :
                                        <button className="btn btn-success form-control" onClick={handleUserSearch}>Search</button>
                                    }
                                </div>
                            </div>
                            <div>
                                {
                                    reportSelection === ""
                                    ?
                                    <span></span>
                                    :
                                    (
                                        <div className="table-responsive tableFixHead">
                                            <table className="table table-hover align-middle mt-3">
                                                <thead>
                                                    <tr>
                                                        <th scope="col" className="text-center align-middle col-md-3">Customer Name</th>
                                                        <th scope="col" className="text-center align-middle col-md-3">Address</th>
                                                        <th scope="col" className="text-center align-middle col-md-2">Contact No.</th>
                                                        <th scope="col" className="text-center align-middle col-md-3">Product Details</th>
                                                        <th scope="col" className="text-center align-middle col-md-1">Order Date</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        reportSelection === ""
                                                        ?
                                                        <span></span>
                                                        :
                                                        reportSelection === "Product Wise"
                                                        ?
                                                            (productDetails.length === 0
                                                            ?
                                                            (
                                                                <EachRow
                                                                    key={0}
                                                                    each={{
                                                                        customer_name: "No Data Found",
                                                                        customer_address: "",
                                                                        customer_number: "",
                                                                        products: { product_name: "" },
                                                                        order_date: "",
                                                                    }}
                                                                />
                                                            )
                                                            :
                                                            (
                                                                productDetails
                                                                .slice(startFrom, endFrom)
                                                                .map((each, index) => (
                                                                    <EachRow
                                                                        key={index}
                                                                        each={each}
                                                                    />
                                                                ))
                                                            ))
                                                        :
                                                            (customerDetails.length === 0
                                                            ?
                                                            (
                                                                <EachRow
                                                                    key={0}
                                                                    each={{
                                                                        customer_name: "No Data Found",
                                                                        customer_address: "",
                                                                        customer_number: "",
                                                                        products: {
                                                                            product_name: "",
                                                                            product_price: "",
                                                                            order_quantity: ""
                                                                        },
                                                                        order_date: "",
                                                                    }}
                                                                />
                                                            )
                                                            :
                                                            (
                                                                customerDetails
                                                                .slice(startFrom, endFrom)
                                                                .map((each, index) => (
                                                                    <EachRow
                                                                        key={index}
                                                                        each={each}
                                                                    />
                                                                ))
                                                            ))
                                                    }
                                                </tbody>
                                                <nav aria-label="Page navigation example">
                                                    <ul className="pagination">
                                                        <li className="page-item">
                                                            <button
                                                                className="page-link txtcolor"
                                                                onClick={handlePrevPage}
                                                                disabled={
                                                                    paginationNo === 1
                                                                        ? true
                                                                        : false
                                                                }
                                                            >
                                                                Previous
                                                            </button>
                                                        </li>
                                                        <li className="page-item">
                                                            <button className="page-link txtcolor">
                                                                {paginationNo}
                                                            </button>
                                                        </li>
                                                        <li className="page-item">
                                                            <button
                                                                className="page-link txtcolor"
                                                                onClick={handleNextPage}
                                                                disabled={
                                                                    (totalRows < 10) ? 10 : totalRows / limit ===
                                                                    paginationNo
                                                                        ? true
                                                                        : false
                                                                }
                                                            >
                                                                Next
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </nav>
                                            </table>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                )
            }
        </React.Fragment>
    );
}
