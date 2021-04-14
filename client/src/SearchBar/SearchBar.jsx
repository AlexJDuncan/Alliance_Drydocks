import React from 'react';
import styled from 'styled-components';

const SearchPos = styled.div`
  display: grid;
  grid-template-columns: 2f 1fr;
  grid-template-rows: 1fr;
  margin-top: 20px;
  margin-right: 20px;
  justify-content: right;
`;

const SearchInput = styled.input`
  grid-column: 2/3;
  grid-row: 1/2;
  width: 200px;
  margin-right: 60px;
`;

const SearchButton = styled.input`
  grid-column: 2/3;
  grid-row: 1/2;
  margin-left: 10px;
  width: 60px;
  justify-self: right;
`;

const SearchBar = () => {
  return (
    <SearchPos>
      <SearchInput type="search" />
      <SearchButton type="submit">Search</SearchButton>
    </SearchPos>
  )
}

export default SearchBar;