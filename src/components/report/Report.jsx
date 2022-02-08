import React from "react";

export default function Report() {
    return (
        <div className="card border-0 me-4">
            <div className="card-body"></div>
        </div>
    );
}

// import React, { useState } from "react";

// export default function Report() {
//     const [needReload, setNeedReload] = useState(false);
//     const [limit, setLimit] = useState(10);
//     const [startFrom, setStartFrom] = useState(0);
//     const [endFrom, setEndFrom] = useState(limit);
//     const [paginationNo, setPaginationNo] = useState(1);
//     const [totalRows, setTotalRows] = useState(0);

//     const handleLimitChange = (val) => {
//         setLimit(val);
//         setEndFrom(val);
//     };

//     const handlePrevPage = () => {
//         setPaginationNo(paginationNo - 1);
//         setEndFrom(startFrom);
//         setStartFrom(startFrom - limit);
//     };

//     const handleNextPage = () => {
//         setPaginationNo(paginationNo + 1);
//         setStartFrom(endFrom);
//         setEndFrom(endFrom + limit);
//     };

//     return (
//         <div className="container card">
//             <div className="card-body">
//                 <div className="row mt-2">
//                     <div className="col-md-6">
//                         <select
//                             className="form-select outlined"
//                             onChange={(e) =>
//                                 handleLimitChange(Number(e.target.value))
//                             }
//                         >
//                             <option defaultValue>Choose Highest Row...</option>
//                             {[10, 20, 30, 40, 50, 100].map((each, index) => (
//                                 <option key={index} value={each}>
//                                     {each} out of {totalRows}
//                                 </option>
//                             ))}
//                         </select>
//                     </div>
//                     <div className="col-md-6">
//                         <input
//                             type="text"
//                             className="form-control outlined"
//                             placeholder="Search By Customer Details"
//                         />
//                     </div>
//                 </div>
//             <div className="table-responsive tableFixHead">
//                 <table className="table table-hover align-middle mt-3">
//                     <thead>
//                         <tr>
//                             <th scope="col" className="text-center">Customer Name</th>
//                             <th scope="col" className="text-center">Address</th>
//                             <th scope="col" className="text-center">Contact No.</th>
//                             <th scope="col" className="text-center">Product Details</th>
//                             <th scope="col" className="text-center">Order Date</th>
//                             <th scope="col" className="text-center">Status</th>
//                             <th scope="col" className="text-center">Delivery</th>
//                             <th scope="col" className="text-center">Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>

//                     </tbody>
//                     <nav aria-label="Page navigation example">
//                         <ul className="pagination">
//                             <li className="page-item">
//                                 <button
//                                     className="page-link txtcolor"
//                                     onClick={handlePrevPage}
//                                     disabled={
//                                         paginationNo === 1
//                                             ? true
//                                             : false
//                                     }
//                                 >
//                                     Previous
//                                 </button>
//                             </li>
//                             <li className="page-item">
//                                 <button className="page-link txtcolor">
//                                     {paginationNo}
//                                 </button>
//                             </li>
//                             <li className="page-item">
//                                 <button
//                                     className="page-link txtcolor"
//                                     onClick={handleNextPage}
//                                     disabled={
//                                         totalRows / limit ===
//                                         paginationNo
//                                             ? true
//                                             : false
//                                     }
//                                 >
//                                     Next
//                                 </button>
//                             </li>
//                         </ul>
//                     </nav>
//                 </table>
//             </div>
//             </div>
//         </div>
//     );
// }
