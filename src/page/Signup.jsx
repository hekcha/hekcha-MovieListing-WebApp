import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const SignupContainer = styled.div`
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

const SignupHeading = styled.h1`
  margin-top: 48px;
`

const SignupInfo = styled.form`
background: #fff;
max-width: 560px;
width: 100 %;
padding: 58px 44px;
border: 1px solid ##e1e2f0;
border-radius: 4px;
box-shadow: 0 0 5px 0 rgba(42, 45, 48, 0.12);
transition: all 0.3s ease;
`

const SignupInfoColumn = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 20px;
`

const SignupInfoLabel = styled.label`
  font-size: 13px;
  color: #8086a9;
`

const SignupInfoInput = styled.input`
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
  /* transition: background 0.2s ease - out; */
  &:hover{
    background: #55D3AC;
  }
`


function Signup() {
    const [values, setValues] = useState({
        name: "",
        email: "",
        pass: "",
    })

    return (
        <SignupContainer>
            <SignupHeading>Signup</SignupHeading>
            <SignupInfo>
                <SignupInfoColumn>
                    <SignupInfoLabel for="name">Name</SignupInfoLabel>
                    <SignupInfoInput type="name" name="name" autocomplete="off" placeholder="Enter your Name" />
                </SignupInfoColumn>
                <SignupInfoColumn>
                    <SignupInfoLabel for="email">Email</SignupInfoLabel>
                    <SignupInfoInput type="email" name="email" autocomplete="off" placeholder="email@example.com" />
                </SignupInfoColumn>
                <SignupInfoColumn>
                    <SignupInfoLabel for="password">Password</SignupInfoLabel>
                    <SignupInfoInput type="password" name="password" />
                </SignupInfoColumn>
                Already have an account? <Link to="/login">Login</Link><br />
                <Button type="submit">Signup</Button>
            </SignupInfo>
        </SignupContainer>
    )
}

export default Signup