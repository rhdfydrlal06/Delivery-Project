import Layout from "../components/layout/Layout"
import { NotMapBox, PostContainer } from "../styles/container"
import { useCallback, useEffect, useState } from "react"
import Comments from "../components/Comments"
import { commentsData } from "../data/dummy"
import AddPost from "../components/AddPost"
import PopPost from "../components/PopPost"
import styled from "styled-components"
import { wholeBoardRequest } from "../apis/boardApi"

const Board = () => {
  useEffect(() => {
    wholeBoardRequest().then(data => {
      console.log(data.posts)
      const comments = data.posts.sort((a, b) => {
        return a.id > b.id ? -1 : 1
      })
      console.log("comments", comments)
      setCommentData(comments)
    })
    console.log(commentData)
  }, [isPop, commentData])

  const [commentData, setCommentData] = useState(null)
  const [isPop, setIsPop] = useState(false)

  const onChange = (comment, commentData) => {
    // setCommentData([comment, ...commentData])
  }

  const handlePop = useCallback(() => {
    setIsPop(!isPop)
  }, [isPop])

  return (
    <Layout isMap={false}>
      {isPop && (
        <PopBack onClick={handlePop}>
          <PopPost handleComment={onChange} commentData={commentData} popClose={handlePop} />
        </PopBack>
      )}
      <NotMapBox>
        <PostContainer>
          <AddPost onClick={handlePop} />
          {commentData && <Comments data={commentData} />}
        </PostContainer>
      </NotMapBox>
    </Layout>
  )
}

export default Board

const PopBack = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 1;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`
