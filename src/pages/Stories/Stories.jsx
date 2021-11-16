import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Pagination from "../../components/pagination/Pagination";
import PostList from "../../components/post_list/PostList";
import {
  getCategoryFromSearchParam,
  getPageNumerFromSearchParam,
} from "../../helper/helper";
import { getPostsByCategory } from "../../service/hacker_news";
import styled from "@emotion/styled";

const POSTS_PER_PAGE = 20;

const Stories = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [posts, setPosts] = useState([]);
  const category = getCategoryFromSearchParam(location.search);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getPostsByCategory(category).then((posts) => {
      posts.sort((a, b) => b - a);
      setPosts(posts);
    });
  }, [category]);

  useEffect(() => {
    const page = getPageNumerFromSearchParam(location.search);
    setCurrentPage(page);
  }, [location]);

  return (
    <StoriesPage>
      <PostList
        posts={posts.slice(
          (currentPage - 1) * POSTS_PER_PAGE,
          currentPage * POSTS_PER_PAGE
        )}
      />
      <Pagination
        totalCount={posts.length}
        currentPage={currentPage}
        postsPerPage={POSTS_PER_PAGE}
        onClickPage={(page) => {
          setCurrentPage(page);
          navigate(`/stories?category=${category}&page=${page}`);
        }}
        onClickPrevPage={() => {
          setCurrentPage((prev) => prev - 1);
        }}
        onClickNextPage={() => {
          setCurrentPage((prev) => prev + 1);
        }}
      />
    </StoriesPage>
  );
};

export default Stories;

const StoriesPage = styled.main`
  padding-bottom: 80px;
`;
