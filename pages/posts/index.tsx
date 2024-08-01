import React from "react";

interface IPost {
  id: number;
  title: string;
}

type TProps = {
  data: IPost[];
};

const Posts = ({ data }: TProps) => {
  return (
    <div>
      <h1>Posts</h1>
      <div>
        {data.map((post) => (
          <p key={post.id}>{post.title}</p>
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return { props: { data } };
}

export default Posts;
