import { useState, useEffect, useRef } from "react"
import EditPost from "./EditPost"
import StyledDialog from "../styles/dialog"
import { IconButton, DialogContent, DialogContentText } from "@mui/material"
import EditIcon from "@mui/icons-material/Edit"

const EditDialog = ({ postData, updatePost }) => {
  const [open, setOpen] = useState(false)

  const handleClickOpen = e => {
    e.stopPropagation()
    setOpen(true)
    console.log("editdialog open")
  }

  const editRef = useRef(null)

  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = editRef
      if (descriptionElement !== null) {
        descriptionElement.focus()
      }
    }
  }, [open])

  const handleClose = () => {
    setOpen(false)
    console.log("edit close")
  }

  return (
    <div>
      <IconButton
        sx={{ color: "rgba(255, 255, 255, 0.65)" }}
        aria-label={`id`}
        onClick={handleClickOpen}
      >
        <EditIcon />
      </IconButton>
      <StyledDialog
        open={open}
        onClose={handleClose}
        scroll="paper"
        aria-labelledby="post-title"
        aria-describedby="post-description"
      >
        <DialogContent dividers="paper">
          <DialogContentText id="post-description" ref={editRef} tabIndex={-1} child>
            <EditPost postData={postData} handleClose={handleClose} updatePost={updatePost} />
          </DialogContentText>
        </DialogContent>
      </StyledDialog>
    </div>
  )
}

export default EditDialog
