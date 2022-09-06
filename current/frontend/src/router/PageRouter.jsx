import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import Registration from "../pages/Registration";
import Authorization from "../pages/Authorization";
import Documentation from "../pages/Documentation";
import Parser from "../pages/Parser";
import Data from "../pages/Data";
import Profile from "../pages/Profile";

const PageRouter = () => {
    const isLogin = false;
    return (
        <div>
            {isLogin
                ?
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/parser" element={<Parser />} />
                    <Route path="/documentation" element={<Documentation />} />
                    <Route path="/data" element={<Data />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="*" element={<Navigate to="/documentation" replace />} />
                </Routes>
                :
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/registration" element={<Registration />} />
                    <Route path="/authorization" element={<Authorization />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            }
        </div>
    );
};

export default PageRouter;