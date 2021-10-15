import { useState, useCallback } from "react"
import { addBoardRequest } from "../apis/boardApi"
import postValueCheck from "../utils/postValueCheck"
import { ButtonBox, MyButton } from "../styles/addPostContainer"
import updatePostList from "../utils/updatePostList"

import { CardHeader, CardMedia, CardContent, Typography } from "@mui/material"

// location1: 시도 이름
// location2: 시군구 이름
// food: 음식 종류
// post: 글 내용
// image: 이미지 url
// user: 작성자

const DetailPost = ({ handleClose, postData }) => {
  const [item, setItem] = useState(postData)
  const { id, user, location1, location2, food, image, post } = item
  console.log("detail", item)

  const clickCancel = useCallback(e => {
    e.stopPropagation()
    handleClose()
  }, [])

  return (
    <>
      <CardHeader title={user ? user : "익명"} subheader={`${location1}/${location2}, ${food}`} />
      <CardMedia component="img" width="100%" image={image} alt={id} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {post}
        </Typography>
      </CardContent>
      <ButtonBox>
        <MyButton onClick={clickCancel} variant="outlined">
          닫기
        </MyButton>
      </ButtonBox>
    </>
  )
}

export default DetailPost
