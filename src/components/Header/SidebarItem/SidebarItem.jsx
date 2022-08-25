import React from 'react';
import { Container } from './styles';

const SidebarItem = ({ Icon, Text, location }) => {
  return (
    <Container>
      <Icon />
      {Text}
    </Container>
  );
};

export default SidebarItem;
