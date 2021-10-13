import { LogoBox } from "../../styles/container"
import menuID from "../../recoil/atom"
import { useRecoilState } from "recoil"
import { useCallback, useEffect } from "react"
import styled from "styled-components"

const Img = styled.img`
  max-width: 10vw;
  object-fit: contain;
  cursor: pointer;
`

const Header = ({ isMap }) => {
  const [value, setValue] = useRecoilState(menuID)

  const handleClick = useCallback(() => {
    setValue("home")
  })

  useEffect(() => {
    console.log("logo change", value)
  }, [value])

  return (
    <LogoBox isMap={isMap}>
      <Img src="/img/delivery_logo.png" alt="logo" height="100%" onClick={handleClick} />
    </LogoBox>
  )
}

export default Header
