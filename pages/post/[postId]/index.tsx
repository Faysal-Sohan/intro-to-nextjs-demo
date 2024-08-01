import { useRouter } from "next/router";
import React from "react";

const Post = () => {
  const router = useRouter();
  return <div>Post of id {router.query.postId}</div>;
};

export default Post;
