import React from "react";
import styled from "styled-components";

const Passenger = styled.div`
  border: 1px solid black;
  margin: 5px;
  border-radius: 5px;
  background-color: #edbf69;
  padding: 40px;
`;

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className="list-group mb-4">
      {posts.map((post) => (
        <Passenger>
          Name: {post.name}
          <br></br>
          Country: {post.airline.country}
        </Passenger>
      ))}
    </ul>
  );
};

export default Posts;
