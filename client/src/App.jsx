import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './home/Home';
import Ship from './ship/Ship';
import Weapon from './weapon/Weapons';
import YourShip from './yourShip/YourShip';
import TopBar from './topbar/TopBar';
import Navbar from './Navbar/Navbar';


const App = () => {

  return (
    <>
      <TopBar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/ships" element={<Ship />} />
        <Route path="/weapons" element={<Weapon />} />
        <Route path="/yourship" element={<YourShip />} />
      </Routes>
    </>
  );
};

export default App;