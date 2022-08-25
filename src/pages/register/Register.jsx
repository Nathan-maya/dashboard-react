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
  Title,
} from './styles.js';
import { AiOutlineUser, AiTwotoneMail } from 'react-icons/ai';
import { FaUser, FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';

const Register = () => {
  return (
    <>
      <Header />
      <Container>
        <ImgLogin>
          <AiOutlineUser />
        </ImgLogin>
          <Form>
            <Title>Cadastrar</Title>
            <Label>Usuário: </Label>
            <ContainerInput>
              <FaUser style={{ padding: '0 10px 0 10px' }} />
              <Input type="text" placeholder="Username"></Input>
            </ContainerInput>

            <Label>Senha: </Label>
            <ContainerInput>
              <FaLock style={{ padding: '0 10px 0 10px' }} />
              <Input type="new-password" placeholder="Password"></Input>
            </ContainerInput>
            <Label>Repete Senha: </Label>
            <ContainerInput>
              <FaLock style={{ padding: '0 10px 0 10px' }} />
              <Input type="new-password" placeholder="Password"></Input>
            </ContainerInput>
            <Label>E-mail: </Label>
            <ContainerInput>
              <AiTwotoneMail style={{ padding: '0 10px 0 10px' }} />
              <Input type="email" placeholder="e-mail"></Input>
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
    </>
  );
};

export default Register;
