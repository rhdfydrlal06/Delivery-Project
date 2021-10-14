import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import { LogoBox } from "../../styles/container"
import menuID from "../../recoil/atom"
import { useRecoilState } from "recoil"
import { useCallback, useEffect } from "react"
import styled from "styled-components"
import { colors } from "../../styles/theme"
import LoginModal from "../Login"
import { useState } from "react"

const Img = styled.img`
  max-width: 8vw;
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

  const handleClick = useCallback(() => {
    setValue("home")
  })

  const handleLoginClick = useCallback(() => {
    setLoginOpen(!loginOpen)
  }, [loginOpen])

  useEffect(() => {
    console.log("logo change", value)
  }, [value])

  const styles = {
    customizeToolbar: {
      minWidth: 36,
    },
  }

  return (
    <AppBar
      position="fixed"
      style={{ background: "#FFFFFF", boxShadow: "none" }}
      sx={{ zIndex: theme => theme.zIndex.drawer + 1 }}
    >
      <LogoBox>
        <Img src="/img/delivery_logo.png" alt="logo" height="75%" onClick={handleClick} />
      </LogoBox>
    </AppBar>
  )
}

export default Header
