import React from 'react';
import './Button.css'

export default function Button({name, action, className, isDisabled=false, onClick}) {

    return (
        <button
            className={`button ${className}`}
            type='button'
            data-result={action}
            disabled={isDisabled}
            onClick={onClick}
        >
            <span className='button__name'>{name}</span>
        </button>
    );
}


