import React from 'react';
import styled from 'styled-components';

const Logo = styled.div`
  display: inline-block;
  font-weight: 600;
  font-size: 3rem;
  margin-left: 25px;
  margin-right: 50px;
  margin-top: 25px;
`;

const Title = styled.h1`
  display: inline-block;
  font-size: 3rem;
`;

const TopBarPos = styled.div`
  grid-column: 1/3;
  grid-row: 1/2;
  color: #ffce63;
`;

const LeftLine = styled.div`
  display: inline-block;
  height: 25px;
  width: 100px;
  margin-left: 12rem;
  padding: 7.5px;
  background-color: #ff9c00;
`;

const TopBar = () => {
  return(
    <TopBarPos>
      <LeftLine />
      <Logo>AD</Logo>
      <Title>Alliance Drydocks</Title>
    </TopBarPos>
  )
}

export default TopBar;