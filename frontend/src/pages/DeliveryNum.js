import { useState } from "react"
import Layout from "../components/layout/Layout"
import AnalysisContents from "../components/skeleton/AnalysisContents"

const DeliveryNum = () => {
  const [pickedGeoData, setPickedGeoData] = useState()

  const imageRootUrl = process.env.REACT_APP_BACKEND_URL
  return (
    <Layout changePickedRegion={setPickedGeoData}>
      {
        pickedGeoData && <AnalysisContents data={pickedGeoData} />
      }
    </Layout>
  )
}

export default DeliveryNum
