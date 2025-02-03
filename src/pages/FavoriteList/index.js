import { useState, useEffect } from "react";
import Sidebar from "../Sidebar";
import SearchBar from "../SearchBar";
import DetailNav from "../DetailNav";
import OneroomData from "../../data/OneroomData";

function FavoriteList() {
  const [favoriteIds, setFavoriteIds] = useState([]);

  // ✅ localStorage에서 찜한 ID 목록 가져오기
  useEffect(() => {
    const storedFavorites = localStorage.getItem("favoriteIds");
    if (storedFavorites) {
      setFavoriteIds(JSON.parse(storedFavorites));
    }
  }, []);

  // ✅ 찜한 ID에 해당하는 매물 데이터 필터링
  const favoriteRooms = OneroomData.filter((room) =>
    favoriteIds.includes(room.id)
  );

  return (
    <div className="one-room-container">
      {/* ✅ 전체 컨테이너 */}
      <Sidebar />
      <div className="content-container">
        {" "}
        {/* ✅ Sidebar 옆 컨텐츠 */}
        <nav className="nav-bar">
          {/* 왼쪽: 검색바 */}
          <SearchBar />

          {/* 오른쪽: 네비 버튼들 */}
          <DetailNav />
        </nav>
        {/* ✅ 찜한 매물 리스트 */}
        <div className="favorite-list">
          <h3>❤️ 찜한 매물 목록</h3>
          {favoriteRooms.length > 0 ? (
            <ul className="favoriteContainer">
              {favoriteRooms.map((room) => (
                <li key={room.id}>
                  <p>
                    <img src={room.img} alt="" className="favoriteImg" />
                  </p>
                  <p>
                    <strong>- {room.title}</strong> 
                  </p>
                  <p>
                  - {room.content}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <p>찜한 매물이 없습니다.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default FavoriteList;
