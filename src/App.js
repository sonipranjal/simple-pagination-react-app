import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Posts from "./components/Posts";
import Pagination from "./components/Pagination";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2em;
  background: papayawhip;
`;
const Name = styled.h1`
  font-size: 1.5em;
  color: black;
`;

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(
        `https://api.instantwebtools.net/v1/passenger?page=0&size=100`
      );
      // res.data.data.map((post) => console.log(post.name));
      setPosts(res.data.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  //get current items
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  // console.log(currentPosts);
  //change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Container>
        <Name>Simple Pagination</Name>
        <Posts posts={currentPosts} loading={loading} />
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
        />
      </Container>
    </div>
  );
};

export default App;
