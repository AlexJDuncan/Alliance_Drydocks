import React from 'react';
import styled from 'styled-components';

const Logo = styled.div`
  display: inline-block;
  font-weight: 600;
  font-size: 3rem;
  margin-left: 10rem;
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
  background-color: #848484;
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