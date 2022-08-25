import styled from 'styled-components';

export const Container = styled.section`
  width: 100vw;
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const ImgLogin = styled.div`
  color: white;
  border-radius: 100%;
  background-color: #03a9f4;
  > svg {
    height: 100px;
    width: 100px;
    padding: 10px;
  }
  margin-bottom: 40px;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 40px;
  background-color: #03a9f4;
  gap: 5px;
  border-radius: 10px;
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
`;

export const Label = styled.label`
  margin: 10px 0;
  font-size: 18px;
`;
export const ContainerInput = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
`;
export const Input = styled.input`
  border: none;
  padding: 10px 5px;
  background-color: white;
  &:focus {
    outline: none;
  }
`;

export const LinkStyle = {
  color: 'white',
  margin: '5px 0px',
  fontSize: '12px',
  textDecoration: 'underline',
  cursor: 'pointer',
};

export const Button = styled.button`
  margin: 15px auto 10px auto;
  padding: 5px 50px;
  color: white;
  background-color: #1a202c;
  border: none;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    background-color: #fff;
    color: #1a202c;
  }
`;
