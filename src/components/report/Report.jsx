import React, { useEffect, useState } from "react";
import * as api from "../../api/apiCalls";
import EachRow from "./EachRow";

export default function Report() {
    const report_options = ['Product Wise', 'User Wise']
    const [reportSelection, setReportSelection] = useState()
    const [productSelection, setProductSelection] = useState()
    const [products, setProducts] = useState()
    const [productDetails, setProductDetails] = useState([])

    const fetchProducts = async () => {
        const res = await api.fetchProducts();
        setProducts(res.data);
    };

    useEffect(
        () => {
            fetchProducts();
        },
        //eslint-disable-next-line
        []
    );

    const handleSubmit = async (e) => {
        e.preventDefault();

        const details = {
            product: productSelection
        }

        const res = await api.productWiseSearch(details)
        setProductDetails(res.data)
        setProductSelection("")
    }

    return (
        <div className="card border-0 me-4">
            <div className="card-body">
                <div className="row mt-2">
                    <div className="col-md-5">
                        <select 
                            className="form-select outlined"
                            onChange={(e) => setReportSelection(e.target.value)}
                        >
                            <option defaultValue>Select Report Type...</option>
                            {report_options.map((each, index) => (
                                <option key={index} value={each}>
                                    {each}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="col-md-5">
                        <select 
                            className="form-select outlined"
                            onChange={(e) => setProductSelection(e.target.value)}
                        >
                            <option defaultValue>Select Product...</option>
                            {products && products.map((each, index) => (
                                <option key={index} value={each.product_name}>
                                    {each.product_name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="col-md-2">
                        <button className="btn btn-success form-control" onClick={handleSubmit}>Search</button>
                    </div>
                </div>
                <div>
                    {reportSelection === "Product Wise" && (
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
                                    {productDetails.map((each, index) => (
                                        <EachRow
                                            key={index}
                                            each={each}
                                        />
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                    {reportSelection === "User Wise" && (
                        <div>User Wise</div>
                    )}
                </div>
            </div>
        </div>
    );
}
