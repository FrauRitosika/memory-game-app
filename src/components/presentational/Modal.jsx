import React, { useEffect, useRef } from "react";
import CloseButton from "./CloseButton";
import './Modal.css';
import Title from "./Title";

export default function Modal({ title, onClick, classNameWindow, children }) {

    const modalRef = useRef();
    useEffect(() => {
        function handleClick(event) {
            if (!modalRef.current.contains(event.target)) {
                onClick();
            }
        }

        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);

    }, [onClick]);

    return (
        <div className="modal">
            <div ref={modalRef} className={`modal__data ${classNameWindow}`}>
                <CloseButton onClick={onClick} />
                <Title
                    className='modal__title'
                    level={3}
                >{title}</Title>
                {children}
            </div>
        </div>
    );
}

