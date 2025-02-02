function Article() {
  return (
    <div className='article-container'>
      {/* 검색창 같은 추가 요소를 여기에 넣으면 됨 */}
      <form className='search'>
        <input
          type='text'
          placeholder='제품을 검색해보세요.'
          className='search_bar'
          name='searchText'
        />
      </form>

      <h1>어떤 집을 찾고 계세요?</h1>
    </div>
  );
}

export default Article;
