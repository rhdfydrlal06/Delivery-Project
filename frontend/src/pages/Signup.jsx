import React, { useState, useRef, useCallback } from "react"
import styled from "styled-components"
import Layout from "../components/layout/Layout"
import { DescBox, MainTitle, MenuName } from "../components/skeleton/AnalysisContents"
import { colors } from "../styles/theme"
import { NotMapBox } from "../styles/container"

import FormControl from "@mui/material/FormControl"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import DialogTitle from "@mui/material/DialogTitle"

import { useRecoilState } from "recoil"

import * as validation from "../utils/validation"
import { signupRequest } from "../apis/authApi"
import menuID from "../recoil/atom"
import ErrorToast from "../components/ErrorToast"

import { getCurrentUserInfo } from "../apis/authApi"

export const Bold = styled.span`
  font-weight: bold;
`
const Comment = styled.span`
  display: block;
  font-size: 1.25rem;
  font-weight: bold;
  padding: 0.5rem 0 0.25rem;
  color: ${colors.black600};
`
const Signup = () => {
  const [currentUser, setCurrentUser] = useState(getCurrentUserInfo())
  const [Menu, setMenu] = useRecoilState(menuID)
  const [emailValid, setEmailValid] = useState(false)
  const [passwordValid, setPasswordValid] = useState(false)
  const [pwCheckValid, setPwCheckValid] = useState(false)
  const [nameValid, setNameValid] = useState(false)
  const [snackOpen, setSnackOpen] = useState(false)
  const [snackMessage, setSnackMessage] = useState(false)
  const [dialogOpen, setDialogOpen] = useState(false)
  const passwordRef = useRef(null)

  const handleSnackClose = useCallback(() => {
    setSnackOpen(false)
  }, [])

  const handleDialogClose = useCallback(() => {
    setDialogOpen(false)
    setMenu("home")
  }, [])

  const handleSignupSubmit = useCallback(
    event => {
      event.preventDefault()
      if (emailValid && passwordValid && pwCheckValid && nameValid) {
        const email = event.target.email.value
        const password = event.target.password.value
        const name = event.target.name.value
        signupRequest(email, password, name)
          .then(response => {
            setDialogOpen(true)
          })
          .catch(error => {
            setSnackMessage(error.response.data.message)
            setSnackOpen(true)
          })
      }
    },
    [emailValid, passwordValid, pwCheckValid, nameValid],
  )

  const handleChange = useCallback((event, setValidate, validator, args) => {
    if (typeof validator === "function") {
      const value = event.target.value
      let isValid = false
      if (args) {
        isValid = validator(value, ...args)
      } else {
        isValid = validator(value)
      }
      setValidate(isValid)
    }
  }, [])

  return (
    <Layout isMap={false} currentUser={currentUser} setCurrentUser={setCurrentUser}>
      <NotMapBox>
        <MenuName>????????????</MenuName>
        <MainTitle>
          <span>???????????? ?????? ?????????</span>???
          <br />
          ?????? ???????????????!
        </MainTitle>
        <DescBox>
          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              maxWidth: "520px",
              width: "100%",
            }}
            onSubmit={handleSignupSubmit}
          >
            <FormControl>
              <Comment> &#127828; ???????????? ??????????????????</Comment>
              <TextField
                autoFocus
                margin="dense"
                id="email"
                label="Email"
                type="email"
                fullWidth
                variant="standard"
                error={!emailValid}
                onChange={e => handleChange(e, setEmailValid, validation.emailValidation)}
                helperText={!emailValid && "????????? ????????? ????????? ????????????"}
              />
              <br />
              <Comment> &#10068; ??????????????? ??????????????????</Comment>
              <TextField
                autoFocus
                margin="dense"
                id="password"
                label="Password"
                type="password"
                fullWidth
                variant="standard"
                inputRef={passwordRef}
                error={!passwordValid}
                onChange={e => handleChange(e, setPasswordValid, validation.passwordValidation)}
                helperText={
                  !passwordValid &&
                  "??????, ??????, ???????????? ????????? 8?????? or ??????, ?????? ????????? 10????????? ??????????????????"
                }
              />
              <br />
              <Comment> &#10068; ??????????????? ?????? ??? ??????????????????</Comment>
              <TextField
                autoFocus
                margin="dense"
                id="passwordCheck"
                label="Password Check"
                type="password"
                fullWidth
                variant="standard"
                error={!pwCheckValid}
                onChange={e =>
                  handleChange(e, setPwCheckValid, validation.passwordCheckValidation, [
                    passwordRef.current.value,
                  ])
                }
                helperText={!pwCheckValid && "????????????????????? ???????????? ????????????."}
              />
              <br />
              <Comment> &#128566; ????????? ??????????????????</Comment>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Name"
                type="text"
                fullWidth
                variant="standard"
                error={!nameValid}
                onChange={e => handleChange(e, setNameValid, validation.nameValidation)}
                helperText={!nameValid && "????????? ????????? ??????????????????"}
              />
              <br />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  "& > *": {
                    m: 1,
                  },
                }}
              >
                <Button type="submit">????????????</Button>
              </Box>
            </FormControl>
          </Box>
          <ErrorToast open={snackOpen} handleClose={handleSnackClose} message={snackMessage} />
          <Dialog
            open={dialogOpen}
            onClose={handleDialogClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{"???????????? ??????"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                ????????? ???????????????. ???????????? ????????? ????????? ????????????.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleDialogClose} autoFocus>
                ??????
              </Button>
            </DialogActions>
          </Dialog>
        </DescBox>
      </NotMapBox>
    </Layout>
  )
}

export default Signup
