import { useState, useEffect, useRef } from "react"
import MyDialog from "./MyDialog"
import EditPost from "./EditPost"
import { styled } from "@mui/system"
import { Button } from "@mui/material"
import IconButton from "@mui/material/IconButton"
import EditIcon from "@mui/icons-material/Edit"

const EditDialog = ({ postData, updatePost }) => {
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
      <IconButton
        sx={{ color: "rgba(255, 255, 255, 0.54)" }}
        aria-label={`edit ${postData.id}`}
        onClick={handleClickOpen}
      >
        <EditIcon />
      </IconButton>
      <MyDialog open={open} onClose={handleClose} ref={descriptionElementRef}>
        <EditPost postData={postData} popClose={handleClose} updatePost={updatePost} />
      </MyDialog>
    </div>
  )
}

export default EditDialog

const AddButton = styled(Button)`
  width: 100%;
  height: 100%;
`
