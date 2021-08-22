import React from 'react';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom'
import Home from "../containers/Home";
import Login from '../containers/Login';
import NotFound from '../containers/NotFound';
import Register from '../containers/Register';
import Layout from '../components/Layout';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;