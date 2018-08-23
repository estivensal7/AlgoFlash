// {/*Setting up Main Component to render React Routes for every Page/Link*/}
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../../Pages/Home/Home.js';
import HTMLCSS from '../../Pages/HTML_CSS/HTML_CSS.js';
import CompSci from '../../Pages/CompSci/CompSci.js';
import Database from '../../Pages/Database/Database.js';
import Javascript from '../../Pages/Javascript/Javascript.js';
import SortingSearch from '../../Pages/Sorting_Search/Sorting_Search.js';

export default class Main extends Component {
    render() {
      return (
        <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/html-css' component={HTMLCSS}></Route>
            <Route exact path='/compsci' component={CompSci}></Route>
            <Route exact path='/database' component={Database}></Route>
            <Route exact path='/javascript' component={Javascript}></Route>
            <Route exact path='/sorting-search' component={SortingSearch}></Route>
        </Switch>
      )
    }
  }