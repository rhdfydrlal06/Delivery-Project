import Layout from "../components/layout/Layout"
import { ContentsBox } from "../styles/container"
import DropBox from "../components/DropBox"

const Board = () => {
  return (
    <Layout>
      <ContentsBox>
        <DropBox />
      </ContentsBox>
    </Layout>
  )
}

export default Board
