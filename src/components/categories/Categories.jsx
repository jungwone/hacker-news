import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const CategoryList = {
  topstories: "topstories",
  newstories: "newstories",
  askstories: "askstories",
  showstories: "showstories",
  jobstories: "jobstories",
};

Object.freeze(CategoryList);

const Categories = ({ currentCategory }) => {
  return (
    <List>
      <Category>
        <Link to={`/`}>Home</Link>
      </Category>
      {Object.values(CategoryList).map((category) => (
        <Category key={category} active={currentCategory === category}>
          <Link to={`/stories?category=${category}`}>{category}</Link>
        </Category>
      ))}
    </List>
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
    color: ${(props) => (props.active ? "#d95252" : "#8c3030")};
    font-weight: bold;
    &:hover {
      color: #d95252;
    }
  }
`;
