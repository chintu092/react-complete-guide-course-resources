import React, { useState } from "react";
import Data from "../data/data";
import PostItem from "./PostItem";

const Posts = () => {
  const [posts, setPost] = useState(Data);

  return (
    <section className="posts">
      <div className="container post__container">
        {posts.map(({ id, title, category, thumbnail, desc, authorID }) => (
          <PostItem
            key={id}
            postID={id}
            thumbnail={thumbnail}
            title={title}
            category={category}
            description={desc}
            authorID={authorID}
          />
        ))}
      </div>
    </section>
  );
};

export default Posts;
