import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import StyledDialog from "../styles/dialog"
import Button from "@mui/material/Button"
import { useState } from "react"

const MyDialog = ({ onClose, open, ref, children }) => {
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
    </StyledDialog>
  )
}

export default MyDialog
