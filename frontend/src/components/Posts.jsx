import FaceRoundedIcon from "@mui/icons-material/FaceRounded"
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded"
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded"
import {
  PaperBox,
  PaperWrapper,
  Thumnail,
  ThumnailInfo,
  LikeBox,
  TextBox,
  MyChip,
  InfoTitle,
  UserInfo,
  TagBox,
} from "../styles/postContainer"

const Posts = ({ data, handlePostClick }) => {
  const handleClick = id => {
    handlePostClick(id)
  }

  const postsList = data.map(item => {
    const { id, user, location1, location2, food, image, post } = item
    const isLiked = () => {
      return false
    }

    return (
      <PaperBox key={id} onClick={e => handleClick(id)}>
        <PaperWrapper>
          <Thumnail url={image}>
            <ThumnailInfo>
              <InfoTitle>
                <UserInfo>
                  <FaceRoundedIcon />
                  {user ? user : "익명"}
                </UserInfo>
              </InfoTitle>
              <TextBox>
                <TagBox>
                  <MyChip
                    variant="outlined"
                    color="primary"
                    size="small"
                    label={`${location1}/${location2}`}
                  />
                  <MyChip variant="outlined" color="primary" size="small" label={food} />
                </TagBox>
                {post}
              </TextBox>
            </ThumnailInfo>
          </Thumnail>
        </PaperWrapper>
      </PaperBox>
    )
  })
  return postsList
}
export default Posts
