import React, { useEffect, useState } from "react";
import * as api from "../../api/apiCalls";
import EachCustomer from "./EachCustomer";
import './customer.css'
import LoadingSpinner from "../Loader/LoadingSpinner";

export default function ShowCustomers() {
    const [customers, setCustomers] = useState("");
    const [searchedCustomers, setSearchedCustomers] = useState("");
    const [needReload, setNeedReload] = useState(false);
    const [limit, setLimit] = useState(10);
    const [startFrom, setStartFrom] = useState(0);
    const [endFrom, setEndFrom] = useState(limit);
    const [paginationNo, setPaginationNo] = useState(1);
    const [totalRows, setTotalRows] = useState(0);
    // const dateRef = useRef();

    const grabCustomers = async () => {
        const res = await api.fetchCustomers();

        setCustomers(res.data);
        setTotalRows(res.data.length)
    };

    useEffect(
        () => {
            grabCustomers();
        },
        //eslint-disable-next-line
        [needReload]
    );

    const handleLimitChange = (val) => {
        setLimit(val);
        setEndFrom(val);
    };

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

    return (
        <div className="card border-0">
            <div className="card-body m-2">
                {customers ? (
                    <React.Fragment>
                        <div className="row mt-2">
                            <div className="col-md-6">
                                <select
                                    className="form-select outlined"
                                    onChange={(e) =>
                                        handleLimitChange(Number(e.target.value))
                                    }
                                >
                                    <option defaultValue>Choose Highest Row...</option>
                                    {[10, 20, 30, 40, 50, 100].map((each, index) => (
                                        <option key={index} value={each}>
                                            {each} out of {totalRows}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="col-md-6">
                                <input 
                                    type="text" 
                                    className="form-control outlined" 
                                    placeholder="Search By Customer Details"
                                    value={searchedCustomers} 
                                    onChange={(e) => setSearchedCustomers(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="table-responsive tableFixHead">
                            <table className="table table-hover align-middle mt-3">
                                <thead>
                                    <tr>
                                        <th scope="col" className="text-center">Customer Name</th>
                                        <th scope="col" className="text-center">Address</th>
                                        <th scope="col" className="text-center">Contact No.</th>
                                        <th scope="col" className="text-center">Product Details</th>
                                        <th scope="col" className="text-center">Order Date</th>
                                        <th scope="col" className="text-center">Status</th>
                                        <th scope="col" className="text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {customers
                                        .sort((a,b) => (a.order_date < b.order_date) ? 1 : ((b.order_date < a.order_date) ? -1 : 0))
                                        .filter(customer => (
                                            customer.customer_name.toLowerCase().includes(searchedCustomers.toLowerCase()) ||
                                            customer.customer_address.toLowerCase().includes(searchedCustomers.toLowerCase()) ||
                                            customer.customer_number.toLowerCase().includes(searchedCustomers.toLowerCase()) ||
                                            (customer.delivery_status ? 'Delivered' : 'Pending').toLowerCase().includes(searchedCustomers.toLowerCase()) ||
                                            customer.order_date.toLowerCase().includes(searchedCustomers.toLowerCase())
                                        ))
                                        .slice(startFrom, endFrom)
                                        .map((eachcustomer, index) => (
                                            <EachCustomer
                                                key={index}
                                                each={eachcustomer}
                                                needReload={needReload}
                                                setNeedReload={setNeedReload}
                                            />
                                        ))}
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
                                                    totalRows / limit ===
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
                    </React.Fragment>
                ) : (
                    <div className="center">
                        <LoadingSpinner />
                        {/* <input
                            type="date"
                            defaultValue={new Date().toISOString().split("T")[0]}
                            ref={dateRef}
                        /> */}
                    </div>
                )}
            </div>
        </div>
    );
}
