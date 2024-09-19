import React from "react";
import './CloseButton.css';

export default function CloseButton({onClick}) {

    return (
        <button
            className='close-button'
            type="button"
            onClick={onClick}
        >
        </button>
    );
}