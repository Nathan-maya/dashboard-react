import React from 'react';
import { CardContainer } from './styles';
import Card from './Card/Card';
import { AiFillEye } from 'react-icons/ai';
import { stats } from '../../data.js';

const CardBox = () => {
  return (
    <CardContainer>
      {stats.map((item) => (
        <Card number={item.number} title={item.title} Icon={AiFillEye}></Card>
      ))}
    </CardContainer>
  );
};

export default CardBox;
