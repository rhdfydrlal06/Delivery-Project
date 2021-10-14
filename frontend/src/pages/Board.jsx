import Layout from "../components/layout/Layout"
import { NotMapBox, PostContainer } from "../styles/container"
import { useCallback, useEffect, useState } from "react"
import Posts from "../components/Posts"
import AddPost from "../components/AddPost"
import styled from "styled-components"
import { styled as styledMUI } from "@mui/system"
import { Button } from "@mui/material"
import { wholeBoardRequest } from "../apis/boardApi"
import { isValue } from "../utils/postValueCheck"

const Board = () => {
  const [postList, setPostList] = useState(null)
  const [isPop, setIsPop] = useState(false)
  const [isDetail, setIsDetail] = useState(-1)

  useEffect(() => {
    wholeBoardRequest().then(data => {
      const posts = data.posts.sort((a, b) => {
        // 최근 아이디 순으로 배열 정렬 후 게시
        return a.id > b.id ? -1 : 1
      })
      setPostList(posts)
    })
  }, [])

  const handlePop = useCallback(() => {
    setIsPop(!isPop)
  }, [isPop])

  const handleDetail = useCallback(() => {
    setIsDetail(!isDetail)
  }, [isDetail])

  const handlePostClick = useCallback(
    id => {
      const postData = postList.find(item => item.id === id)
      console.log(postData)
      return postData
    },
    [postList],
  )

  const updatePost = useCallback(data => {
    setPostList(data)
  }, [])

  return (
    <Layout isMap={false}>
      {isPop && (
        <PopBack onClick={handlePop}>
          <AddPost postList={postList} popClose={handlePop} updatePost={updatePost} />
        </PopBack>
      )}
      {/* {isDetail && (
        <PopBack onClick={handleDetail}>
          <DetailPost handleComment={onChange} postList={postList} popClose={handleDetail} />
        </PopBack>
      )} */}
      <NotMapBox>
        <PostContainer>
          <AddButton onClick={handlePop} variant="outlined">
            +
          </AddButton>
          {postList && <Posts data={postList} handlePostClick={handlePostClick} />}
        </PostContainer>
      </NotMapBox>
    </Layout>
  )
}

export default Board

const PopBack = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  overflow: hidden;
`

const AddButton = styledMUI(Button)`
  width: 100%;
  height: 100%;
`
