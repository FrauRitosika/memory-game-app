import React from "react";
import Button from "./Button";
import './ButtonBar.css'

export default function ButtonsBar({ buttonsList, isDisabled=false, onClick}) {
    return (
        <ul className="set-result">
            {buttonsList.map((el) => (
                <li key={el.code}>
                    <Button
                        name={el.actionName}
                        action={el.code}
                        isDisabled={isDisabled}
                        onClick={() => onClick(el.code)}
                    />
                </li>
            ))}
        </ul>
    );
}