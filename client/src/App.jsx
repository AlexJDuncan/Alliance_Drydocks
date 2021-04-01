import React, { useState } from 'react';
import styled from 'styled-components';
import Home from './home/Home';
import Ship from './ship/Ship';
import TopBar from './topbar/TopBar';
import Sidebar from './sidebar/Sidebar';

const Main = styled.div`
  display: grid;
  grid-template-columns: 15rem 3fr;
  grid-template-rows: 7.5rem 3fr;
  background: rgba(0, 0, 0, 0.85);
  font-family: monospace;
`;

const App = () => {
  const display1 = useState(false);
  const display2 = useState(false);
  const display3 = useState(true);

  return (
    <Main>
      <TopBar />
      <Sidebar />
      <Home display={display3}/>
      <Ship display={display1} />
    </Main>
  )
}

export default App;