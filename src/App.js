// import React from "react";
import React, { Component } from "react";
// import logo from './logo.svg';
// import './App.css';
import NavBar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 10 },
      { id: 2, value: 10 },
      { id: 3, value: 10 },
      { id: 4, value: 10 },
    ],
  };
  compo;
  handleDelete = (counterId) => {
    console.log("handler called");
    let counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };
  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const idx = counters.indexOf(counter);
    counters[idx] = { ...counter };
    counters[idx].value++;
    this.setState({ counters });
  };
  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const idx = counters.indexOf(counter);
    counters[idx] = { ...counter };
    if (counters[idx].value > 0) {
      counters[idx].value--;
    }

    this.setState({ counters });
  };
  resetHandler = () => {
    let counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        <NavBar
          counterNumber={this.state.counters.filter((c) => c.value > 0).length}
        ></NavBar>
        <main className="container">
          <Counters
            onDelete={this.handleDelete}
            onReset={this.resetHandler}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            counters={this.state.counters}
          >
            {" "}
          </Counters>
        </main>
      </div>
    );
  }
}

export default App;
// function App() {

//   return (
//     <React.Fragment>
//       <NavBar></NavBar>
//       <Counters></Counters>
//     </React.Fragment>
//   );
// }

// export default App;
