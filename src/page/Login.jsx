import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LoginContainer = styled.div`
  display: flex;
  font-family: 'Open Sans', sans - serif;
  background: #f9faff;
  color: #3a3c47;
  line-height: 1.6;
  align-items: center;
  flex-direction: column;
  margin: 0;
  padding: 0;
`

const LoginHeading = styled.h1`
  margin-top: 48px;
`

const LoginInfo = styled.form`
background: #fff;
min-width: 360px;
width: 100 %;
padding: 58px 44px;
border: 1px solid ##e1e2f0;
border-radius: 4px;
box-shadow: 0 0 5px 0 rgba(42, 45, 48, 0.12);
transition: all 0.3s ease;
`

const LoginInfoColumn = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 20px;
`

const LoginInfoLabel = styled.label`
  font-size: 13px;
  color: #8086a9;
`

const LoginInfoInput = styled.input`
  flex: 1;
  padding: 13px;
  border: 1px solid #d6d8e6;
  border-radius: 4px;
  font-size: 16px;
  transition: all 0.2s ease - out;
`


const Button = styled.button`
  width: 100 %;
  padding: 12px;
  font-size: 18px;
  background: #15C39A;
  color: #fff;
  border: none;
  border-radius: 100px;
  cursor: pointer;
  font-family: 'Open Sans', sans - serif;
  margin-top: 15px;
  transition: background 0.2s ease - out;
  &:hover{
    background: #55D3AC;
  }
`


function Login() {
  return (
    <LoginContainer>
      <LoginHeading>Login</LoginHeading>
      <LoginInfo>
        <LoginInfoColumn>
          <LoginInfoLabel for="email">Email</LoginInfoLabel>
          <LoginInfoInput type="email" name="email" autocomplete="off" placeholder="email@example.com" />
        </LoginInfoColumn>
        <LoginInfoColumn>
          <LoginInfoLabel for="password">Password</LoginInfoLabel>
          <LoginInfoInput type="password" name="password" />
          <div style={{ display: "flex", flexDirection: "row" }}>Don't have an account? &nbsp;&nbsp;<Link to="/signup" style={{ textDecoration: "none" }}>Sign Up</Link></div>
        </LoginInfoColumn>
        <Button type="submit">Login</Button>
      </LoginInfo>
    </LoginContainer>
  )
}

export default Login