import { useState, useRef, useEffect, useCallback } from "react"
import dummy from "../data/dummy"
import DropBox from "./DropBox"
import { addBoardRequest } from "../apis/boardApi"
import postValueCheck from "../utils/postValueCheck"
import {
  AddPostContainer,
  ButtonBox,
  FileBox,
  MyTextField,
  MyButton,
} from "../styles/addPostContainer"
import updatePostList from "../utils/updatePostList"

// location1: 시도 이름
// location2: 시군구 이름
// food: 음식 종류
// post: 글 내용
// image: 이미지 url
// user: 작성자

const AddPost = ({ popClose, updatePost }) => {
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
    [inputValue],
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

  const clickSubmit = useCallback(() => {
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
        updatePostList(updatePost)
      })
      .catch(error => {
        console.error(error)
      })

    popClose()
  }, [inputValue, inputText, inputImg])

  const clickCancel = useCallback(() => {
    popClose()
  }, [inputValue, inputText, inputImg])

  return (
    <AddPostContainer>
      <DropBox options={dummy} onChange={handleSelectChange} />
      <FileBox>
        <input
          name="img"
          type="file"
          accept="image/jpg,image/jpeg,image/png"
          onChange={handleImgChange}
        />
      </FileBox>
      <MyTextField
        name="text"
        id="text"
        multiline
        rows={3}
        placeholder="내용을 입력해주세요"
        value={inputText}
        onChange={handleTextChange}
        required
        variant="standard"
        sx={{ height: "100%" }}
      />
      <ButtonBox>
        <MyButton onClick={clickCancel} variant="outlined">
          취소
        </MyButton>
        <MyButton onClick={clickSubmit} variant="outlined">
          글쓰기
        </MyButton>
      </ButtonBox>
    </AddPostContainer>
  )
}

export default AddPost
