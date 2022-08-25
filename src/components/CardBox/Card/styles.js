import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  gap: 20px;
  background-color: #1d2433;
`;
export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 32px;
  > div:last-child {
    font-size: 16px;
    margin-top: 10px;
    color: #03A9F4;
  }
`;
export const ContainerIcon = styled.div`
  display: flex;
  align-items: center;
  > svg {
    width: 48px;
    height: 48px;
    margin-left: 20px;
    color: #03A9F4;
  }
`;
