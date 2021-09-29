import * as React from "react";

import { Routes, Route, Link } from "react-router-dom";

//always render single post
const DiyPost = ({ post }) => {
  return (
    <>
      <Link to={`/post/${post.id}`}>{post.title} </Link>
    </>
  );
};

export default DiyPost;
