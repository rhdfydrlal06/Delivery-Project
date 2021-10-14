import { useState, useEffect, useRef } from "react"
import MyDialog from "./MyDialog"
import AddPost from "./AddPost"
import { styled } from "@mui/system"
import { Button } from "@mui/material"

const PostDialog = ({ postList, updatePost }) => {
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
      <MyDialog open={open} onClose={handleClose} ref={descriptionElementRef}>
        <AddPost postList={postList} popClose={handleClose} updatePost={updatePost} />
      </MyDialog>
    </div>
  )
}

export default PostDialog

const AddButton = styled(Button)`
  width: 100%;
  height: 100%;
`
