import { useCallback } from "react"
import { Button } from "@mui/material"

const AddPost = ({ onClick }) => {
  const handleClick = useCallback(() => {
    onClick()
  }, [])

  return (
    <>
      <div>
        <Button onClick={handleClick} variant="outlined">
          +
        </Button>
      </div>
    </>
  )
}

export default AddPost
