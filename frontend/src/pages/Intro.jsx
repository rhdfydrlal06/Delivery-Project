import Layout from "../components/layout/Layout"
import AnalysisContents from "../components/skeleton/AnalysisContents"
import { ContentsBox } from "../styles/Container"

const Intro = () => {
  return (
    <Layout>
      <AnalysisContents useButton={false} />
    </Layout>
  )
}

export default Intro
