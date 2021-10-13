import { Box, Divider, Paper, Chip } from "@mui/material"
import { styled as styledMUI } from "@mui/material/styles"
import FaceRoundedIcon from "@mui/icons-material/FaceRounded"
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded"
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded"
import styled from "styled-components"
import { commentsData } from "../data/dummy"
import { useState } from "react"
import { PostBox } from "../styles/container"

export const MyPaper = styledMUI(Paper)`
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
  const commentsList = data.map(comment => {
    const { user, location1, location2, food, image, post, like } = comment
    const isLiked = () => {
      return false
    }

    return (
      <MyPaper elevation={0}>
        <FaceRoundedIcon />
        {user}
        <MyChip
          variant="outlined"
          color="primary"
          size="small"
          label={`${location1}/${location2}`}
        />
        <MyChip variant="outlined" color="primary" size="small" label={food} />
        {post}
        <LikeBox>{isLiked() ? <FavoriteRoundedIcon /> : <FavoriteBorderRoundedIcon />}</LikeBox>
        {like.length}
      </MyPaper>
    )
  })
  return <>{commentsList && commentsList}</>
}
export default Comments
