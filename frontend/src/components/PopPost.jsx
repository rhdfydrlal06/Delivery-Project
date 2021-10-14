import { useState, useRef, useEffect, useCallback } from "react"
import dummy from "../data/dummy"
import DropBox from "./DropBox"
import { TextField, Button } from "@mui/material"
import styled from "styled-components"
import { addBoardRequest } from "../apis/boardApi"

// location1: 시도 이름
// location2: 시군구 이름
// food: 음식 종류
// post: 글 내용
// image: 이미지 url
// user: 작성자

const PopPost = ({ commentData, handleComment, popClose }) => {
  const [inputValue, setInputValue] = useState({
    city: null,
    town: null,
    category: null,
  })
  const [inputText, setInputText] = useState(null)
  const [inputImg, setInputImg] = useState("")

  const handleSelectChange = useCallback(
    value => {
      const { city, town, category } = value
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

  const checkFileType = fileType => {
    const correctType = ["png", "jpg", "jpeg"]
    return correctType.includes(fileType)
  }

  const isFile = files => {
    return files.length === 0 ? true : false
  }

  const handleImgChange = useCallback(
    e => {
      const files = e.target.files
      if (isFile(files)) {
        console.log("no file")
        return
      }
      const img = files[0]
      const fileType = img.name.split(".").pop().toLowerCase()
      if (!checkFileType(fileType)) {
        console.log("incorrect type of file")
        return
      }
      console.log(img)
      setInputImg(img)
    },
    [inputImg],
  )

  const handleSubmit = useCallback(() => {
    const formData = new FormData()
    formData.append("image", inputImg)
    formData.append("location1", inputValue.city.label)
    formData.append("location2", inputValue.town.label)
    formData.append("food", inputValue.category)
    formData.append("post", inputText)

    addBoardRequest(formData)
      .then(data => {
        console.log(data)
      })
      .catch(error => {
        console.error(error)
      })

    setInputText("")
    popClose()
  }, [inputValue, inputText])

  const handleClose = useCallback(() => {
    popClose()
  }, [])

  const preventClose = useCallback(e => {
    e.stopPropagation()
  }, [])

  return (
    <>
      <PopPostBox onClick={preventClose}>
        <Button onClick={handleClose} variant="outlined">
          x
        </Button>
        <DropBox options={dummy} onChange={handleSelectChange} />
        <FileBox>
          <input
            name="img"
            type="file"
            accept="image/jpg,image/jpeg,image/png"
            onChange={handleImgChange}
          />
        </FileBox>
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
      </PopPostBox>
    </>
  )
}

export default PopPost

const PopPostBox = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  width: 50vw;
  height: 40vw;
  padding: 1rem;
  z-index: 10;
  position: absolute;
  background-color: white;
  opacity: 1;
`

const FileBox = styled.div`
  width: 100%;
  min-height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`
