import "./App.css";
import Article from "./pages/Article";
import Header from "./pages/Header";
import OneRoom from "./pages/OneRoom";
import KakaoMap from "./KakaoMap";
import FavoriteList from "./pages/FavoriteList";
import { Outlet } from "react-router-dom";

import { Routes, Route, Link, NavLink } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* 라우터 정리 시작 */}
      <Routes>
        <Route path="/" element={<Header />}></Route>
        <Route path="매매·전월세" element={<OneRoom />} />
        <Route path="원룸·전월세" element={<OneRoom />} />
        <Route path="오피스텔·전월세" element={<OneRoom />} />
        <Route path="아파트_관심목록" element={<FavoriteList />} />

      </Routes>
      {/* 라우터 정리 끝 */}
    </div>
  );
}

export default App;
