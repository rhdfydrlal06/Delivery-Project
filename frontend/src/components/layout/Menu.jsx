import * as React from 'react';
import adress from "../../data/adress"
import menuID from "../../recoil/atom"
import { MyTab } from "../../styles/menu"  
import { useEffect, memo } from "react"
import { useHistory } from "react-router"
import { useRecoilState } from "recoil"
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Tabs from "@mui/material/Tabs"
import Box from "@mui/material/Box"


const drawerWidth = 240;

const Menu = () => {
  const history = useHistory()
  const [value, setValue] = useRecoilState(menuID)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  useEffect(() => {
    history.push(adress[value])
    console.log(adress[value])
  }, [value])

  useEffect(() => {
    console.log("menuchange")
  })

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box'},
      }}
    >
      <Toolbar />
        <MyTab value="home" label="홈" />
        <Tabs
          orientation='vertical'
          variant='scrollable'
          value={value}
          onChange={handleChange}
          sx={{ borderRight: 0, borderColor: "divider", width: "100%"}}
          scrollButtons={false}
        >
          <MyTab value="intro" label="서비스 소개" />
          <MyTab value="analysis" label="배달 데이터 분석" />
          <MyTab value="board" label="게시판" />       
        </Tabs>
    </Drawer>
  )
}


export default memo(Menu)
