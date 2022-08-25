import React from 'react';
import { Container, ContainerIcon, ContainerText } from './styles';

const Card = ({ number, title, Icon}) => {
  return (
    <Container>
      <ContainerText >
        <div size="48px"> {number}</div>
        <div size="16px"> {title}</div>
      </ContainerText>
      <ContainerIcon>
        <Icon />
      </ContainerIcon>
    </Container>
  );
};

export default Card;
