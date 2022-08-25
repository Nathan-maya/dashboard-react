import React, { useState } from 'react';
import {
  Container,
  Input,
  Left,
  Center,
  Right,
  SearchContainer,
  MenuItem,
} from './styles';
import { FaBars } from 'react-icons/fa';
import Sidebar from './Sidebar/sidebar';
import { AiOutlineSearch } from 'react-icons/ai';

const Header = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <Container>
      <Left>
        <FaBars onClick={showSidebar} />
        {sidebar && <Sidebar active={setSidebar} />}
      </Left>
      <Center>
        <SearchContainer>
          <Input placeholder="Search" />
          <AiOutlineSearch />
        </SearchContainer>
      </Center>
      <Right>
        <MenuItem>Login</MenuItem>
        <MenuItem>Register</MenuItem>
      </Right>
    </Container>
  );
};

export default Header;
