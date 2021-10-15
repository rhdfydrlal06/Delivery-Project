import { useState, useEffect, useRef } from "react"
import StyledDialog from "../styles/dialog"
import { DialogContent, DialogContentText } from "@mui/material"
import { Thumnail } from "../styles/postContainer"
import DetailPost from "./DetailPost"

const DetailDialog = ({ postData, image }) => {
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const detailRef = useRef(null)

  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = detailRef
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
      <Thumnail url={image} onClick={handleClickOpen} />
      <StyledDialog
        open={open}
        onClose={handleClose}
        scroll="paper"
        aria-labelledby="post-title"
        aria-describedby="post-description"
      >
        <DialogContent dividers="paper">
          <DialogContentText id="post-description" ref={detailRef} tabIndex={-1} child>
            <DetailPost postData={postData} handleClose={handleClose} />
          </DialogContentText>
        </DialogContent>
      </StyledDialog>
    </div>
  )
}

export default DetailDialog
