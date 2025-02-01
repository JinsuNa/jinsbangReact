import "./App.css";
import Article from "./pages/Article";
import Header from "./pages/Header";

import { Routes, Route, Link, NavLink } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* 로고와 Nav바 시작 */}
      <Header />
      {/* 로고와 Nav바 끝 */}
      <Article />
      {/* 라우터 정리 시작 */}
      <Routes>
        {/* <Route path="/" element={<Header></Header>} />
        <Route path="매매·전월세" element={<Article />} />
        <Route path="/" element={<Header />} />
        <Route path="/" element={<Header />} /> */}
      </Routes>
      {/* 라우터 정리 끝 */}
    </div>
  );
}

export default App;
