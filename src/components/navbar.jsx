import React, { Component } from "react";
class NavBar extends Component {
  render() {
    return (
      <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="#">
          Navbar
          <span class="badge badge-pill badge-secondary p-2 m-2">
            {this.props.counterNumber}
          </span>
        </a>
      </nav>
    );
  }
}

export default NavBar;
