import {Route, BrowserRouter, Routes} from "react-router-dom"
import App from './App';
import About from "./about";
import Nav from './nav';
import Oshi from './oshi';
import Comp from "./comp";
import React from "react";

function Router(){
    return (
        <BrowserRouter>
            <Nav></Nav>
            <Routes>
                <Route path="/" element={<App></App>} />
                <Route path="/about" element={<About/>} />
                <Route path="/comp" element={<Comp/>} />
                <Route path="/oshi" element={<Oshi/>} />
            </Routes>
        </BrowserRouter>
    )
}
export default Router;