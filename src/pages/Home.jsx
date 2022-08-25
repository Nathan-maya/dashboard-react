import React from 'react';
import Header from '../components/Header/Header';
import CardBox from '../components/CardBox/CardBox';
import Order from '../components/Orders/Order';
import styled from 'styled-components';
import Customers from '../components/Customers/Customers';

const Main = styled.section`
  position: absolute;
  height: 110px;
  color: white;
  width: calc(100% - 300px);
  left: 300px;
`;

const Details = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 40px;
`

const Home = () => {
  return (
    <div>
      <Header />
      <Main>
        <CardBox />
        <Details>
          <Order />
          <Customers  />
        </Details>
      </Main>
    </div>
  );
};

export default Home;
