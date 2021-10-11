import { Box, Divider, Paper, Chip } from "@mui/material"
import { styled as styledMUI } from "@mui/material/styles"
import FaceRoundedIcon from "@mui/icons-material/FaceRounded"
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded"
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded"
import styled from "styled-components"
import { commentsData } from "../data/dummy"
import { useState } from "react"

const MyPaper = styledMUI(Paper)`
  padding: 1rem;
  margin: 1rem 0;
`

const MyChip = styledMUI(Chip)`
  margin: 0.2rem;
`

const LikeBox = styled.div`
  cursor: pointer;
  display: inline-block;
`

const Comments = ({ data }) => {
  const currUser = "d"
  const commentsList = data.map(comment => {
    const { nick, city, town, category, text, likedNum, likedPeople } = comment
    const isLiked = () => likedPeople.includes(currUser)

    return (
      <>
        <MyPaper elevation={0}>
          <FaceRoundedIcon />
          {nick}
          <MyChip variant="outlined" color="primary" size="small" label={`${city}/${town}`} />
          <MyChip variant="outlined" color="primary" size="small" label={category} />
          {text}
          <LikeBox>{isLiked() ? <FavoriteRoundedIcon /> : <FavoriteBorderRoundedIcon />}</LikeBox>
          {likedNum}
        </MyPaper>
        <Divider />
      </>
    )
  })
  return <Box>{commentsList && commentsList}</Box>
}
export default Comments
