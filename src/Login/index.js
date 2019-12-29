import React, {useState} from 'react';
import {Container, Input, Button, Title} from './styles'
import firebase from '../data/Firebase';

export default function Login() {
  
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  

  const login = () => {
    firebase.auth().signInWithEmailAndPassword(email, pass).then(user => {
      console.log(user)
		})
  }
  
  const cadastro = () => {
    firebase.auth().createUserWithEmailAndPassword(email, pass).then(user => {
      console.log(user)
    })
  }


  return (
   <Container> 
     <Title>Seja bem vindo, faça login para continuar </Title>
      <Input type="email" placeholder="Informe seu email"
      value={email} onChange={e=> setEmail(e.target.value)}
      />
      <Input type="password" placeholder="Informe sua senha"
      value={pass} onChange={e=> setPass(e.target.value)}
      />
      <Button onClick={login}> Entrar com e-mail agora </Button>
      <Button primary onClick={cadastro}> Cadastre com e-mail agora </Button>
   </Container>   
  );
}
