import React from 'react';
import Header from '../components/Header/Header';
import CardBox from '../components/CardBox/CardBox';
import Order from '../components/Orders/Order';
import styled from 'styled-components';

const Main = styled.div`
  position: absolute;
  height: 110px;
  color: white;
  width: calc(100% - 300px);
  left: 300px;
`;

const Home = () => {
  return (
    <div>
      <Header />
      <Main>
        <CardBox />
        <Order />
      </Main>
    </div>
  );
};

export default Home;
