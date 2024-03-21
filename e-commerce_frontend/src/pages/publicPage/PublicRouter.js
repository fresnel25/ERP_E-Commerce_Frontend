import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import Service from './Service';
import About from './About';
import Contact from './Contact';
import Login from '../authPage/Login';
import Register from '../authPage/Register';


const PublicRouter = () => {
    return (
        <Routes>
            <Route element={<Layout></Layout>}>
                <Route index element={<Home></Home>}></Route>
                <Route path="/home" element={<Home></Home>}></Route>
                <Route path="/service" element={<Service></Service>}></Route>
                <Route path="/about" element={<About></About>}></Route>
                <Route path="/contact" element={<Contact></Contact>}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/register" element={<Register></Register>}></Route>
            </Route>
        </Routes>
    );
};

export default PublicRouter;