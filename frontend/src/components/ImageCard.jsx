import ImageListItem from "@mui/material/ImageListItem"
import ImageListItemBar from "@mui/material/ImageListItemBar"
import IconButton from "@mui/material/IconButton"
import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete"
import { PaperWrapper, Thumnail } from "../styles/postContainer"
import { styled } from "@mui/system"
import { deletePostRequest, updatePostRequest } from "../apis/boardApi"
import updatePostList from "../utils/updatePostList"
import EditDialog from "./EditDialog"

const ImageCard = ({ postList, onClick, updatePost }) => {
  const handleEditClick = ({ e, id }) => {
    e.stopPropagation()
    console.log("edit:", id)

    // updatePostRequest(id).then(data => {
    //   console.log(data)
    // })
  }

  const handleDeleteClick = ({ e, id }) => {
    e.stopPropagation()
    console.log("delete:", id)
    deletePostRequest(id)
      .then(data => {
        console.log(data)
      })
      .then(() => {
        updatePostList(updatePost)
      })
  }

  const itemList = postList.map(item => {
    const { id, user, location1, location2, food, image, post } = item
    const getId = e => {
      return { e, id }
    }
    return (
      <ImageListItem key={id} onClick={e => onClick(id)}>
        <PaperWrapper>
          <Thumnail url={image} />
        </PaperWrapper>
        <MyImageListItemBar
          sx={{ height: "100%", alignItems: "flex-end" }}
          title={user ? user : "익명"}
          subtitle={`${location1}/${location2} ${food}`}
          actionIcon={
            <>
              <EditDialog postData={item} updatePost={updatePost} />
              <IconButton
                sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                aria-label={`delete ${id}`}
                onClick={e => handleDeleteClick(getId(e))}
              >
                <DeleteIcon />
              </IconButton>
            </>
          }
        />
      </ImageListItem>
    )
  })
  return itemList
}

export default ImageCard

const MyImageListItemBar = styled(ImageListItemBar)`
  opacity: 0;
  cursor: pointer;

  :hover {
    opacity: 1;
  }
`
