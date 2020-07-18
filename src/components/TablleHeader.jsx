import React, { Component } from "react";
// sort columns
// onsort
// columns object
class TableHeader extends Component {
  raiseSort = (path) => {
    const sortColumn_ = { ...this.props.sortColumn };
    console.log(path);
    if (sortColumn_.path === path) {
      sortColumn_.order = sortColumn_.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn_.path = path;
      sortColumn_.order = "asc";
    }
    this.props.onSort(sortColumn_);
  };

  renderSortIcon = (column) => {
    if (column.path !== this.props.sortColumn.path) return null;
    if (this.props.sortColumn.order === "asc")
      return <i className="fa fa-sort-asc"></i>;
    return <i className="fa fa-sort-desc"></i>;
  };

  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map((column) => (
            <th
              key={column.path || column.key}
              style={{ cursor: "pointer" }}
              onClick={() => this.raiseSort(column.path)}
            >
              {column.label} {this.renderSortIcon(column)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
