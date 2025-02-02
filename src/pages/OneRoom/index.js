import Sidebar from '../Sidebar';
import SearchBar from '../SearchBar';

import DetailNav from '../DetailNav';

function OneRoom() {
  return (
    <div className='header-container'>
      <Sidebar />
      <nav className='nav-bar'>
        {/* 왼쪽: 검색바 */}
        <SearchBar />

        {/* 오른쪽: 네비 버튼들 */}
        <DetailNav />
      </nav>
    </div>
  );
}

export default OneRoom;
