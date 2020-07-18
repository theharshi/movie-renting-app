import React, { Component } from "react";
import Like from "./like";
import Table from "./tablle";
class MovieTable extends Component {
  columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Quantity" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: (movie) => (
        <Like
          liked={movie.liked}
          onLiked={() => this.props.onLike(movie)}
        ></Like>
      ),
    },
    {
      key: "delete",
      content: (movie) => (
        <button
          onClick={() => this.props.onDelete(movie)}
          className="btn btn-danger btn-sm"
        >
          DELETE
        </button>
      ),
    },
  ];
  render() {
    // const { movies, onDelete, onLike } = this.props;
    return (
      <Table
        data={this.props.movies}
        onSort={this.props.onSort}
        sortColumn={this.props.sortColumn}
        columns={this.columns}
      ></Table>
      // <table className="table">
      //   <TableHeader
      //     onSort={this.props.onSort}
      //     columns={this.columns}
      //     sortColumn={this.props.sortColumn}
      //   ></TableHeader>
      //   <TableBody data={movies} Columns={this.columns}></TableBody>
      // </table>
    );
  }
}

export default MovieTable;

// const MovieTable = (props) => {

// };

// export default MovieTable;
