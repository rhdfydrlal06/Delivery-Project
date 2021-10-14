import { useState, useRef, useEffect, useCallback } from "react"
import dummy from "../data/dummy"
import DropBox from "./DropBox"
import { TextField, Button } from "@mui/material"
import styled from "styled-components"
import { addBoardRequest, wholeBoardRequest } from "../apis/boardApi"
import postValueCheck from "../utils/postValueCheck"

// location1: 시도 이름
// location2: 시군구 이름
// food: 음식 종류
// post: 글 내용
// image: 이미지 url
// user: 작성자

const PopPost = ({ postList, popClose, updatePost }) => {
  const [inputValue, setInputValue] = useState({
    location1: null,
    location2: null,
    food: null,
  })
  const [inputText, setInputText] = useState(null)
  const [inputImg, setInputImg] = useState(null)

  const handleSelectChange = useCallback(
    value => {
      const { location1, location2, food } = value
      setInputValue({ ...inputValue, location1, location2, food })
    },
    [postList],
  )

  const handleTextChange = useCallback(
    e => {
      setInputText(e.target.value)
    },
    [inputText],
  )

  const handleImgChange = useCallback(
    e => {
      const img = e.target.files[0]
      setInputImg(img)
    },
    [inputImg],
  )

  const handleSubmit = useCallback(() => {
    const check = postValueCheck(inputValue, inputText, inputImg)

    if (!check) return

    const formData = new FormData()
    formData.append("image", inputImg)
    formData.append("location1", inputValue.location1)
    formData.append("location2", inputValue.location2)
    formData.append("food", inputValue.food)
    formData.append("post", inputText)

    addBoardRequest(formData)
      .then(data => {
        console.log(data)
      })
      .then(() => {
        wholeBoardRequest().then(data => {
          const posts = data.posts.sort((a, b) => {
            return a.id > b.id ? -1 : 1
          })
          updatePost(posts)
        })
      })
      .catch(error => {
        console.error(error)
      })

    popClose()
  }, [inputValue, inputText, inputImg])

  const q = useCallback(() => {
    popClose()
  }, [inputValue, inputText, inputImg])

  const preventClose = useCallback(
    e => {
      e.stopPropagation()
    },
    [inputValue, inputText, inputImg],
  )

  return (
    <>
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
      <Button onClick={handleClose} variant="outlined">
        취소
      </Button>
      <Button onClick={handleSubmit} variant="outlined">
        글쓰기
      </Button>
    </>
  )
}

export default PopPost

export const PopPostBox = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  width: 50vw;
  height: 60%;
  padding: 1rem;
  z-index: 10;
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
