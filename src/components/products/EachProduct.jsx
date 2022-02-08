import React, { useState } from "react";
import * as api from "../../api/apiCalls";
// import "./products.css";

export default function EachProduct({
    eachproduct,
    index,
    needReload,
    setNeedReload,
}) {
    const [editable, setEditable] = useState(false);
    const [updateQty, setUpdateQty] = useState(eachproduct.product_quantity);
    const availableQty = eachproduct.product_quantity - eachproduct.order_quantity

    const handleQuantity = async (pid) => {
        const data = {
            id: pid,
            qty: updateQty,
        };

        await api.updateProduct(data);
        setEditable(false);
        setNeedReload(!needReload);
    };

    const handleDelete = async (pid) => {
        await api.deleteProduct(pid);
        setNeedReload(!needReload);
    };

    return (
        <React.Fragment>
            {editable ? (
                <tr key={index}>
                    <th scope="row">{eachproduct.product_name}</th>
                    <td className="text-center">{eachproduct.product_price}</td>
                    <td style={{display: 'flex', justifyContent: 'center'}}>
                        <div>
                            <input
                                type="text"
                                style={{ width: '80px' }}
                                className="text-center form-control"
                                value={updateQty}
                                onChange={(e) => setUpdateQty(e.target.value)}
                            />
                        </div>
                    </td>
                    <td className="text-center">{availableQty}</td>
                    <td className="text-center">{eachproduct.order_quantity}</td>
                    <td>
                        <div className="text-center">
                            <button
                                className="btn btn-outline-success"
                                onClick={() => handleQuantity(eachproduct._id)}
                            >
                                Update Qty
                            </button>
                        </div>
                    </td>
                    <td>
                        <div className="text-center">
                            <button
                                onClick={() => setEditable(false)}
                                className="btn btn-outline-primary"
                            >
                                Cancel
                            </button>
                        </div>
                    </td>
                </tr>
            ) : (
                <tr key={index}>
                    <th scope="row">{eachproduct.product_name}</th>
                    <td className="text-center">{eachproduct.product_price}</td>
                    <td className="text-center">{eachproduct.product_quantity}</td>
                    <td className="text-center">{availableQty}</td>
                    <td className="text-center">{eachproduct.order_quantity}</td>
                    <td>
                        <div className="text-center">
                            <button
                                onClick={() => setEditable(true)}
                                className="btn btn-outline-primary"
                            >
                                Edit Qty
                            </button>
                        </div>
                    </td>
                    <td>
                        <div className="text-center">
                            <button
                                onClick={() => handleDelete(eachproduct._id)}
                                className="btn btn-outline-danger"
                            >
                                Delete
                            </button>
                        </div>
                    </td>
                </tr>
            )}
        </React.Fragment>
    );
}
