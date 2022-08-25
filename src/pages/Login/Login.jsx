import React from 'react';
import {
  Button,
  Container,
  ContainerInput,
  Form,
  ImgLogin,
  Input,
  Label,
  LinkStyle,
} from './styles.js';
import { AiOutlineUser } from 'react-icons/ai';
import { FaUser, FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <Container>
      <ImgLogin>
        <AiOutlineUser />
      </ImgLogin>

      <Form>
        <Label>Usuário: </Label>
        <ContainerInput>
          <FaUser style={{ padding: '0 10px 0 10px' }} />
          <Input type="text" placeholder="Username"></Input>
        </ContainerInput>

        <Label>Senha: </Label>
        <ContainerInput>
          <FaLock style={{ padding: '0 10px 0 10px' }} />
          <Input type="password" placeholder="Password"></Input>
        </ContainerInput>
        <Button>Login</Button>

        <Link to="/" style={LinkStyle}>
          Não se lembra da sua senha?
        </Link>
        <Link to="/register" style={LinkStyle}>
          Não tem uma conta? Crie uma!
        </Link>
      </Form>
    </Container>
  );
};
export default Login;
