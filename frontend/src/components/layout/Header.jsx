import { LogoBox } from "../../styles/Container"
import { useHistory } from "react-router"
import menuID from "../../recoil/atom"
import { useRecoilState } from "recoil"
import { useEffect } from "react"

const Header = () => {
  const history = useHistory()
  const [value, setValue] = useRecoilState(menuID)

  const handleClick = () => {
    setValue(0)
    console.log("click")
  }

  useEffect(() => {
    console.log("logo change", value)
  }, [value])

  return (
    <LogoBox onClick={handleClick}>
      <img src="/img/delivery_logo.png" alt="logo" height="100%" />
    </LogoBox>
  )
}

export default Header
