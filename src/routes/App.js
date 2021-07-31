import React from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom'
import Home from "../containers/Home";
import Login from '../containers/Login';
import Register from '../containers/Register';

const App = () => (
  <BrowserRouter>
    <Route exact path="/" component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
  </BrowserRouter>
);

export default App;