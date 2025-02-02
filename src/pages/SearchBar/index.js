import React, { useState } from "react";
import styled from "styled-components";
import { FaSearch, FaTimes } from "react-icons/fa"; // 아이콘 사용

const SearchBarContainer = styled.div`

  display: flex;
  margin-left:50px;
  align-items: center;
  width: 300px;
  border: 2px solid #ddd;
  border-radius: 10px;
  background-color: #fff;
  transition: border 0.3s ease;
  &:focus-within {
    border: 2px solid #aaa;
  }
`;

const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 16px;
  padding: 5px;
  background: transparent;
`;

const IconWrapper = styled.div`
  cursor: pointer;
  margin-left: 8px;
  color: #888;
`;

function SearchBar() {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);

  return (
    <SearchBarContainer>
      <IconWrapper>
        {focused || query ? <FaSearch /> : <FaSearch />}
      </IconWrapper>
      <SearchInput
        type="text"
        placeholder="지역, 지하철, 대학, 단지, 매물번호"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => !query && setFocused(false)}
      />
      {query && (
        <IconWrapper onClick={() => setQuery("")}>
          <FaTimes />
        </IconWrapper>
      )}
    </SearchBarContainer>
  );
}

export default SearchBar;
