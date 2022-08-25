import styled from 'styled-components';

export const Container = styled.section`
  padding: 20px;
  color: white;
  background-color: #1d2433;
`;
export const OrderHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Title = styled.h2``;
export const Button = styled.a`
  padding: 5px;
  background-color: #03a9f4;
  border-radius: 6px;
  text-decoration: none;
  font-size: 18px;
  cursor: pointer;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
`;
export const Thead = styled.thead``;
export const Tr = styled.tr`
  border-bottom: 1px solid rgba(3, 169, 244, 0.4);
`;
export const Td = styled.td`
  padding: 10px 5px;
  font-weight: bold;

`;
export const Tbody = styled.tbody``;

export const Span = styled.span`
  padding: 2px 4px;
  border-radius: 5px;
  font-weight: 300;
  ${(props) => {
    switch (props.type) {
      case 'Entregue':
        return `
                    background-color : green;
                `;
      case 'Pendente':
        return `
                    background-color : red;
                `;
      case 'Retorno':
        return `
                    background-color : red;
                `;
      case 'Em Progresso':
        return `
                    background-color : blue;
                `;
      default:
        return `background-color:#1d2433;`;
    }
  }};
`
