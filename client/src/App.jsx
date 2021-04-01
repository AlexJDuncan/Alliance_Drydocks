import React, { useState } from 'react';
import styled from 'styled-components';
import Home from './home/Home';
import Ship from './ship/Ship';
import Weapons from './weapon/Weapons';
import TopBar from './topbar/TopBar';
import Sidebar from './sidebar/Sidebar';

const Main = styled.div`
  display: grid;
  grid-template-columns: 15rem 3fr;
  grid-template-rows: 7.5rem 3fr;
  font-family: monospace;
  height: 100%;
`;

const App = () => {
  //* * States * *//
  const [display1, setDisplay1] = useState(false);
  const [display2, setDisplay2] = useState(false);
  const [display3, setDisplay3] = useState(true);

  //* * Click Handlers * *//
  const handleHomeClick = () => {
    setDisplay2(false);
    setDisplay1(false);
    setDisplay3(true);
  }

  const handleShipClick = () => {
    setDisplay2(false);
    setDisplay1(true);
    setDisplay3(false);
  }

  const handleWeaponClick = () => {
    setDisplay2(true);
    setDisplay1(false);
    setDisplay3(false);
  }

  return (
    <Main>
      <TopBar />
      <Sidebar
      handleHomeClick={handleHomeClick}
      handleShipClick={handleShipClick}
      handleWeaponClick={handleWeaponClick}
      />
      <Home display={display3} />
      <Ship display={display1} />
      <Weapons display={display2} />
    </Main>
  )
}

export default App;