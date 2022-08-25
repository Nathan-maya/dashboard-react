import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  color: white;
  background-color: #1D2433;
  padding: 20px;
`;

export const Title = styled.h2`
  margin-bottom: 15px;
`;
export const ContainerCustomer = styled.div`
  display: flex;
  gap: 10px;
  padding: 5px;
`;
export const ImgCustomer = styled.img`
border-radius: 100%;
width: 60px;
height: 60px;
object-fit: cover;
`
export const DetailCustomer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
`;
export const Customer = styled.p`
  font-size: 16px;
  &:last-child{
    font-size: 14px;
    color: #03A9F4;
    font-weight: 300;
  }
`;

