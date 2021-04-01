import React from 'react';
import styled from 'styled-components';

const Logo = styled.div`
  display: inline-block;
  font-family: monospace;
  font-weight: 600;
  font-size: 3rem;
  margin-right: 50px;
`;

const Title = styled.h1`
  display: inline-block;
`;

const TopBarPos = styled.div`
  grid-column: 1/3;
  grid-row: 1/2;
  color: white;
  margin-left: 100px;
  margin-top: 10px;
`;

const TopBar = () => {
  return(
    <TopBarPos>
      <Logo>AD</Logo>
      <Title>Alliance Drydocks</Title>
    </TopBarPos>
  )
}

export default TopBar;