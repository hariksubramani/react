import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Create from './components/create.component';
import Edit from './components/edit.component';
import Index from './components/index.component';
import ReferenceDemoComponent from './components/ReferenceDemo';

function App() {
  return (   
    <Router>
    <div className="container">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link to={'/'} className="navbar-brand">React Crud Example</Link>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
    
    <li className="nav-item">
    <Link to={'/'} className="nav-link">
    Home
    </Link>
    <Link to={'/create'} className="nav-link">
    create
    </Link>
    <Link to={'/index'} className="nav-link">
    index
    </Link>
    <Link to={'/reference'} className="nav-link">
    Reference
    </Link>
    </li>
    </ul>
    </div>
    </nav>
    <br/>

    <h2>
    Welcome to React CRUD Tutorial
    </h2>


    <Switch>

    <Route exact path="/create" component={Create}></Route>
    <Route path="/index" component={Index}></Route>
    <Route path="/edit/:id" component={Edit}></Route>
    <Route path="/reference" component={ReferenceDemoComponent}></Route>
    </Switch>

    </div>
    </Router>
  );
}

export default App;
