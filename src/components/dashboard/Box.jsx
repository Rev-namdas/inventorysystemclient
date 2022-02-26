import React from 'react'
import "./dashboard.css"

export default function Box({ icon, quantity, label }) {
  return (
    <div className="col-md-3 box">
        <div className="box-info">
            <span className="dashboard-icon">
                {icon}
            </span>{" "}
            {quantity}
        </div>
        <div className="box-label">{label}</div>
    </div>
  )
}