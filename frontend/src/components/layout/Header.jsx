import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { LogoBox } from "../../styles/container";
import menuID from "../../recoil/atom";
import { useRecoilState } from "recoil";
import { useCallback, useEffect } from "react";
import styled from "styled-components";


const Img = styled.img`
  max-width: 8vw;
  object-fit: contain;
  cursor: pointer;
`

const Header = ({ isMap }) => {

  const [value, setValue] = useRecoilState(menuID)

  const handleClick = useCallback(() => {
    setValue("home")
  })

  useEffect(() => {
    console.log("logo change", value)
  }, [value])

  const styles = {
    customizeToolbar: {
      minWidth: 36
    }
  }

  return(
    <AppBar position="fixed" style={{ background: '#FFFFFF', boxShadow: "none"}} sx={{ zIndex: (theme) => theme.zIndex.drawer + 1}}>
      <LogoBox>
        <Img src="/img/delivery_logo.png" alt="logo" height="75%" onClick={handleClick} />
      </LogoBox>
    </AppBar>
  )
}

export default Header