import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import {Navigate, Routes} from "react-router";
import HomePage from "../pages/HomePage";
import Navbar from "../components/Navbar/Navbar";
import ParserPage from "../pages/ParserPage";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/parser" element={<ParserPage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;