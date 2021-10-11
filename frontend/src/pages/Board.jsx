import Layout from "../components/layout/Layout"
import { ContentsBox } from "../styles/container"
import DropBox from "../components/DropBox"
import { Autocomplete, Divider, Paper, TextField } from "@mui/material"
import { Button } from "@mui/material"
import { useCallback, useState, useEffect, useRef } from "react"
import Comments from "../components/Comments"
import dummy, { commentsData } from "../data/dummy"

const Board = () => {
  const [inputValue, setInputValue] = useState(null)
  const [inputText, setInputText] = useState(null)
  const [commentData, setCommentData] = useState(commentsData)
  let textInput = useRef(null)

  const handleSelectChange = useCallback(
    value => {
      setInputValue(value)
      console.log("comment change", value)
    },
    [commentData],
  )

  const handleTextChange = useCallback(
    e => {
      setInputText(e.target.value)
    },
    [inputText],
  )

  const handleSubmit = useCallback(() => {
    const comment = {
      nick: "익명",
      city: inputValue.city.label,
      town: inputValue.town.label,
      category: inputValue.category,
      text: inputText,
      likedNum: 3,
      likedPeople: ["a", "c", "d"],
    }
    setCommentData([comment, ...commentData])
    setInputText(null)
  }, [inputValue, inputText])

  useEffect(() => {
    console.log("check", inputValue, inputText)
  }, [inputValue, inputText])

  return (
    <Layout>
      <ContentsBox>
        <DropBox options={dummy} onChange={handleSelectChange} />
        <TextField
          name="text"
          id="text"
          multiline
          rows={3}
          placeholder="내용을 입력해주세요"
          value={inputText}
          onChange={handleTextChange}
          required
          ref={textInput}
        />
        <Button onClick={handleSubmit} variant="outlined">
          글쓰기
        </Button>
        <Divider />
        <Comments data={commentData} />
      </ContentsBox>
    </Layout>
  )
}

export default Board
