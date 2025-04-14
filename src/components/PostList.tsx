import React from 'react';
import { Post } from '../types';
import PostPreview from './PostPreview';

interface PostListProps {
  posts: Post[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <div className="post-list">
      {posts.length === 0 ? (
        <p>아직 게시물이 없습니다.</p>
      ) : (
        posts.map((post) => <PostPreview key={post.id} post={post} />)
      )}
    </div>
  );
};

export default PostList;