import { useHistory } from "react-router"
import styled from "styled-components"
import { Link } from "react-router-dom"

const NavBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: flex-end;
  width: 100%;
  /* height: 10vh; */
  margin: 5vh 0 3vh;
`

const LogoBox = styled.div`
  height: 100px;
`

const MenuBox = styled.div`
  display: flex;
  justify-content: flex-end;
`

const Menu = styled.div`
  text-align: right;
  font-weight: bold;
  padding: 0.5rem 1rem;
`

const NavBar = () => {
  const history = useHistory()
  const home = "/"
  const adress1 = "/covid-19-delivery"

  const handleClick = adress => {
    history.push(adress)
  }
  return (
    <NavBox>
      <LogoBox>
        <Link to="/">딜리버리 푸드파이터</Link>
      </LogoBox>
      <MenuBox>
        <Link to="/covid-19-delivery">menu1</Link>
        <Link to="/covid-19-delivery">menu2</Link>
        <Link to="/covid-19-delivery">menu3</Link>
        <Link to="/covid-19-delivery">menu4</Link>
      </MenuBox>
    </NavBox>
  )
}

export default NavBar
