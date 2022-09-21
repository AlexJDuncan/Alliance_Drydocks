import React, { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
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

  return (
    <Main>
      <TopBar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/ships" element={<Ship />} />
        <Route path="/weapons" element={<Weapon />} />
        <Route path="/yourship" element={<YourShip />} />
      </Routes>
    </Main>
  );
};

export default App;