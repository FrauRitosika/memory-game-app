import React from "react";
import './Link.css';

export default function Link({path, text}) {
    return (
        <a className='link' href={path}>
            {!!text && text}
        </a>
    );
}