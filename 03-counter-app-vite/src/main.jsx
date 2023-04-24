import React from 'react';
import ReactDOM  from 'react-dom/client';

import HelloWorldApp from './WenaCabrosApp'
import { FirstApp } from './FirstApp';
import CounterApp from './CounterApp';

import "./style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        {/* <FirstApp subtitle="El final se acerca"></FirstApp> */}
        <CounterApp value={3}></CounterApp>
    </React.StrictMode>
);