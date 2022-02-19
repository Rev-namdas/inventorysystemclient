import React, { useEffect, useState } from "react";
import * as api from "../../api/apiCalls";
import Error from '../Error/Error'
import { v4 as uuid } from "uuid";
import { todayDate } from "../common/todayDate"
import "./customer.css"

export default function AddCustomer() {
    const [products, setProducts] = useState("");
    const [customerName, setCustomerName] = useState("");
    const [customerNumber, setCustomerNumber] = useState("");
    const [customerAddress, setCustomerAddress] = useState("");
    const initialState = {
        pid: uuid(),
        _id: "",
        product_name: "",
        product_price: "",
        order_quantity: "",
    };
    const [selectedProduct, setSelectedProduct] = useState([initialState]);
    const [error, setError] = useState({ status: false, message: "" })

    const fetchProducts = async () => {
        const res = await api.fetchProducts();
        setProducts(res.data);
        
        // const res = [{
        //     product_name: "Pen",
        //     product_price: "10",
        //     product_quantity: "5",
        // }]
        // setProducts(res);
    };

    useEffect(
        () => {
            fetchProducts();
        },
        //eslint-disable-next-line
        []
    );

    const handleSelectedProduct = (val, index, id) => {
        if (val === "") {
            const updateProducts = selectedProduct.filter(
                (each) => each.pid !== id
            );
            setSelectedProduct(updateProducts);
            return;
        }

        const state = [...selectedProduct]
        state[index].product_name = val;
        const chosenproduct = products.filter((each) => each.product_name === val)[0];
        state[index].product_price = chosenproduct.product_price;
        state[index]._id = chosenproduct._id;
        
        setSelectedProduct(state);
    };

    const handleNewProduct = (e) => {
        e.preventDefault();

        setSelectedProduct([...selectedProduct, initialState]);
    };

    const handleQuantity = (val, index) => {
        const newstate = [...selectedProduct]
        newstate[index].order_quantity = val;
        setSelectedProduct(newstate)
    }

    const handleDelete = (e, id) => {
        e.preventDefault();

        const updateProducts = selectedProduct.filter(
            (each) => each.pid !== id
        );
        setSelectedProduct(updateProducts);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        
        let canProceed = true;
        let passingState = {
            name: customerName,
            address: customerAddress,
            contact: customerNumber,
            products: selectedProduct,
            orderdate: todayDate()
        };
        
        const contact_number_format = /^[0-9]{11}$/;
        if(customerNumber.match(contact_number_format))
        {
            canProceed = true;
        } else {
            alert("Invalid Contact No. Format (Ex: 01717171717)")
            canProceed = false;
        }

        for (let i = 0; i < selectedProduct.length; i++) {
            if (
                selectedProduct[i].product_name === "" ||
                selectedProduct[i].order_quantity === "" ||
                customerName === "" ||
                customerAddress === "" ||
                customerNumber === ""
            ) {
                canProceed = false;
                setError({ status: true, message: "All fields are required" })
                break;
            }
        }

        if (canProceed) {
            const res = await api.addCustomer(passingState)

            setError({ status: true, message: res.data.message })
            setCustomerName("")
            setCustomerAddress("")
            setCustomerNumber("")
            setSelectedProduct([initialState])
        }
    };

    return (
        <div className="container card border-0">
            <div className="card-body">
                <form>
                    <div className="row">
                        <div className="col-md-6">
                            <label htmlFor="name" className="form-label">
                                Name<span className="required">*</span>
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                value={customerName}
                                onChange={(e) =>
                                    setCustomerName(e.target.value)
                                }
                            />
                        </div>
                        <div className="mb-2 col-md-6">
                            <label htmlFor="number" className="form-label">
                                Contact No.<span className="required">*</span>
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="number"
                                value={customerNumber}
                                onChange={(e) =>
                                    setCustomerNumber(e.target.value)
                                }
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 mb-3">
                            <label htmlFor="address" className="form-label">
                                Address<span className="required">*</span>
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="address"
                                value={customerAddress}
                                onChange={(e) =>
                                    setCustomerAddress(e.target.value)
                                }
                            />
                        </div>
                    </div>
                    {selectedProduct.map((each, index) => (
                        <div className="row" key={index}>
                            <div className="col-md-5">
                                <label htmlFor="product" className="form-label">
                                    Product<span className="required">*</span>
                                </label>
                                <select
                                    id="product"
                                    className="form-select"
                                    aria-label="Default select example"
                                    value={selectedProduct[index].product_name}
                                    onChange={(e) =>
                                        handleSelectedProduct(e.target.value, index, each.pid)
                                    }
                                >
                                    <option defaultValue value={""}>
                                        Select Product
                                    </option>
                                    {products &&
                                        products
                                            .sort((a,b) => (a.product_name > b.product_name) ? 1 : ((b.product_name > a.product_name) ? -1 : 0))
                                            .map((each, i) => (
                                                <option
                                                    key={i}
                                                    value={each.product_name}
                                                >
                                                    {each.product_name}
                                                </option>
                                            ))
                                    }
                                </select>
                            </div>
                            <div className="col-md-3">
                                <label htmlFor="price" className="form-label">
                                    Product Price
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="price"
                                    disabled
                                    value={selectedProduct[index].product_price === "" ? "" : selectedProduct[index].product_price + " Taka"}
                                />
                            </div>
                            <div className="col-md-2">
                                <label htmlFor="qty" className="form-label">
                                    Order Quantity<span className="required">*</span>
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="qty"
                                    value={selectedProduct[index].order_quantity}
                                    onChange={(e) =>
                                        handleQuantity(e.target.value, index)
                                    }
                                />
                            </div>
                            <div className="col-md-2 mb-3">
                                <label htmlFor="address" className="form-label">
                                    Delete Row
                                </label>
                                <button
                                    type="button"
                                    className="btn btn-danger form-control"
                                    onClick={(e) => handleDelete(e, each.pid)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                    <button
                        type="button"
                        className="btn btn-success me-3 mb-3"
                        onClick={handleNewProduct}
                    >
                        Add Product
                    </button>
                    <button
                        type="submit"
                        className="btn btn-primary me-3 mb-3"
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                </form>
                {error.status && <Error message={error.message} />}
            </div>
        </div>
    );
}