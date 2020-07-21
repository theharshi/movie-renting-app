import React, { Component } from "react";

class GenreList extends Component {
  render() {
    return (
      <ul className="list-group mt-5 ml-2">
        {this.props.allItems.map((genre) => (
          <li
            key={genre._id}
            onClick={() => this.props.onItemSelect(genre)}
            style={{ cursor: "pointer" }}
            className={
              this.props.selectedItem.name === genre.name
                ? "list-group-item active border border rounded"
                : "list-group-item border border rounded"
            }
          >
            {genre.name}
          </li>
        ))}
      </ul>
    );
  }
}

export default GenreList;
