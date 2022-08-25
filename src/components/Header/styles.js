import styled from 'styled-components';

export const Container = styled.section`
  height: 100px;
  display: flex;
  background-color: #1a202c;
  box-shadow: 0 0 20px 3px;
  justify-content: space-between;
`;
export const Left = styled.div`
  > svg {
    position: fixed;
    color: white;
    width: 30px;
    height: 30px;
    margin-top: 32px;
    margin-left: 32px;
    cursor: pointer;
  }
`;
export const Center = styled.div`
  display: flex;
  align-items: center;
`;
export const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  background-color: white;
  border-radius: 5px;
  &:last-child {
    cursor: pointer;
  }
`;
export const Input = styled.input`
  border: none;
  padding: 5px;
`;
export const Right = styled.div`
  display: flex;
  color: white;
  gap: 10px;
  align-items: center;
  margin-right: 32px;
`;

export const MenuItem = styled.div`
    cursor: pointer;
    font-size: 14px;

`;
