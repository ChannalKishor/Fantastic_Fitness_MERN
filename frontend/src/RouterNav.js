import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Exercise from './Pages/Exercise/Exercise'
import Abs from './Components/Abs/Abs';
import WorkoutPlans from './Components/WorkoutPlans/WorkoutPlans';
import WorkoutEdit from "./Components/WorkoutEdit/WorkoutEdit";
import WorkoutCreate from "./Components/WorkoutCreate/WorkoutCreate";
import CreateSection from "./Components/CreateSection/CreateSection";
import WorkoutList from "./Components/WorkoutList/WorkoutList"
import Cardio from './Components/Cardio/Cardio';

const RouterNav = () => {
  return (
    <div>
         <BrowserRouter>
            <Routes>
                <Route exact path="/" Component={Home}></Route>
                <Route path="/exercise" Component={Exercise}></Route>
                <Route path="/abs" Component={Abs}></Route>
                <Route path="/3dayplan" Component={WorkoutPlans}></Route>
                <Route path="/edit/:id" Component={WorkoutEdit}></Route>
                <Route path="/create" Component={WorkoutCreate}></Route>
                <Route path="/user" Component={CreateSection}></Route>
                <Route path="/list" Component={WorkoutList}></Route>
                <Route path="/cardio" Component={Cardio}></Route>
            </Routes>
    </BrowserRouter>
    </div>
  )
}

export default RouterNav