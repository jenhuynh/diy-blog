import * as React from "react";

//useParams takes care of specical routes for react routers
import { useParams } from "react-router-dom";

import DiyPost from "./DiyPost";
import * as apiClient from "./apiClient";

const DiyPostSingle = () => {
  const [post, setPost] = React.useState(null);
  const params = useParams();
  const loadPost = async () => {
    const postSingle = await apiClient.getDiyPost(params.id);
    setPost(postSingle);
  };

  React.useEffect(() => {
    loadPost();
  }, []);

  return <>{post ? <DiyPost post={post} /> : null}</>;
};

export default DiyPostSingle;
