import { useState, useEffect, useRef } from "react"
import Button from "@mui/material/Button"
import MyDialog from "./MyDialog"
import { AddButton } from "../pages/Board"

const PostDialog = ({ clickCancel, clickSubmit, children }) => {
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const descriptionElementRef = useRef(null)

  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef
      if (descriptionElement !== null) {
        descriptionElement.focus()
      }
    }
  }, [open])

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <AddButton variant="outlined" onClick={handleClickOpen}>
        +
      </AddButton>
      <MyDialog open={open} onChange={handleClose} ref={descriptionElementRef}>
        {children}
      </MyDialog>
    </div>
  )
}

export default PostDialog
