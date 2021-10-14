// import { PopPostBox } from "./PopPost"
// import { Button } from "@mui/material"
// import styled from "styled-components"
// import { useCallback } from "react"
// import { PaperBox, PaperWrapper, ThumnailInfo, TextBox, LikeBox } from "./PopPost"

// const DetailPost = ({ popClose }) => {
//   const handleClose = useCallback(() => {
//     popClose()
//   }, [])

//   const preventClose = useCallback(e => {
//     e.stopPropagation()
//   }, [])

//   return (
//     <>
//       <PopPostBox onClick={preventClose}>
//         <Button onClick={handleClose} variant="outlined">
//           x
//         </Button>
//         <PaperBox>
//           <PaperWrapper>
//             <Img src={image} />
//             <ThumnailInfo>
//               <TextBox>
//                 <FaceRoundedIcon />
//                 {user ? user : "익명"}
//                 <LikeBox>
//                   {isLiked() ? <FavoriteRoundedIcon /> : <FavoriteBorderRoundedIcon />}
//                 </LikeBox>
//                 {like}
//                 <MyChip
//                   variant="outlined"
//                   color="primary"
//                   size="small"
//                   label={`${location1}/${location2}`}
//                 />
//                 <MyChip variant="outlined" color="primary" size="small" label={food} />
//                 {post}
//               </TextBox>
//             </ThumnailInfo>
//           </PaperWrapper>
//         </PaperBox>
//       </PopPostBox>
//     </>
//   )
// }

// export default DetailPost

// const Img = styled.img``
