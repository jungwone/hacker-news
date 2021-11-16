import React from "react";
import styled from "@emotion/styled";

const Home = () => {
  return (
    <HomePage>
      <div>Welcome To Weird Hacker News !!</div>
      <img
        src="https://cdn.pixabay.com/photo/2017/06/26/12/49/red-wine-2443699_1280.jpg"
        alt="wine"
      />
    </HomePage>
  );
};

export default Home;

const HomePage = styled.div`
  padding-top: 50px;
  font-size: 2rem;
  line-height: 1.5;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
