import Layout from "../components/layout/Layout"
import { NotMapBox } from "../styles/container"
import { useCallback, useEffect, useState } from "react"
import { wholeBoardRequest } from "../apis/boardApi"
import ImageCard from "../components/ImageCard"
import { ImageList } from "@mui/material"
import PostDialog from "../components/PostDialog"

const Board = () => {
  const [postList, setPostList] = useState(null)

  useEffect(() => {
    wholeBoardRequest().then(data => {
      const posts = data.posts.sort((a, b) => {
        // 최근 아이디 순으로 배열 정렬 후 게시
        return a.id > b.id ? -1 : 1
      })
      setPostList(posts)
    })
  }, [])

  const updatePost = useCallback(data => {
    setPostList(data)
  }, [])

  return (
    <Layout isMap={false}>
      <NotMapBox>
        <ImageList sx={{ width: "100%" }} cols={3}>
          <PostDialog postList={postList} updatePost={updatePost} />
          {postList && <ImageCard postList={postList} updatePost={updatePost} />}
        </ImageList>
      </NotMapBox>
    </Layout>
  )
}

export default Board
