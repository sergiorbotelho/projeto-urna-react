import React from "react";
import './input.css';
import { FaUser } from 'react-icons/fa'
export default function Input(props) {
    return (
        <div className="areaGeral">
            <input
                {...props}

            />
        </div>
    )
}