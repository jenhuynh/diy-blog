import * as React from "react";

import DiyPost from "./DiyPost";
import * as apiClient from "./apiClient";

const DiyPostList = () => {
  const [posts, setPosts] = React.useState([]);

  const loadPosts = async () => {
    const postList = await apiClient.getDiyPosts();
    setPosts(postList);
  };

  React.useEffect(() => {
    loadPosts();
  }, []);

  return (
    <>
      {posts.map((post) => {
        return <DiyPost key={post.id} post={post} />;
      })}
    </>
  );
};

export default DiyPostList;
