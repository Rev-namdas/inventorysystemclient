import React from 'react'

export default function EachRow({ each }) {
  return (
    <tr>
        <th scope="row">{each.customer_name}</th>
        <td>{each.customer_address}</td>
        <td className="text-center">{each.customer_number}</td>
        <td className="text-center">{each.products.product_name}</td>
        <td className="text-center">{each.order_date}</td>
    </tr>
  )
}
