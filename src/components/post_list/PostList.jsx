import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const PostList = ({ posts = [] }) => {
  return (
    <PostListWrapper>
      {posts.map((post) => (
        <Post key={post}>
          <Link to={`/post/${post}`}>{post}</Link>
        </Post>
      ))}
    </PostListWrapper>
  );
};

export default PostList;

const PostListWrapper = styled.ul`
  list-style: none;
`;

const Post = styled.li`
  border: 1px solid #cccccc;
  margin-bottom: 4px;
  height: 60px;

  &:hover {
    border-color: #aa3333;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    text-decoration: none;
    color: #000;

    &:hover {
      color: #aa3333;
    }
  }
`;
