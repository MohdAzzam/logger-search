import ReactPaginate from "react-paginate";
import "./style.css";
function Pagination({ pageOptions, canPreviousPage, gotoPage, canNextPage }) {
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel={canNextPage ? "next >" : ""}
      onPageChange={(index) => gotoPage(index.selected)}
      pageRangeDisplayed={4}
      pageCount={pageOptions.length}
      previousLabel={canPreviousPage ? "< previous" : ""}
      renderOnZeroPageCount={null}
      containerClassName="pagination"
      activeClassName="active"
    />
  );
}

export default Pagination;
