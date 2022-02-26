import React, { useEffect, useState } from "react";
import * as api from "../../api/apiCalls";
import EachProduct from "./EachProduct";
import LoadingSpinner from '../Loader/LoadingSpinner'
import "./products.css";
// import { v4 as uuid } from "uuid";

export default function ShowProducts() {
    // const prd = [
    //     {
    //         _id: uuid(),
    //         product_name: uuid(),
    //         product_price: uuid(),
    //         product_quantity: uuid(),
    //     },
    //     {
    //         _id: uuid(),
    //         product_name: uuid(),
    //         product_price: uuid(),
    //         product_quantity: uuid(),
    //     },
    //     {
    //         _id: uuid(),
    //         product_name: uuid(),
    //         product_price: uuid(),
    //         product_quantity: uuid(),
    //     },
    //     {
    //         _id: uuid(),
    //         product_name: uuid(),
    //         product_price: uuid(),
    //         product_quantity: uuid(),
    //     },
    //     {
    //         _id: uuid(),
    //         product_name: uuid(),
    //         product_price: uuid(),
    //         product_quantity: uuid(),
    //     },
    //     {
    //         _id: uuid(),
    //         product_name: uuid(),
    //         product_price: uuid(),
    //         product_quantity: uuid(),
    //     },
    //     {
    //         _id: uuid(),
    //         product_name: uuid(),
    //         product_price: uuid(),
    //         product_quantity: uuid(),
    //     },
    //     {
    //         _id: uuid(),
    //         product_name: uuid(),
    //         product_price: uuid(),
    //         product_quantity: uuid(),
    //     },
    //     {
    //         _id: uuid(),
    //         product_name: uuid(),
    //         product_price: uuid(),
    //         product_quantity: uuid(),
    //     },
    //     {
    //         _id: uuid(),
    //         product_name: uuid(),
    //         product_price: uuid(),
    //         product_quantity: uuid(),
    //     },
    //     {
    //         _id: uuid(),
    //         product_name: uuid(),
    //         product_price: uuid(),
    //         product_quantity: uuid(),
    //     },
    //     {
    //         _id: uuid(),
    //         product_name: uuid(),
    //         product_price: uuid(),
    //         product_quantity: uuid(),
    //     },
    //     {
    //         _id: uuid(),
    //         product_name: uuid(),
    //         product_price: uuid(),
    //         product_quantity: uuid(),
    //     },
    //     {
    //         _id: uuid(),
    //         product_name: uuid(),
    //         product_price: uuid(),
    //         product_quantity: uuid(),
    //     },
    //     {
    //         _id: uuid(),
    //         product_name: uuid(),
    //         product_price: uuid(),
    //         product_quantity: uuid(),
    //     },
    //     {
    //         _id: uuid(),
    //         product_name: uuid(),
    //         product_price: uuid(),
    //         product_quantity: uuid(),
    //     },
    //     {
    //         _id: uuid(),
    //         product_name: uuid(),
    //         product_price: uuid(),
    //         product_quantity: uuid(),
    //     },
    //     {
    //         _id: uuid(),
    //         product_name: uuid(),
    //         product_price: uuid(),
    //         product_quantity: uuid(),
    //     },
    //     {
    //         _id: uuid(),
    //         product_name: uuid(),
    //         product_price: uuid(),
    //         product_quantity: uuid(),
    //     },
    //     {
    //         _id: uuid(),
    //         product_name: uuid(),
    //         product_price: uuid(),
    //         product_quantity: uuid(),
    //     },
    //     {
    //         _id: uuid(),
    //         product_name: uuid(),
    //         product_price: uuid(),
    //         product_quantity: uuid(),
    //     },
    //     {
    //         _id: uuid(),
    //         product_name: uuid(),
    //         product_price: uuid(),
    //         product_quantity: uuid(),
    //     },
    //     {
    //         _id: uuid(),
    //         product_name: uuid(),
    //         product_price: uuid(),
    //         product_quantity: uuid(),
    //     },
    //     {
    //         _id: uuid(),
    //         product_name: uuid(),
    //         product_price: uuid(),
    //         product_quantity: uuid(),
    //     },
    //     {
    //         _id: uuid(),
    //         product_name: uuid(),
    //         product_price: uuid(),
    //         product_quantity: uuid(),
    //     },
    //     {
    //         _id: uuid(),
    //         product_name: uuid(),
    //         product_price: uuid(),
    //         product_quantity: uuid(),
    //     },
    //     {
    //         _id: uuid(),
    //         product_name: uuid(),
    //         product_price: uuid(),
    //         product_quantity: uuid(),
    //     },
    //     {
    //         _id: uuid(),
    //         product_name: uuid(),
    //         product_price: uuid(),
    //         product_quantity: uuid(),
    //     },
    //     {
    //         _id: uuid(),
    //         product_name: uuid(),
    //         product_price: uuid(),
    //         product_quantity: uuid(),
    //     },
    //     {
    //         _id: uuid(),
    //         product_name: uuid(),
    //         product_price: uuid(),
    //         product_quantity: uuid(),
    //     },
    //     {
    //         _id: uuid(),
    //         product_name: uuid(),
    //         product_price: uuid(),
    //         product_quantity: uuid(),
    //     },
    //     {
    //         _id: uuid(),
    //         product_name: uuid(),
    //         product_price: uuid(),
    //         product_quantity: uuid(),
    //     },
    //     {
    //         _id: uuid(),
    //         product_name: uuid(),
    //         product_price: uuid(),
    //         product_quantity: uuid(),
    //     },
    //     {
    //         _id: uuid(),
    //         product_name: uuid(),
    //         product_price: uuid(),
    //         product_quantity: uuid(),
    //     },
    //     {
    //         _id: uuid(),
    //         product_name: uuid(),
    //         product_price: uuid(),
    //         product_quantity: uuid(),
    //     },
    //     {
    //         _id: uuid(),
    //         product_name: uuid(),
    //         product_price: uuid(),
    //         product_quantity: uuid(),
    //     },
    //     {
    //         _id: uuid(),
    //         product_name: uuid(),
    //         product_price: uuid(),
    //         product_quantity: uuid(),
    //     },
    //     {
    //         _id: uuid(),
    //         product_name: uuid(),
    //         product_price: uuid(),
    //         product_quantity: uuid(),
    //     },
    //     {
    //         _id: uuid(),
    //         product_name: uuid(),
    //         product_price: uuid(),
    //         product_quantity: uuid(),
    //     },
    //     {
    //         _id: uuid(),
    //         product_name: uuid(),
    //         product_price: uuid(),
    //         product_quantity: uuid(),
    //     },
    //     {
    //         _id: uuid(),
    //         product_name: uuid(),
    //         product_price: uuid(),
    //         product_quantity: uuid(),
    //     },
    //     {
    //         _id: uuid(),
    //         product_name: uuid(),
    //         product_price: uuid(),
    //         product_quantity: uuid(),
    //     },
    //     {
    //         _id: uuid(),
    //         product_name: uuid(),
    //         product_price: uuid(),
    //         product_quantity: uuid(),
    //     },
    //     {
    //         _id: uuid(),
    //         product_name: uuid(),
    //         product_price: uuid(),
    //         product_quantity: uuid(),
    //     },
    //     {
    //         _id: uuid(),
    //         product_name: uuid(),
    //         product_price: uuid(),
    //         product_quantity: uuid(),
    //     },
    //     {
    //         _id: uuid(),
    //         product_name: uuid(),
    //         product_price: uuid(),
    //         product_quantity: uuid(),
    //     },
    //     {
    //         _id: uuid(),
    //         product_name: uuid(),
    //         product_price: uuid(),
    //         product_quantity: uuid(),
    //     },
    //     {
    //         _id: uuid(),
    //         product_name: uuid(),
    //         product_price: uuid(),
    //         product_quantity: uuid(),
    //     },
    //     {
    //         _id: uuid(),
    //         product_name: uuid(),
    //         product_price: uuid(),
    //         product_quantity: uuid(),
    //     },
    //     {
    //         _id: uuid(),
    //         product_name: uuid(),
    //         product_price: uuid(),
    //         product_quantity: uuid(),
    //     },
    //     {
    //         _id: uuid(),
    //         product_name: uuid(),
    //         product_price: uuid(),
    //         product_quantity: uuid(),
    //     },
    //     {
    //         _id: uuid(),
    //         product_name: uuid(),
    //         product_price: uuid(),
    //         product_quantity: uuid(),
    //     },
    //     {
    //         _id: uuid(),
    //         product_name: uuid(),
    //         product_price: uuid(),
    //         product_quantity: uuid(),
    //     },
    //     {
    //         _id: uuid(),
    //         product_name: uuid(),
    //         product_price: uuid(),
    //         product_quantity: uuid(),
    //     },
    // ];
    const [products, setProducts] = useState("");
    const [searchedProducts, setSearchedProducts] = useState("");
    const [needReload, setNeedReload] = useState(false);
    const [limit, setLimit] = useState(10);
    const [startFrom, setStartFrom] = useState(0);
    const [endFrom, setEndFrom] = useState(limit);
    const [paginationNo, setPaginationNo] = useState(1);
    const [totalRows, setTotalRows] = useState(0);

    const fetchProducts = async () => {
        const res = await api.fetchProducts();
        setProducts(res.data);

        setTotalRows(res.data.length);
    };

    useEffect(
        () => {
            fetchProducts();
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
        <div className="card custom-margin border-0">
            <div className="card-body m-2"> 
                {products ? (
                    <React.Fragment>
                        <div className="row mt-2">
                            <div className="col-md-6 col-sm-2">
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
                            <div className="col-md-6 col-sm-10">
                                <input 
                                    type="text" 
                                    className="form-control outlined" 
                                    placeholder="Search Product"
                                    value={searchedProducts} 
                                    onChange={(e) => setSearchedProducts(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="table-responsive tableFixHead">
                            <table className="table table-hover align-middle mt-3">
                                <thead>
                                    <tr>
                                        {
                                            ['Name', 'Price', 'Stocked', 
                                            'Available', 'Sold', 'Action', 'Delete'
                                            ].map(each => (
                                                <th scope="col" className="text-center">{each}</th>
                                            ))
                                        }
                                    </tr>
                                </thead>
                                <tbody>
                                    {products
                                        .filter(product => product.product_name.toLowerCase().includes(searchedProducts.toLowerCase()))
                                        .sort((a,b) => (a.product_name > b.product_name) ? 1 : ((b.product_name > a.product_name) ? -1 : 0))
                                        .slice(startFrom, endFrom)
                                        .map((eachproduct, index) => (
                                            <EachProduct
                                                key={index}
                                                index={index}
                                                needReload={needReload}
                                                eachproduct={eachproduct}
                                                setNeedReload={setNeedReload}
                                            />
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
                    </div>
                )}
            </div>
        </div>
    );
}
