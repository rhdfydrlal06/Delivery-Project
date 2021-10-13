import { useCallback } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';

import { useRecoilState } from "recoil"
import menuID from "../recoil/atom"



const LoginModal = ({ open, setOpen }) => {
  const [value, setValue] = useRecoilState(menuID)
  const handleClose = useCallback(() => {
    setOpen(false);
  }, [])

  const handleSignup = useCallback(() => {
    setOpen(false);
    setValue("signup")
  }, [value])

  return (
    <Dialog
      fullWidth={true}
      maxWidth="xs"
      open={open}
      onClose={handleClose}
    >
      <DialogTitle>Log-in</DialogTitle>
      <DialogContent>
        <DialogContentText>
          이메일과 비밀번호를 입력해주세요.
        </DialogContentText>
        <Box
          noValidate
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            m: 'auto',
            width: '80%',
          }}
        >
          <FormControl sx={{ mt: 2, minWidth: 120 }}>
            <TextField
              autoFocus
              margin="dense"
              id="email"
              label="Email"
              type="email"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              margin="dense"
              id="password"
              label="Password"
              type="password"
              fullWidth
              variant="standard"
            />
          </FormControl>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button>로그인</Button>
        <Button onClick={handleSignup}>회원가입</Button>
        <Button onClick={handleClose}>Cancle</Button>
      </DialogActions>
    </Dialog>
  );
}

export default LoginModal
