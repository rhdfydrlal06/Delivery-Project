import { LogoBox } from "../../styles/container"
import menuID from "../../recoil/atom"
import { useRecoilState } from "recoil"
import { useCallback, useEffect } from "react"
import styled from "styled-components"
import { colors } from "../../styles/theme"
import LoginModal from "../Login"
import { useState } from "react"

import { getCurrentUserInfo, signoutRequest } from "../../apis/authApi"

import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import DialogTitle from "@mui/material/DialogTitle"
import Button from "@mui/material/Button"

const Img = styled.img`
  max-width: 10vw;
  object-fit: contain;
  cursor: pointer;
`

const MyButton = styled.div`
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

const Header = ({ isMap, currentUser, setCurrentUser }) => {
  const [value, setValue] = useRecoilState(menuID)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [loginOpen, setLoginOpen] = useState(false)

  const handleClick = useCallback(() => {
    setValue("home")
  })

  const handleLoginClick = useCallback(() => {
    setLoginOpen(!loginOpen)
  }, [loginOpen])

  const handleLogoutClick = useCallback(() => {
    // 1. alert 확인 창 띄우기
    setDialogOpen(true)
  })

  const handleLogoutDialogConfirm = useCallback(() => {
    // 2. 로그아웃 요청
    // 3. 세션에서 토큰 지우기
    if (currentUser) {
      signoutRequest()
        .finally(() => {
          // 4. setcurrentuser
          setCurrentUser(null)
          // 5. 다이얼로그 지우기
          setDialogOpen(false)
          // 5. 홈으로 이동
          setValue("home")
        })
    }
  }, [currentUser])

  const handleDialogClose = useCallback(() => {
    setDialogOpen(false)
  })

  useEffect(() => {
    console.log("logo change", value)
  }, [value])

  return (
    <LogoBox isMap={isMap}>
      <Img src="/img/delivery_logo.png" alt="logo" height="75%" onClick={handleClick} />
      {!currentUser ? (
        <MyButton onClick={handleLoginClick}>Log-in</MyButton>
      ) : (
        <MyButton onClick={handleLogoutClick}>Log-out</MyButton>
      )}
      <LoginModal open={loginOpen} setOpen={setLoginOpen} setCurrentUser={setCurrentUser} />
      <Dialog
        open={dialogOpen}
        onClose={handleDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"로그아웃"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            정말로 로그아웃 하시겠습니까?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} autoFocus>
            아니요
          </Button>
          <Button onClick={handleLogoutDialogConfirm} autoFocus>
            네
          </Button>
        </DialogActions>
      </Dialog>
    </LogoBox>
  )
}

export default Header
