import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Users, Albums, UsItem} from "../Users";


export const App = () => {
  return (
    <Router>
        <Users/>
    </Router>
  );
};
