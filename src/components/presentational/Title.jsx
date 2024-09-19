import React from 'react';
import './Title.css';

export default function Title({ contentName, level, className='', children }) {

    let Heading = 'h1';
    let newClass = 'title';

    if (Number.isInteger(level) && level > 0) {
        Heading = `h${Number(level)}`;
        newClass = `${newClass} title--level-${Number(level)}`;
    }

    className = `${className} ${newClass}`;

    return (
        <Heading className={className} id={contentName}>{children}</Heading>
    );
}