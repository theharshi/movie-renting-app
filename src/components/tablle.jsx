import React, { Component } from "react";
import TableHeader from "./TablleHeader";
import TableBody from "./tableBody";
const Table = (props) => {
  const { columns, sortColumn, onSort, data } = props;
  return (
    <table className="table">
      <TableHeader
        onSort={onSort}
        columns={columns}
        sortColumn={sortColumn}
      ></TableHeader>
      <TableBody data={data} Columns={columns}></TableBody>
    </table>
  );
};

export default Table;
