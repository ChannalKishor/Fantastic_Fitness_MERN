import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Exercise from './Pages/Exercise/Exercise'

const RouterNav = () => {
  return (
    <div>
         <BrowserRouter>
            <Routes>
                <Route exact path ="/" Component={Home}></Route>
                <Route path ="/exercise" Component={Exercise}></Route>
            </Routes>
    </BrowserRouter>
    </div>
  )
}

export default RouterNav