import Sidebar from "../Sidebar";
import SearchBar from "../SearchBar";
import DetailNav from "../DetailNav";
import OneRoomDetail from "./OneroomDetail";
import KakaoMap from "../../KakaoMap";


function OneRoom() {
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
        {/* ✅ 방 리스트 추가 */}
        <OneRoomDetail />
      </div>
    </div>
  );
}

export default OneRoom;
