import React from 'react';
import styled from 'styled-components';
import Ships from './SampleShips';
import SearchBar from '../SearchBar/SearchBar';

//* * Styleguides * *//

const ShipPos = styled.div`
  grid-column: 2/3;
  grid-row: 2/3;
  color: #ffce63;
  text-align: center
`;

const Img = styled.img`
  width: auto;
`;

const Name = styled.h2`
  color: #ffce63;
  text-align: center;
`;

const ShipDataGrid = styled.div`
  display: grid;
  grid-template-columns: 650px 400px 350px;
  grid-template-rows: 1fr;
  justify-content: center;
  text-align: left;
  margin: 20px;
`;

const Data1 = styled.div`
  grid-column: 1/2;
  color: #ffce63;
  text-align: center;
`;

const Data2 = styled.div`
  grid-column: 2/3;
  color: #ffce63;
  margin-top: 7px;
  line-height: 1.5rem;
  font-size: 1.15rem;
  padding: 15px;
`;

const Data5 = styled.div`
  grid-column: 3/4;
  color: #ffce63;
  margin-top: 7px;
  line-height: 1.5rem;
  font-size: 1.15rem;
  padding: 15px;
`;

//* * Func/Render * *//

const Ship = (props) => {
  if (props.display === false) {
    return null;
  }
  return(
      <ShipPos>
        <ShipDataGrid>
          <Data1>
            <Name>{Ships[0].name} - Tier {Ships[0].tier}</Name>
            <Img src={Ships[0].photo} alt="" />
          </Data1>
          <Data2>
            Type: {Ships[0].type}<br />
            Hull:<br />
            &nbsp; &nbsp;
            lvl-50: {Ships[0].hull.lvl50}<br />
            &nbsp; &nbsp;
            lvl-60: {Ships[0].hull.lvl60}<br />
            &nbsp; &nbsp;
            lvl-65: {Ships[0].hull.lvl65}<br />
            Hull Modifier: {Ships[0].hullModifier}<br />
            Shield Modifier: {Ships[0].shieldModifier}<br />
            Turn Rate: {Ships[0].turnRate}<br />
            Impulse Modifier: {Ships[0].impulseModifier}<br />
            Inertia Rating: {Ships[0].inertiaRating}<br />
            Warp Core: {Ships[0].warpCore}<br />
            Bonus Power:<br />
            {Ships[0].bonusPower.map((power, idx) => (
              <div key={idx}>&nbsp; &nbsp;{power}</div>
              ))}
            Bridge Officers: {Ships[0].bridgeOfficers.map((officer, idx) => (
              <div key={idx}>&nbsp; &nbsp;{officer}</div>
              ))}
          </Data2>
          <Data5>
            Weapons:<br />
            &nbsp; &nbsp;
            Fore: {Ships[0].weapons.fore}<br />
            &nbsp; &nbsp;
            Aft: {Ships[0].weapons.aft}<br />
            Device Slots: {Ships[0].deviceSlots}<br />
            Consoles:<br />
            &nbsp; &nbsp;
            Tactical: {Ships[0].consoles.tactical}<br />
            &nbsp; &nbsp;
            Engineering: {Ships[0].consoles.engineering}<br />
            &nbsp; &nbsp;
            Science: {Ships[0].consoles.science}<br />
            &nbsp; &nbsp;
            Universal: {Ships[0].consoles.universal}<br />
            Abilities: {Ships[0].abilities.map((ability, idx) => (
              <div key={idx}>&nbsp; &nbsp;{ability}</div>
              ))}
            Admirality Stats:<br />
            &nbsp; &nbsp;
            Tactical: {Ships[0].admiralityStats.tactical}<br />
            &nbsp; &nbsp;
            Engineering: {Ships[0].admiralityStats.engineering}<br />
            &nbsp; &nbsp;
            Science: {Ships[0].admiralityStats.science}
          </Data5>
        </ShipDataGrid>
      </ShipPos>
  )
}

export default Ship;
