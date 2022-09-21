import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';

const Card = styled(Link)`
  display: block;
  color: #ff9c00;
  text-align: center;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
  margin-right: 10px;
  border 5px;
  border-style: solid;
  border-color: #ff9c00;

  &:hover {
    cursor: pointer;
    color: white;
    border-color: white;
  }
`;

const Sidebar = () => {
  return(
    <Container sx={{ textAlign: 'center' }}>
      <Card to="/" style={{ display: 'inline-block' }}>Home</ Card>
      <Card to="/ships" style={{ display: 'inline-block' }}>Game Ships</ Card>
      <Card to="/weapons" style={{ display: 'inline-block' }}>Weapons</Card>
      <Card to="/yourship" style={{ display: 'inline-block' }}>Your Ship 1</Card>
      <Card style={{ display: 'inline-block' }}>Your Ship 2</Card>
      <Card style={{ display: 'inline-block' }}>Your Ship 3</Card>
    </Container>
  );
}

export default Sidebar;