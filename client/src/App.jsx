import React from 'react';
import styled from 'styled-components';
import Ship from './Ship'

const Main = styled.div`
  background-color: black;
  background-size: 100%;
`;

const App = () => {
  return (
    <Main>Hello World!
      <Ship />
    </Main>
  )
}

export default App;