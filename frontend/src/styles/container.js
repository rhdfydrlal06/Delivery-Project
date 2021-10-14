import styled from "styled-components"

export const WholeContainer = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 3fr 2fr;
  column-gap: 32px;
  grid-template-rows: minmax(106px, 15vh) auto;
`

export const LogoBox = styled.div`
  grid-column: ${({ isMap }) => (isMap ? "1/3" : "1/4")};
  grid-row: 1/3;
  padding: 20px 24px 20px 32px;
  z-index: 2;
  background-color: white;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`


export const MenuBox = styled.div`
  grid-column: 1/2;
  grid-row: 2/3;
  margin-top: 10%;
  z-index: 2;
  position: fixed;
  top: 15vh;
`

//layout에서 본문이 들어가는 메인 박스
export const Main = styled.main`
  grid-column: ${({ isMap }) => (isMap ? "2/3" : "2/4")};
  grid-row: 2/3;
`

export const MapBox = styled.div`
  grid-column: 3/4;
  grid-row: 1/3;
`

export const ContentsBox = styled.div`
  grid-column: 2/3;
  grid-row: 2/3;
  overflow: auto;
  height: 85vh;
  padding-right: 20px;
`

/*맵을 사용하지 않을 경우 사용하는 본문 박스*/
export const NotMapBox = styled.div`
  width: 80%;
`

export const PostContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(100px, auto));
  column-gap: 1rem;
  row-gap: 1rem;
`
