import React, { useState } from 'react';
import { Post } from '../types';

interface PostFormProps {
  onAddPost?: (post: Post) => void;
}

const topics = [
  "블록체인의 역사 및 발전",
  "블록체인의 기본 구조",
  "블록체인의 작동원리",
  "이더리움 기본 원리",
  "기초-웹 개발 이해하기",
  "Git",
  "HTML",
  "CSS",
  "Javascript",
  "Solidity",
  "React",
  "DOM",
  "Dapp",
  "컨트랙트호출(ABI)",
  "ERC-20",
  "ERC-721",
  "간단한 웹 애플리케이션 구현하기",
  "객체 지향 프로그래밍",
];

const PostForm: React.FC<PostFormProps> = ({ onAddPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');
  const [category, setCategory] = useState(topics[0]); // 기본값 설정

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newPost: Post = {
      id: Date.now(),
      title,
      date: new Date().toISOString().split('T')[0],
      content,
      tags: tags.split(',').map((tag) => tag.trim()),
      category,
    };

    if (onAddPost) {
      onAddPost(newPost);
    } else {
      const existingPosts = JSON.parse(localStorage.getItem('posts') || '[]');
      localStorage.setItem('posts', JSON.stringify([newPost, ...existingPosts]));
    }

    setTitle('');
    setContent('');
    setTags('');
    setCategory(topics[0]);
  };

  return (
    <form onSubmit={handleSubmit} className="post-form">
      <div>
        <label>목차 주제</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {topics.map((topic) => (
            <option key={topic} value={topic}>
              {topic}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>제목</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>내용</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </div>
      <div>
        <label>태그 (쉼표로 구분)</label>
        <input
          type="text"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
      </div>
      <button type="submit">게시물 추가</button>
    </form>
  );
};

export default PostForm;