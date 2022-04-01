import React from 'react';
import './App.module.scss';


import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import {Route, Routes} from 'react-router-dom';
import Recipe from "./pages/Recipe/Recipe";

const App: React.FC = () => {
    return (

        <div className="wrapper">

            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/recipe/:id" element={<Recipe/>}/>
            </Routes>
            <Footer/>

        </div>
    );
}

export default App;