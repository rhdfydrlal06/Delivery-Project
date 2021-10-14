import { Box, Divider, Paper, Chip } from "@mui/material"
import { styled as styledMUI } from "@mui/material/styles"
import FaceRoundedIcon from "@mui/icons-material/FaceRounded"
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded"
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded"
import styled from "styled-components"
import { commentsData } from "../data/dummy"
import { useState } from "react"
import { PostBox } from "../styles/container"

const Comments = ({ data }) => {
  const commentsList = data.map(comment => {
    const { user, location1, location2, food, image, post, like } = comment
    const isLiked = () => {
      return false
    }

    return (
      <PaperBox>
        <PaperWrapper>
          <Thumnail>
            <ThumnailImg>{/* <Img src={image} /> */}</ThumnailImg>
            <ThumnailInfo>
              <FaceRoundedIcon />
              {user ? user : "익명"}
              <LikeBox>
                {isLiked() ? <FavoriteRoundedIcon /> : <FavoriteBorderRoundedIcon />}
              </LikeBox>
              {like}
              <TextBox>
                <MyChip
                  variant="outlined"
                  color="primary"
                  size="small"
                  label={`${location1}/${location2}`}
                />
                <MyChip variant="outlined" color="primary" size="small" label={food} />
                {post}
              </TextBox>
            </ThumnailInfo>
          </Thumnail>
        </PaperWrapper>
      </PaperBox>
    )
  })
  return commentsList
}
export default Comments

const PaperBox = styled.div`
  width: 100%;
  position: relative;
`

const PaperWrapper = styled.div`
  padding-bottom: 100%;
`

export const Thumnail = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  border: 1px solid gray;
`

const ThumnailInfo = styled.div`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  position: absolute;
`

const TextBox = styled.div`
  width: 100%;
  min-height: 5rem;
  background-color: rgba(0, 0, 0, 0.1);
`

const MyChip = styledMUI(Chip)`
  margin: 0.2rem;
`

const LikeBox = styled.div`
  cursor: pointer;
  display: inline-block;
`
const ThumnailImg = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
`

const Img = styled.img`
  object-fit: cover;
`
