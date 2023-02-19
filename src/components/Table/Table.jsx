import React, { useMemo } from "react";
import { useTable, useSortBy, usePagination } from "react-table";
import { COLUMNS } from "./columns";
import Pagination from "../Pagination/Pagination";
import "./table.css";

const Table = ({ loggerData }) => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => loggerData || [], [loggerData]);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
    },
    useSortBy,
    usePagination
  );
  if (loggerData.length === 0) {
    return <div>No Data</div>;
  }
  return (
    <>
      <table {...getTableProps()} className="table">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <span>
                    {column.isSorted ? (column.isSortedDesc ? "⬆️" : "⬇️") : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination
        pageOptions={pageOptions}
        canPreviousPage={canPreviousPage}
        canNextPage={canNextPage}
        gotoPage={gotoPage}
      />
    </>
  );
};
export default Table;
