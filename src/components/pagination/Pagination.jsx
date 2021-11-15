import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";

const Pagination = ({
  totalCount = 0,
  currentPage = 1,
  pagesPerRow = 10,
  postsPerPage = 20,
  onClickPage,
  onClickPrevPage,
  onClickNextPage,
}) => {
  const [pages, setPages] = useState([]);
  const [totalPage, setTotalPage] = useState(1);

  useEffect(() => {
    const totalPage = Math.ceil(totalCount / postsPerPage);
    setTotalPage(totalPage);

    const pageGroup = Math.ceil(currentPage / pagesPerRow);

    let last = pageGroup * pagesPerRow;
    if (last > totalPage) {
      last = totalPage;
    }

    const first = last - (pagesPerRow - 1) <= 0 ? 1 : last - (pagesPerRow - 1);

    const pageIndexes = [];
    for (let i = first; i <= last; i++) {
      pageIndexes.push(i);
    }

    setPages(pageIndexes);
  }, [currentPage, pagesPerRow, postsPerPage, totalCount]);

  return (
    <PaginationWrapper>
      {currentPage !== 1 && (
        <PageButton
          onClick={() => {
            if (currentPage === 1) return;
            onClickPrevPage();
          }}
        >
          {"<"}
        </PageButton>
      )}

      {pages.map((page) => (
        <PageButton
          key={page}
          active={currentPage === page}
          onClick={() => onClickPage(page)}
        >
          {page}
        </PageButton>
      ))}
      {totalPage > currentPage && (
        <PageButton
          onClick={() => {
            if (currentPage === totalPage) {
              return;
            }
            onClickNextPage();
          }}
        >
          {">"}
        </PageButton>
      )}
    </PaginationWrapper>
  );
};

export default Pagination;

const PaginationWrapper = styled.div`
  max-width: 400px;
  display: flex;
  justify-content: center;
  margin: auto;
`;

const PageButton = styled.button`
  cursor: pointer;
  width: 30px;
  height: 30px;
  border: 1px solid #aa3333;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? "pink" : "#fff")};
  margin-right: 8px;
`;
