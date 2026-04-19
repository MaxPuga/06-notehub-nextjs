"use client";

import ReactPaginateModule from "react-paginate";
import css from "./Pagination.module.css";

const ReactPaginate =
  (ReactPaginateModule as any).default || ReactPaginateModule;

interface Props {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  totalPages,
  currentPage,
  onPageChange,
}: Props) {
  return (
    <ReactPaginate
      pageCount={totalPages}
      pageRangeDisplayed={5}
      marginPagesDisplayed={1}
      forcePage={currentPage - 1}
      onPageChange={({ selected }: { selected: number }) => {
        const nextPage = selected + 1;

        if (nextPage !== currentPage) {
          onPageChange(nextPage);
        }
      }}
      containerClassName={css.pagination}
      activeClassName={css.active}
      nextLabel="→"
      previousLabel="←"
    />
  );
}
