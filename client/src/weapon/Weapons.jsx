import React, { useState } from 'react';
import styled from 'styled-components';

const WeaponPos = styled.div`
  grid-column: 2/3;
  grid-row: 2/3;
  color: white;
  text-align: center
`;

const Weapons = (props) => {
  if (props.display === false) {
    return null;
  }
  return(
    <WeaponPos>
      <div>Hello World</div>
    </WeaponPos>
  )
}

export default Weapons;