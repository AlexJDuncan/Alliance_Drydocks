import React from 'react';
import styled from 'styled-components';
import Ships from './SampleShips';

//* * Styleguides * *//

const ShipPos = styled.div`
  grid-column: 2/3;
  grid-row: 2/3;
  justify-self: center
`;

const Img = styled.img`
  height: 418px;
  width: 800px;
`;

const Name = styled.h1`
  color: #ffce63;
  text-align: center;
`;

const ShipDataGrid = styled.div`
  display: grid;
  grid-template-columns: 25rem 25rem;
  grid-template-rows: 18rem 15rem;
  justify-content: center;
`;

const Data1 = styled.div`
  grid-column: 1/2;
  grid-row: 1/2;
  color: #ffce63;
  font-size: 20px;
  border: 2px solid #ff9c00;
  padding: 10px;
`;

const Data2 = styled.div`
  grid-column: 2/3;
  grid-row: 1/2;
  color: #ffce63;
  font-size: 20px;
  border: 2px solid #ff9c00;
  padding: 10px;
`;

const Data3 = styled.div`
  grid-column: 1/2;
  grid-row: 2/3;
  color: #ffce63;
  font-size: 20px;
  border: 2px solid #ff9c00;
  padding: 10px;
`;

const Data4 = styled.div`
  grid-column: 2/3;
  grid-row: 2/3;
  color: #ffce63;
  font-size: 20px;
  border: 2px solid #ff9c00;
  padding: 10px;
`;

//* * Func/Render * *//

const Ship = (props) => {
  if (props.display === false) {
    return null;
  }
  return(
    <ShipPos>
      <Name>{Ships[0].name} - Tier {Ships[0].tier}</Name>
      <Img src={Ships[0].photo} alt="" />
      <ShipDataGrid>
        <Data1>
          Type: {Ships[0].type}<br />
          Hull<br />
          &nbsp;
          lvl-50: {Ships[0].hull.lvl50}<br />
          &nbsp;
          lvl-60: {Ships[0].hull.lvl60}<br />
          &nbsp;
          lvl-65: {Ships[0].hull.lvl65}<br />
          Hull Modifier: {Ships[0].hullModifier}<br />
          Shield Modifier: {Ships[0].shieldModifier}<br />
          Turn Rate: {Ships[0].turnRate}<br />
          Impulse Modifier: {Ships[0].impulseModifier}<br />
          Inertia Rating: {Ships[0].inertiaRating}<br />
          Warp Core: {Ships[0].warpCore}
        </Data1>
        <Data2>
          Bonus Power:<br />
          {Ships[0].bonusPower.map((power, idx) => (
            <div key={idx}>&nbsp;{power}</div>
          ))}
          Bridge Officers: {Ships[0].bridgeOfficers.map((officer, idx) => (
            <div key={idx}>&nbsp;{officer}</div>
          ))}
        </Data2>
        <Data3>
          Weapons:<br />
          &nbsp;
          Fore: {Ships[0].weapons.fore}<br />
          &nbsp;
          Aft: {Ships[0].weapons.aft}<br />
          Device Slots: {Ships[0].deviceSlots}<br />
          Consoles:<br />
          &nbsp;
          Tactical: {Ships[0].consoles.tactical}<br />
          &nbsp;
          Engineering: {Ships[0].consoles.engineering}<br />
          &nbsp;
          Science: {Ships[0].consoles.science}<br />
          &nbsp;
          Universal: {Ships[0].consoles.universal}<br />
        </Data3>
        <Data4>
          Abilities: {Ships[0].abilities.map((ability, idx) => (
            <div key={idx}>&nbsp;{ability}</div>
          ))}
          Admirality Stats:<br />
          &nbsp;
          Tactical: {Ships[0].admiralityStats.tactical}<br />
          &nbsp;
          Engineering: {Ships[0].admiralityStats.engineering}<br />
          &nbsp;
          Science: {Ships[0].admiralityStats.science}
        </Data4>
      </ShipDataGrid>
    </ShipPos>
  )
}

export default Ship;
// admiralityStats: {
//   Tactical: 46,
//   Engineering: 48,
//   Science: 23,
// },