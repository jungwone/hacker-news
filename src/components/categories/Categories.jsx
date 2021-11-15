import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const CategoryList = {
  topstories: "topstories",
  newstories: "newstories",
  askstories: "askstories",
  showstories: "showstories",
  jobstories: "jobstories",
};

const Categories = () => {
  return (
    <div>
      <List>
        <Category>
          <Link to={`/`}>Home</Link>
        </Category>
        {Object.values(CategoryList).map((category) => (
          <Category key={category}>
            <Link to={`/stories?category=${category}`}>{category}</Link>
          </Category>
        ))}
      </List>
    </div>
  );
};

export default Categories;

const List = styled.ul`
  max-width: 600px;
  margin: auto;
  list-style: none;
  display: flex;
  justify-content: space-between;
`;

const Category = styled.li`
  a {
    text-decoration: none;
    color: #8c3030;
    font-weight: bold;
    &:hover {
      color: #d95252;
    }
  }
`;
