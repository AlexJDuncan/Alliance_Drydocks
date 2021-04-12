import React from 'react';
import styled from 'styled-components';

const HomePos = styled.div`
  grid-column: 2/3;
  grid-row: 2/3;
  color: #ffce63;
  text-align: center;
  font-size: 20px;
`;

const Home = (props) => {
  if (props.display === false) {
    return null;
  }
  return(
    <HomePos>
      <h1>Welcome to the Alliance Drydocks!!</h1>
      <img src="https://i.ibb.co/vdkDV78/drydock.jpg" alt="image of Federation Drydocks" />
      <p>Please enjoy your stay as we refit your ship!<br />
        We have provided some catalogs to the left for you to take a look at while you wait.<br />
        You can also use the bottom buttons to configure your ship and see how it looks before selecting your gear.<br />
        Again, please enjoy your stay at the Alliance Drydocks!
      </p>
    </HomePos>
  )
}

export default Home;