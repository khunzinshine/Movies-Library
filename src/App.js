import React, { Component } from "react";
import "./App.css";
import "./components/movies";
import { Route, Redirect, Switch } from "react-router-dom";
import Movies from "./components/movies";
import MovieForm from "./components/movieForm";
import Rental from "./components/rentals";
import NotFound from "./components/notFound";
import Customer from "./components/customers";
import NavBar from "./components/navBar";
import LoginForm from "./components/loginForm";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/login" component={LoginForm} />
            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/movies" component={Movies} />
            <Route path="/movie-form" component={MovieForm} />
            <Route path="/rentals" component={Rental} />
            <Route path="/customers" component={Customer} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
