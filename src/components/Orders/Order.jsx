import React from 'react';
import {
  Button,
  Container,
  OrderHeader,
  Span,
  Table,
  Tbody,
  Td,
  Thead,
  Title,
  Tr,
} from './styles';
import { orders } from '../../data';
const Order = () => {
  return (
    <Container>
      <OrderHeader>
        <Title>Ordens Recentes: </Title>
        <Button>Ver Tudo</Button>
      </OrderHeader>
      <Table>
        <Thead>
          <Tr>
            <Td type="Nome">Nome</Td>
            <Td type="Preco">Price</Td>
            <Td type="Pagamento">Payment</Td>
            <Td type="Status">Status</Td>
          </Tr>
        </Thead>
        <Tbody>
          {orders.map((order) => (
            <Tr key={order.id}>
              <Td >{order.nome}</Td>
              <Td >{order.preco}</Td>
              <Td >{order.pagamento}</Td>
              <Td>
                <Span type={order.status}>{order.status}</Span>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Container>
  );
};

export default Order;
