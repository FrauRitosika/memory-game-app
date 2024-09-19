import './style.css';
import React from "react";
import ReactDOM from "react-dom/client";
import App from './components/App';
import { getQuestions } from "./data.js";
import { resultCodes } from "./resultCodes.js";

const root = ReactDOM.createRoot(document.querySelector('.root'));

root.render(
    <App
        getQuestions={getQuestions}
        resultCodes={resultCodes}
    />
);