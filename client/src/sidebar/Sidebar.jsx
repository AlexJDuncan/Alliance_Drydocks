import React from 'react';
import styled from 'styled-components';

const CardsPos =  styled.div`
  grid-column: 1/2;
  grid-row: 2/3;
`;

const Card = styled.h3`
  color: white;
  text-align: center;
  padding: 10px;
  margin-left: 10px;
  margin-right: 10px;
  background-color: #ff9c00;
`;

const Sidebar = (props) => {
  return(
    <CardsPos>
      <Card onClick={props.handleHomeClick}>Home</Card>
      <Card onClick={props.handleShipClick}>Game Ships</Card>
      <Card onClick={props.handleWeaponClick}>Weapons</Card>
      <Card onClick={props.handleYourShipClick}>Your Ship 1</Card>
      <Card>Your Ship 2</Card>
      <Card>Your Ship 3</Card>
    </CardsPos>
  )
}

export default Sidebar;