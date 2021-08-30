import "./App.css";
import React, { Fragment, Component } from "react";
import { DataGrid } from "@material-ui/data-grid";
import axios from "axios";
import { Button } from "@material-ui/core";
import { FormControl } from "@material-ui/core";
import { InputLabel, Input, FormHelperText } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Table from "./Table";
import Form from "./Form";
import { history } from "./historyUtil";
import MediaCard from "./sample";

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Table} />
          <Route exact path="/add" component={Form} />
          <Route exact path="/edit" component={Form} />
          <Route exact path="/new" component={MediaCard} />
        </Switch>
      </Router>
    );
  }
}

export default App;
