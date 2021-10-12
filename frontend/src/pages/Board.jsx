import Layout from "../components/layout/Layout"
import { NotMapBox, PostContainer } from "../styles/container"
import { useState } from "react"
import Comments from "../components/Comments"
import { commentsData } from "../data/dummy"
import AddPost from "../components/AddPost"
import PopPost from "../components/PopPost"

const Board = () => {
  const [commentData, setCommentData] = useState(commentsData)

  const onChange = (comment, commentData) => {
    setCommentData([comment, ...commentData])
  }

  return (
    <Layout isMap={false}>
      <NotMapBox>
        <PostContainer>
          <AddPost />
          <Comments data={commentData} />
        </PostContainer>
        <PopPost handleComment={onChange} commentData={commentData} />
      </NotMapBox>
    </Layout>
  )
}

export default Board
