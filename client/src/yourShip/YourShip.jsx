import React from 'react';
import styled from 'styled-components';
import Ships from '../ship/SampleShips';
import weapons from '../weapon/SampleWeapons';

const ShipPos = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 2fr;
  grid-template-rows: 25rem 1fr 1fr;
  margin: 20px;
`;

const ImagePos = styled.img`
  grid-column: 1/4;
  grid-row: 1/2;
  size: 100%;
  justify-self: center;
`;

const Select = styled.select`
  height: 1.25rem;
  width: 5rem;
  margin: 10px;
`;

const SelectPos1 = styled.div`
  grid-column: 1/2;
  grid-row: 2/3;
  color: #ffce63;
  margin: 10px;
`;

const SelectPos2 = styled.div`
  grid-column: 2/3;
  grid-row: 2/3;
  color: #ffce63;
  margin: 10px;
`;

const SelectPos3 = styled.div`
  grid-column: 3/4;
  grid-row: 2/3;
  color: #ffce63;
  margin: 10px;
`;

const StatsStyle = styled.div`
  grid-column: 1/4;
  grid-row: 3/4;
  border: 5px solid #ff9c00;
`;

const YourShip = (props) => {
  if (props.display === false) {
    return null;
  }
  return (
    <ShipPos>
      <ImagePos src={Ships[0].photo} />
        <SelectPos1>
          Fore Weapons:<br />
          <Select>
            {weapons.map((weapon, idx) => (
              <option>{weapon.name}</option>
            ))}
          </Select>
          <Select>
            {weapons.map((weapon, idx) => (
              <option>{weapon.name}</option>
            ))}
          </Select>
          <Select>
            {weapons.map((weapon, idx) => (
              <option>{weapon.name}</option>
            ))}
          </Select>
          <Select>
            {weapons.map((weapon, idx) => (
              <option>{weapon.name}</option>
            ))}
          </Select><br />
          Aft Weapons:<br />
          <Select>
            {weapons.map((weapon, idx) => (
              <option>{weapon.name}</option>
            ))}
          </Select>
          <Select>
            {weapons.map((weapon, idx) => (
              <option>{weapon.name}</option>
            ))}
          </Select>
          <Select>
            {weapons.map((weapon, idx) => (
              <option>{weapon.name}</option>
            ))}
          </Select>
          <Select>
            {weapons.map((weapon, idx) => (
              <option>{weapon.name}</option>
            ))}
          </Select><br />
          Device Slots:<br />
          <Select />
        </SelectPos1>
        <SelectPos2>
          Shields:<br />
          <Select /><br />
          Deflector:<br />
          <Select /><br />
          Impulse Engine:<br />
          <Select /><br />
          Warp Drive/Singularity Core:<br />
          <Select />
        </SelectPos2>
        <SelectPos3>
          Engineering Consoles:<br />
          <Select />
          <Select />
          <Select />
          <Select /><br />
          Science Consoles:<br />
          <Select />
          <Select /><br />
          Tactical Consoles:<br />
          <Select />
          <Select />
          <Select />
          <Select />
          <Select /><br />
          Universal Console:<br />
        </SelectPos3>
        <StatsStyle />
    </ShipPos>
  )
}

export default YourShip;