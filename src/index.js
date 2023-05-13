import { createRoot } from 'react-dom/client';
import React from "react";
import Home from "./pages/Home";
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <React.StrictMode>
        <Home />
    </React.StrictMode>,
);
