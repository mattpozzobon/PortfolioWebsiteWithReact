import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import './index.css';
import Projects from './pages/Projects';
import { ToastContainer } from 'react-toastify';
import { DataProvider } from './provider/DataProvider';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(

    <React.StrictMode>
        <DataProvider>
            <ToastContainer />
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="projects" element={<Projects />} />
                </Routes>
            </BrowserRouter>
        </DataProvider>
    </React.StrictMode>,
);
