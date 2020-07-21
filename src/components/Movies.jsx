import React, { Component } from "react";
// import Like from "./like";
import MovieTable from "./MovieTable";
import Pagination from "./pagination";
import { getMovies } from "../services/fakeMovieService";
import { paginate } from "../utils/paginate";
import { getGenres } from "../services/fakeGenreService";
import GenreList from "./genrelist";
import _ from "lodash";
class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    sortColumn: { path: "title", order: "asc" },
    selectedGenre: "",
  };
  componentDidMount() {
    const genres = [{ _id: "", name: "ALL genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }
  deleteHandler = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies: movies });
  };
  likeHandler = (movie) => {
    const movies = [...this.state.movies];
    const idx = movies.indexOf(movie);
    movies[idx] = { ...movies[idx] };
    movies[idx].liked = !movies[idx].liked;
    this.setState({ movies });
  };
  pageClick = (page) => {
    this.setState({ currentPage: page });
  };
  sortHandler = (sortColumn_) => {
    this.setState({ sortColumn: sortColumn_ });
  };
  genreClickHandler = (genre) => {
    console.log(genre);
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };
  render() {
    if (this.state.movies.length === 0) {
      return <p>Ther are no movies in the store</p>;
    }
    const filtered =
      this.state.selectedGenre && this.state.selectedGenre._id
        ? this.state.movies.filter(
            (m) => m.genre._id === this.state.selectedGenre._id
          )
        : this.state.movies;
    const sortedMovies = _.orderBy(
      filtered,
      [this.state.sortColumn.path],
      [this.state.sortColumn.order]
    );
    // filtered = sortedMovies;
    // console.log("filtered", filtered);

    const nmovies = paginate(
      sortedMovies,
      this.state.currentPage,
      this.state.pageSize
    );
    return (
      <main className="container">
        <div className="row">
          <div className="col-3">
            <GenreList
              allItems={this.state.genres}
              onItemSelect={this.genreClickHandler}
              selectedItem={this.state.selectedGenre}
            ></GenreList>
          </div>
          <div className="col">
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
            ></link>

            <h3 className="m-2">
              there are {filtered.length} movies in the store
            </h3>
            <MovieTable
              movies={nmovies}
              onDelete={this.deleteHandler}
              sortColumn={this.state.sortColumn}
              onLike={this.likeHandler}
              onSort={this.sortHandler}
            ></MovieTable>

            <Pagination
              totalMovies={filtered.length}
              handlePageCick={this.pageClick}
              pageSize={this.state.pageSize}
              currentPage={this.state.currentPage}
            ></Pagination>
          </div>
        </div>
      </main>
    );
  }
}

export default Movies;
