import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { getMovie, saveMovie } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
// console.log(getGenres());
class MovieForm extends Form {
  state = {
    data: {
      title: "",
      genreId: "",
      numberInStock: "",
      dailyRentalRate: "",
    },
    genres: [],
    errors: {},
  };
  schema = {
    _id: Joi.string(),
    title: Joi.string().required().label("Tittle"),
    genreId: Joi.string().required().label("Genre"),
    numberInStock: Joi.number()
      .required()
      .min(0)
      .max(100)
      .label("Number In Stock"),
    dailyRentalRate: Joi.number()
      .required()
      .min(0)
      .max(10)
      .label("Daily Rental Rate"),
  };
  componentDidMount() {
    // console.log("inside mounting");
    // console.log(getGenres());
    const genres = getGenres();
    // console.log(genres);
    this.setState({ genres });
    // console.log("iside mounting", this.state.genres);
    const movieId = this.props.match.params.id;
    console.log("id iside mountinng ", movieId);
    if (movieId === "new") return;

    // console.log("after new");
    const movie = getMovie(movieId);
    if (!movie) return this.props.history.replace("/not-found");

    this.setState({ data: this.mapToViewModel(movie) });
  }

  mapToViewModel(movie) {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate,
    };
  }

  doSubmit = () => {
    saveMovie(this.state.data);
    console.log("submitted");
    this.props.history.push("/movies");
  };

  render() {
    const { match, history } = this.props;
    // console.log("iside render", this.state.genres);

    return (
      <main className="container">
        <h1 className="mt-4 mb-4"> Movie Form {this.props.match.params.id} </h1>

        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderInput("numberInStock", "Quantity")}
          {this.renderSelect("genreId", "Genre", this.state.genres)}
          {this.renderInput("dailyRentalRate", "Rental rate")}
          {this.renderButton("Save")}
        </form>
      </main>
    );
  }
}

export default MovieForm;
// import React from "react";
// import Joi from "joi-browser";
// import Form from "./common/form";
// import { getMovie, saveMovie } from "../services/fakeMovieService";
// import { getGenres } from "../services/fakeGenreService";

// class MovieForm extends Form {
//   state = {
//     data: {
//       title: "",
//       genreId: "",
//       numberInStock: "",
//       dailyRentalRate: "",
//     },
//     genres: [],
//     errors: {},
//   };

//   schema = {
//     _id: Joi.string(),
//     title: Joi.string().required().label("Title"),
//     genreId: Joi.string().required().label("Genre"),
//     numberInStock: Joi.number()
//       .required()
//       .min(0)
//       .max(100)
//       .label("Number in Stock"),
//     dailyRentalRate: Joi.number()
//       .required()
//       .min(0)
//       .max(10)
//       .label("Daily Rental Rate"),
//   };

//   componentDidMount() {
//     console.log("mounting");
//     const genres = getGenres();
//     this.setState({ genres });

//     const movieId = this.props.match.params.id;
//     if (movieId === "new") return;

//     const movie = getMovie(movieId);
//     if (!movie) return this.props.history.replace("/not-found");

//     this.setState({ data: this.mapToViewModel(movie) });
//   }

//   mapToViewModel(movie) {
//     return {
//       _id: movie._id,
//       title: movie.title,
//       genreId: movie.genre._id,
//       numberInStock: movie.numberInStock,
//       dailyRentalRate: movie.dailyRentalRate,
//     };
//   }

//   doSubmit = () => {
//     saveMovie(this.state.data);

//     this.props.history.push("/movies");
//   };

//   render() {
//     const { match, history } = this.props;
//     return (
//       <main className="container">
//         <h1> Movie Form {match.params.id}</h1>

//         <form onSubmit={this.handleSubmit}>
//           {this.renderInput("title", "Title")}
//           {this.renderInput("numberInStock", "Quantity")}
//           {this.renderSelect("genreId", "Genre", this.state.genres)};
//           {this.renderInput("dailyRentalRate", "Rental rate")}
//           <button
//             className="btn btn-primary"
//             onClick={() => history.push("/movies")}
//           >
//             Save
//           </button>
//         </form>
//       </main>
//     );
//   }
// }

// export default MovieForm;
