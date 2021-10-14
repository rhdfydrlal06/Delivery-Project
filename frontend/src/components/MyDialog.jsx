import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import StyledDialog from "../styles/dialog"
import Button from "@mui/material/Button"

const MyDialog = ({ onClose, open, ref, children }) => {
  const handleCancel = () => {
    // clickCancel()
  }
  const handleSubmit = () => {
    // clickSubmit()
  }

  const handleClose = () => {
    onClose()
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
        <Button onClick={handleCancel}>취소</Button>
        <Button onClick={handleSubmit}>완료</Button>
      </DialogActions>
    </StyledDialog>
  )
}

export default MyDialog
