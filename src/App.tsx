import React from 'react';
import './App.scss';


import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import {Route, Routes, Navigate} from 'react-router-dom';
import Recipe from "./pages/Recipe/Recipe";
import Login from './pages/Login/Login';
import Profile from "./pages/Profile/Profile";
import {useAppSelector} from "./hooks/reduxHooks";
import AddNewRecipe from "./pages/AddNewRecipe/AddNewRecipe";
import BrowseRecipes from "./pages/BrowseRecipes/BrowseRecipes";

const App: React.FC = () => {

    const data = useAppSelector(state => state.user.data);


    return (

        <div className="wrapper">

            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/profile" element={data ? <Profile/> : <Login/>}/>
                {/*<Route path="/profile" element={data ? <Profile/> : <Navigate replace to="/login"/>}/>*/}
                {/*<Route path="/login" element={data ? <Navigate replace to="/profile"/> : <Login/>}/>*/}
                <Route path="/recipe/:id" element={<Recipe/>}/>
                <Route path="/profile/add-new-recipe" element={<AddNewRecipe/>}/>
                <Route path="/all-recipes" element={<BrowseRecipes/>}/>
            </Routes>
            <Footer/>

        </div>
    );
}

export default App;