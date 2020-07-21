import React, { Component } from "react";
import { Link } from "react-router-dom";
class NavBar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <Link class="navbar-brand" to="/">
            Vidly
          </Link>
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <Link to="/movies" class="nav-link">
                Movies
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/customers" class="nav-link">
                Customers
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/rentals" class="nav-link">
                Rentals
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/login" class="nav-link">
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default NavBar;
