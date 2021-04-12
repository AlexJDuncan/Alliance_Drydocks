import React, { useState } from 'react';
import styled from 'styled-components';
import Home from './home/Home';
import Ship from './ship/Ship';
import Weapon from './weapon/Weapons';
import YourShip from './yourShip/YourShip';
import TopBar from './topbar/TopBar';
import Sidebar from './sidebar/Sidebar';

const Main = styled.div`
  display: grid;
  grid-template-columns: 15rem 3fr;
  grid-template-rows: 7.5rem 3fr;
  font-family: Nova Lite Ultra SSi;
  height: 100%;
`;

const App = () => {
  //* * States * *//
  const [display1, setDisplay1] = useState(false);
  const [display2, setDisplay2] = useState(false);
  const [display3, setDisplay3] = useState(true);
  const [display4, setDisplay4] = useState(false);

  //* * Click Handlers * *//
  const handleHomeClick = () => {
    setDisplay2(false);
    setDisplay1(false);
    setDisplay3(true);
    setDisplay4(false);
  }

  const handleShipClick = () => {
    setDisplay2(false);
    setDisplay1(true);
    setDisplay3(false);
    setDisplay4(false);
  }

  const handleWeaponClick = () => {
    setDisplay2(true);
    setDisplay1(false);
    setDisplay3(false);
    setDisplay4(false);
  }

  const handleYourShipClick = () => {
    setDisplay2(false);
    setDisplay1(false);
    setDisplay3(false);
    setDisplay4(true);
  }

  return (
    <Main>
      <TopBar />
      <Sidebar
      handleHomeClick={handleHomeClick}
      handleShipClick={handleShipClick}
      handleWeaponClick={handleWeaponClick}
      handleYourShipClick={handleYourShipClick}
      />
      <Home display={display3} />
      <Ship display={display1} />
      <Weapon display={display2} />
      <YourShip display={display4} />
    </Main>
  )
}

export default App;