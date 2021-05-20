import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Nav from "./Nav"
import Form from "./usuario/Form"
import List from "./usuario/List"
import Edit from "./usuario/Edit"

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function Main(){
  return (
    <Router>
      <main>
        <Nav/>
        <hr />
        <Switch>
          <Route path="/usuario/index" exact component={List} />
          <Route path="/usuario/form"  component={Form} />
          <Route path="/usuario/edit/:id" component={Edit} />
        </Switch>
      </main>
    </Router>
  )
}

export default Main;

ReactDOM.render(<Main />, document.getElementById('component-main'));
