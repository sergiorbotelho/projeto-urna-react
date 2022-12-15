import React from "react";
import './button.css'
export default function Button({children, onClick}) {
    return (
        <div className="area-btn" onClick={onClick}>
            <div className="text-btn">{children}</div>
        </div>)
}