import Layout from "../components/layout/Layout"
import LogAnalysisContents from "../components/skeleton/LogAnalysisContents"
import React, { useState, useRef, useCallback } from "react"
import { DescBox, MainTitle, MenuName } from "../components/skeleton/AnalysisContents"
import { ContentsBox, NotMapBox } from "../styles/container"

import { getCurrentUserInfo } from "../apis/authApi"

const LogData = () => {
  const [currentUser, setCurrentUser] = useState(getCurrentUserInfo())
  return (
    <Layout currentUser={currentUser} setCurrentUser={setCurrentUser}>
      <NotMapBox>
        <LogAnalysisContents></LogAnalysisContents>
      </NotMapBox>
    </Layout>
  )
}

export default LogData
