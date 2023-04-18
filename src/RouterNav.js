import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Exercise from './Pages/Exercise/Exercise'
import Abs from './Components/Abs/Abs';

const RouterNav = () => {
  return (
    <div>
         <BrowserRouter>
            <Routes>
                <Route exact path ="/" Component={Home}></Route>
                <Route path ="/exercise" Component={Exercise}></Route>
                <Route path="/abs" Component={Abs}></Route>
            </Routes>
    </BrowserRouter>
    </div>
  )
}

export default RouterNav