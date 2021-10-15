import { MyChip } from "../styles/postContainer"

const DetailPostHeader = ({ user, location1, location2, food }) => {
  return (
    <>
      <div>{user ? user : "익명"}</div>
      <div>
        <MyChip variant="outlined" size="small" label={`${location1}/${location2}`} />
        <MyChip variant="outlined" size="small" label={food} />
      </div>
    </>
  )
}

export default DetailPostHeader
