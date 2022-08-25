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
import { Link } from 'react-router-dom';

const Header = () => {
  const [sidebar, setSidebar] = useState(true);

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
        <Link style={{ textDecoration: 'none', color: 'white' }} to="/login">
          <MenuItem>Login</MenuItem>
        </Link>
        <Link style={{ textDecoration: 'none', color: 'white' }} to="/register">
          <MenuItem>Cadastrar</MenuItem>
        </Link>
      </Right>
    </Container>
  );
};

export default Header;
