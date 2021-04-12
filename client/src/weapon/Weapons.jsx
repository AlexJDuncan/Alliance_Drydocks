import React, { useState } from 'react';
import styled from 'styled-components';
import weapons from './SampleWeapons';

const WeaponPos = styled.div`
  grid-column: 2/3;
  grid-row: 2/3;
  color: #ffce63;
  text-align: center
`;

const WeaponTableGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  margin:20px;
`;

const WeaponTable1 = styled.h2`
  grid-column: 1/2;
  grid-row: 1/2;
  align-text: center;
`;

const WeaponImg = styled.img`
  grid-column: 1/2;
  grid-row: 2/3;
  justify-self: center;
  height: 64px;
  width: 49px;
`;

const WeaponTable2 = styled.div`
  grid-column: 2/3;
  grid-row: 1/3;
  text-align: left;
  font-size: 1rem;
`;

const Weapon = (props) => {
  if (props.display === false) {
    return null;
  }
  return(
    <WeaponPos>
      {weapons.map((weapon, idx) => (
        <WeaponTableGrid>
          <WeaponTable1>
            {weapon.name}
          </WeaponTable1>
          <WeaponImg src={weapon.photo}/>
          <WeaponTable2>
            Type: {weapon.description.type}<br />
            Arc: {weapon.description.arc}<br />
            Damage: {weapon.description.damage}<br />
            Effects:<br />
            {weapon.description.effects.map((effect) => (
              <div>&nbsp;{effect}</div>
            ))}<br />
            Bind: {weapon.description.bind}<br />
            Restrictions: {weapon.description.restrictions}<br />
            Rank: {weapon.description.rank}<br />
          </WeaponTable2>
        </WeaponTableGrid>
      ))}
    </WeaponPos>
  )
}

export default Weapon;
