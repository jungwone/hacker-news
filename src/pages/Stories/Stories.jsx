import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Pagination from "../../components/pagination/Pagination";
import { getCategoryFromSearchParam } from "../../helper/helper";
import { getPostsByCategory } from "../../service/hacker_news";

const Stories = () => {
  const location = useLocation();
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // TODO: 알맞은 카테고리 데이터 불러오기
    const category = getCategoryFromSearchParam(location.search);
    getPostsByCategory(category).then((posts) => {
      setPosts(posts);
    });
  }, [location]);

  return (
    <StoriesPage>
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
