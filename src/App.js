import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Movies from "./components/Movies";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/not-found";
import MovieForm from "./components/movieform.jsx";
import NavBar from "./components/NavBar2";
import Register from "./components/register";
import LoginForm from "./components/loginForm";
class App extends Component {
  state = {};
  newForm() {
    return <MovieForm></MovieForm>;
  }
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <Switch>
          {/* <Route path="/movies/new" component={MovieForm}></Route> */}
          <Route path="/register" component={Register}></Route>
          <Route path="/login" component={LoginForm}></Route>
          <Route path="/movies/:id" component={MovieForm}></Route>
          <Route path="/customers" component={Customers}></Route>
          <Route path="/rentals" component={Rentals}></Route>
          <Route path="/movies" component={Movies}></Route>
          <Route path="/" exact component={Movies}></Route>
          <Route path="/notfound" component={NotFound}></Route>
          <Redirect to="/notfound"> </Redirect>
        </Switch>
      </div>
    );
  }
}

export default App;
