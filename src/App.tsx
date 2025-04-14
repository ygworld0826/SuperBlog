import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from './assets/logo.svg';
import './styles/App.css';
import Home from './pages/Home';
import PostForm from './components/PostForm';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        {/* 내비게이션 바 */}
        <nav className="App-nav">
          <div className="nav-logo">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>SuperBlog</h1>
          </div>
          <ul className="nav-links">
            <li>
              <Link to="/">홈</Link>
            </li>
            <li>
              <Link to="/new-post">게시물 작성</Link>
            </li>
          </ul>
        </nav>

        {/* 헤더 */}
        <header className="App-header">
          <h2>수업 아카이브</h2>
          <p>6개월간의 학습 여정을 기록합니다.</p>
        </header>

        {/* 메인 콘텐츠 */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new-post" element={<PostForm />} />
          </Routes>
        </main>

        {/* 푸터 */}
        <footer className="App-footer">
          <p>Powered by React</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </footer>
      </div>
    </Router>
  );
};

export default App;