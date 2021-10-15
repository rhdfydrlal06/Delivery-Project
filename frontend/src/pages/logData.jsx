import Layout from "../components/layout/Layout"
import LogAnalysisContents from "../components/skeleton/LogAnalysisContents"
import React, { useState, useRef, useCallback } from "react"
import { DescBox, MainTitle, MenuName } from "../components/skeleton/AnalysisContents"
import { ContentsBox, NotMapBox } from "../styles/container"


const LogData = () => {
  return (
    <Layout>
      <NotMapBox>
        <LogAnalysisContents></LogAnalysisContents>
      </NotMapBox>
    </Layout>
  )
}

export default LogData