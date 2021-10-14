import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import StyledDialog from "../styles/dialog"
import Button from "@mui/material/Button"

const MyDialog = ({ onChange, open, ref, children }) => {
  const handleClose = () => {
    onChange()
  }
  return (
    <StyledDialog
      open={open}
      onClose={handleClose}
      scroll="paper"
      aria-labelledby="post-title"
      aria-describedby="post-description"
    >
      <DialogContent dividers="paper">
        <DialogContentText id="post-description" ref={ref} tabIndex={-1} child>
          {children}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>취소</Button>
        <Button onClick={handleClose}>완료</Button>
      </DialogActions>
    </StyledDialog>
  )
}

export default MyDialog
