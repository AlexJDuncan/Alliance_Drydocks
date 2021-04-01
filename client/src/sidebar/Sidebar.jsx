import React from 'react';
import styled from 'styled-components';

const CardsPos =  styled.div`
  grid-column: 1/2;
  grid-row: 2/3;
`;

const Card = styled.h3`
  color: white;
  border: 3px solid white;
  text-align: center;
  padding: 10px;
  margin-left: 20px;
`;

const Sidebar = (props) => {
  return(
    <CardsPos>
    <Card onClick={props.handleShipClick}>Game Ships</Card>
    <Card onClick={props.handleWeaponClick}>Weapons</Card>
    <Card>Your Ship 1</Card>
    <Card>Your Ship 2</Card>
    <Card>Your Ship 3</Card>
    </CardsPos>
  )
}

export default Sidebar;