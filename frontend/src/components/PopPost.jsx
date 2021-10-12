import { useState, useRef, useEffect, useCallback } from "react"
import dummy from "../data/dummy"
import DropBox from "./DropBox"
import { TextField, Button } from "@mui/material"

const PopPost = ({ commentData, handleComment }) => {
  const [inputValue, setInputValue] = useState({
    city: null,
    town: null,
    category: null,
    img: null,
  })
  const [inputText, setInputText] = useState(null)

  const handleSelectChange = useCallback(
    value => {
      const { city, town, category } = value
      console.log("fromDrop", value, city)
      console.log("now value", { ...inputValue })
      setInputValue({ ...inputValue, city, town, category })
    },
    [commentData],
  )

  const handleTextChange = useCallback(
    e => {
      setInputText(e.target.value)
    },
    [inputText],
  )

  const handleImgChange = useCallback(e => {
    const img = e.target.files[0]
    const fileType = img.name.split(".")
    console.log("type", fileType)
    // setInputValue({ ...inputValue }, fileType)
  })

  const handleSubmit = useCallback(() => {
    const comment = {
      nick: "익명",
      city: inputValue.city.label,
      town: inputValue.town.label,
      category: inputValue.category,
      text: inputText,
      img: inputValue.img,
      likedNum: 3,
      likedPeople: ["a", "c", "d"],
    }
    handleComment(comment, commentData)
    setInputText(null)
  }, [inputValue, inputText])

  useEffect(() => {
    console.log("check", inputValue, inputText)
  }, [inputValue, inputText])

  return (
    <div>
      <DropBox options={dummy} onChange={handleSelectChange} />
      <input
        name="img"
        type="file"
        accept="image/jpg,image/jpeg,image/png"
        onChange={handleImgChange}
      />
      <TextField
        name="text"
        id="text"
        multiline
        rows={3}
        placeholder="내용을 입력해주세요"
        value={inputText}
        onChange={handleTextChange}
        required
      />
      <Button onClick={handleSubmit} variant="outlined">
        글쓰기
      </Button>
    </div>
  )
}

export default PopPost
