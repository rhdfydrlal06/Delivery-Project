import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { LogoBox } from "../../styles/container";
import menuID from "../../recoil/atom";
import { useRecoilState } from "recoil";
import { useCallback, useEffect } from "react";
import styled from "styled-components";
import { colors } from "../../styles/theme"
import LoginModal from "../Login"

import { getCurrentUserInfo } from '../../apis/authApi';

const Img = styled.img`
  max-width: 10vw;
  object-fit: contain;
  cursor: pointer;
`

const Button = styled.div`
  font-size: 20px;
  margin-bottom: 20px;
  padding: 4px;
  color: ${colors.black800};
  border: 1px solid ${colors.black800};
  border-radius: 4px;
  &:hover {
    cursor: pointer;
    color: ${colors.yellow200};
    border-color: ${colors.yellow200};
  }
`

const Header = ({ isMap }) => {

  const [value, setValue] = useRecoilState(menuID)
  const [loginOpen, setLoginOpen] = useState(false)
  const [currentUser, setCurrentUser] = useState(getCurrentUserInfo())

  const handleClick = useCallback(() => {
    setValue("home")
  })

  const handleLoginClick = useCallback(() => {
    setLoginOpen(!loginOpen)
  }, [loginOpen])

  useEffect(() => {
    console.log("logo change", value)
  }, [value])

  return (
    <LogoBox isMap={isMap}>
      <Img src="/img/delivery_logo.png" alt="logo" height="75%" onClick={handleClick} />
      {
        !currentUser ?
          <Button onClick={handleLoginClick}>Log-in</Button> :
          <Button onClick={handleLoginClick}>Log-out</Button>
      }
      <LoginModal open={loginOpen} setOpen={setLoginOpen} setCurrentUser={setCurrentUser} />
    </LogoBox>
  )
}

export default Header
