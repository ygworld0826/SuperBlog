import React from 'react';
import { Post } from '../types';

interface PostPreviewProps {
  post: Post;
}

const PostPreview: React.FC<PostPreviewProps> = ({ post }) => {
  return (
    <div className="post-preview">
      <h2>{post.title}</h2>
      <p>
        <em>{post.date}</em> | 주제: {post.category}
      </p>
      <p>{post.content.slice(0, 100)}...</p>
      <p>태그: {post.tags.join(', ')}</p>
    </div>
  );
};

export default PostPreview;