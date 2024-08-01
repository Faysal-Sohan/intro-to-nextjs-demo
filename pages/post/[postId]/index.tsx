import React from "react";
import { useRouter } from "next/router";

interface IPost {
  id: number;
  title: string;
}

type TProps = {
  post: IPost;
};

interface IParams {
  postId: string;
}

type TStaticProps = {
  params: IParams;
};

const Post = ({ post }: TProps) => {
  const router = useRouter();
  return (
    <div>
      Post of id {router.query.postId}
      <div>
        <p>Post Title: {post?.title}</p>
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = (await res.json()) as IPost[];

  const paths = posts.map((post) => {
    params: {
      postId: post.id.toString();
    }
  });
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: TStaticProps) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const post = res.json();
  return { props: { post } };
}

export default Post;
