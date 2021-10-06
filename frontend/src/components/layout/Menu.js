import { useEffect } from "react"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Box from "@mui/material/Box"
import { useHistory } from "react-router"
import adress from "../../data/adress"
import menuID from "../../recoil/atom"
import { useRecoilState } from "recoil"

const Menu = () => {
  const history = useHistory()
  const [value, setValue] = useRecoilState(menuID)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  useEffect(() => {
    history.push(adress[value])
  }, [value])

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: "100%",
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        sx={{ borderRight: 1, borderColor: "divider", width: "100%" }}
        scrollButtons={false}
      >
        <Tab label="서비스 소개" />
        <Tab label="배달 데이터 분석" />
        <Tab label="게시판" />
      </Tabs>
    </Box>
  )
}

export default Menu
