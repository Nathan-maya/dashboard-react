import styled from 'styled-components';

export const CardContainer = styled.div`
  position: absolute;
  height: 110px;
  color: white;
  width: calc(100% - 300px);
  left: 300px;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;
