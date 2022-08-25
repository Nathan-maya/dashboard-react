import React from 'react';
import { Container, Content } from './styles';
import {
  FaTimes,
  FaHome,
  FaEnvelope,
  FaUserAlt,
  FaIdCardAlt,
  FaRegCalendarAlt,
  FaChartBar,
} from 'react-icons/fa';

import SidebarItem from '../SidebarItem/SidebarItem';

const Sidebar = ({ active }) => {
  const closeSidebar = () => {
    active(false);
  };

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />
      <Content>
        <SidebarItem Icon={FaHome} Text="Principal" />
        <SidebarItem Icon={FaChartBar} Text="Estatísticas" />
        <SidebarItem Icon={FaUserAlt} Text="Usuários" />
        <SidebarItem Icon={FaEnvelope} Text="E-mail" />
        <SidebarItem Icon={FaRegCalendarAlt} Text="Calendário" />
        <SidebarItem Icon={FaIdCardAlt} Text="Funcionários" />
      </Content>
    </Container>
  );
};

export default Sidebar;
