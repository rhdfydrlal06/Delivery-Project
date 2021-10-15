import Layout from "../components/layout/Layout"
import LogAnalysisContents from "../components/skeleton/LogAnalysisContents"
import React, { useState, useEffect } from "react"
import { NotMapBox } from "../styles/container"

const LogData = () => {

  return (
    <Layout isMap={false}>
      <NotMapBox>
        <LogAnalysisContents />
      </NotMapBox>
    </Layout>
  )
}

export default LogData
