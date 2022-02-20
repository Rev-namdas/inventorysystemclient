import React from "react";

export default function EachRow({ each }) {
    return (
        <tr>
            <th scope="row">{each.customer_name}</th>
            <td>{each.customer_address}</td>
            <td className="text-center">{each.customer_number}</td>
            {
              each.products.product_name === ""
              ?
              (
                <td className="text-center">
                    {each.products.product_name}
                </td>
              )
              :
              (
                <td className="text-center">
                    {each.products.product_name} ({each.products.order_quantity}) -
                    Tk.{each.products.product_price * each.products.order_quantity}
                </td>
              )
            }
            <td className="text-center">{each.order_date}</td>
        </tr>
    );
}
