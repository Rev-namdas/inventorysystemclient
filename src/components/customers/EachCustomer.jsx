import React from "react";
import * as api from "../../api/apiCalls";
import { BsCartCheckFill, BsFillCartXFill } from 'react-icons/bs'

export default function EachCustomer({ each, needReload, setNeedReload }) {
    const handleDelete = async (id, products) => {
        await api.deleteCustomer(id);
        await api.updateStock(products);
        setNeedReload(!needReload);
    };
    
    const handleDeliveryStatusChange = async (id, val) => {
        const details = {
            id: id,
            delivery_status: val
        }
        await api.updateDeliveryStatus(details)
        setNeedReload(!needReload);
    }

    return (
        <tr>
            <th scope="row">{each.customer_name}</th>
            <td>{each.customer_address}</td>
            <td className="text-center">{each.customer_number}</td>
            <td className="text-center">
                {each.products.map((eachProduct, index) => (
                    <div key={index}>
                        <span>
                            {eachProduct.product_name}(
                            {eachProduct.order_quantity}) - Tk.
                            {eachProduct.product_price *
                                eachProduct.order_quantity}
                        </span>
                    </div>
                ))}
            </td>
            <td className="text-center">{each.order_date}</td>
            <td>
                <div className="text-center">
                    <button
                        onClick={() => handleDeliveryStatusChange(each._id, !each.delivery_status)}
                        className={`${each.delivery_status ? 'btn btn-outline-success' : 'btn btn-outline-danger'}`}
                    >
                        {each.delivery_status
                            ? <span><BsCartCheckFill className="deliver-icon" /> Delivered</span>
                            : <span><BsFillCartXFill className="deliver-icon" /> Pending</span>
                        }
                    </button>
                </div>
            </td>
            <td>
                <div className="text-center">
                    <button
                        onClick={() => handleDelete(each._id, each.products)}
                        className="btn btn-outline-primary"
                    >
                        Delete
                    </button>
                </div>
            </td>
        </tr>
    );
}
