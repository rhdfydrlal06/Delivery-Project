import { LogoBox } from "../../styles/Container"
import { useHistory } from "react-router"
import menuID from "../../recoil/atom"
import { useRecoilState } from "recoil"
import { useEffect } from "react"
import styled from "styled-components"

const Img = styled.img`
  max-height: 50px;
`

const Header = () => {
  const history = useHistory()
  const [value, setValue] = useRecoilState(menuID)

  const handleClick = () => {
    setValue("home")
    console.log("click")
  }

  useEffect(() => {
    console.log("logo change", value)
  }, [value])

  return (
    <LogoBox>
      <Img src="/img/delivery_logo.png" alt="logo" height="100%" onClick={handleClick} />
    </LogoBox>
  )
}

export default Header
