import React from "react";
import './ToGameLink.css';

export default function ToGameLink({className}) {
    return (
        <a href="#game" className={`link-to-start ${className}`}>
            Играть
        </a>
    );
}