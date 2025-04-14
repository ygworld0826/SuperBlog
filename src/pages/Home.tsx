import React, { useState, useEffect } from 'react';
import PostList from '../components/PostList';
import { Post } from '../types';

const topics = [
  "전체", // 모든 주제를 보기 위한 옵션 추가
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

const Home: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedTopic, setSelectedTopic] = useState('전체');

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('posts') || '[]');
    fetch('/data/posts.json')
      .then((response) => response.json())
      .then((data: Post[]) => {
        const allPosts = [...storedPosts, ...data];
        const uniquePosts = Array.from(
          new Map(allPosts.map((post) => [post.id, post])).values()
        );
        setPosts(uniquePosts);
      })
      .catch((error) => console.error('Error loading posts:', error));
  }, []);

  const filteredPosts =
    selectedTopic === '전체'
      ? posts
      : posts.filter((post) => post.category === selectedTopic);

  return (
    <div>
      <div className="filter-section">
        <label>목차별 보기: </label>
        <select
          value={selectedTopic}
          onChange={(e) => setSelectedTopic(e.target.value)}
        >
          {topics.map((topic) => (
            <option key={topic} value={topic}>
              {topic}
            </option>
          ))}
        </select>
      </div>
      <PostList posts={filteredPosts} />
    </div>
  );
};

export default Home;