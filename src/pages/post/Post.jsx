import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useParams } from "react-router";
import { getPostInfo } from "../../service/hacker_news";
import { getDateUsingTimeStamp } from "../../helper/helper";

const Post = () => {
  const param = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    if (param.id) {
      getPostInfo(param.id).then((response) => {
        setPost(response);
      });
    }
  }, [param]);

  return (
    <PostPage>
      {post["title"] && <h2>{post.title}</h2>}
      <Row>id: {post.id}</Row>
      {post["score"] && <Row>score: {post.score}</Row>}
      {post["time"] && <Row>time: {getDateUsingTimeStamp(post.time)}</Row>}
      {post["type"] && <Row>type: {post.type}</Row>}
      {post["url"] && (
        <Row>
          url:
          <UrlText target="_blank" href={post.url}>
            {post.url}
          </UrlText>
        </Row>
      )}
      {post["text"] && (
        <Content dangerouslySetInnerHTML={{ __html: post.text }} />
      )}
      {post["kids"] && (
        <>
          kids (comments)
          <Comments>
            {post.kids.map((comment) => (
              <li key={comment}>{comment}</li>
            ))}
          </Comments>
        </>
      )}
    </PostPage>
  );
};

export default Post;

const PostPage = styled.div`
  text-align: left;
`;

const Row = styled.div`
  font-size: 16px;
  margin: 12px 0px;
  font-weight: bold;
`;

const Content = styled.div`
  margin: 20px 0;
`;

const UrlText = styled.a`
  color: #2e2e2e;
  &:hover {
    color: #8c3030;
  }
`;

const Comments = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
