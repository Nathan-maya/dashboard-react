import React from 'react';
import { Container, ContainerCustomer, Customer, DetailCustomer, ImgCustomer, Title } from './Styles';
import Perfil from '../../assets/foto-perfil.jpg'
const Customers = () => {
  console.log(Perfil)
  return (
    <Container>
      <Title>Clientes Recentes: </Title>
      <ContainerCustomer>
        <ImgCustomer src={Perfil}></ImgCustomer>
        <DetailCustomer>
          <Customer>Nathan</Customer>
          <Customer>Brasil</Customer>
        </DetailCustomer>
      </ContainerCustomer>
      <ContainerCustomer>
        <ImgCustomer src={Perfil}></ImgCustomer>
        <DetailCustomer>
          <Customer>Nathan</Customer>
          <Customer>Brasil</Customer>
        </DetailCustomer>
      </ContainerCustomer>
      <ContainerCustomer>
        <ImgCustomer src={Perfil}></ImgCustomer>
        <DetailCustomer>
          <Customer>Nathan</Customer>
          <Customer>Brasil</Customer>
        </DetailCustomer>
      </ContainerCustomer>
    </Container>
  );
};

export default Customers;
