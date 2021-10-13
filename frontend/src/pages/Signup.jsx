import styled from "styled-components"
import Layout from "../components/layout/Layout"
import { DescBox, MainTitle, MenuName } from "../components/skeleton/AnalysisContents"
import { colors } from "../styles/theme"
import { NotMapBox } from "../styles/container"

import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export const Bold = styled.span`
  font-weight: bold;
`
const Comment = styled.span`
  display: block;
  font-size: 1.25rem;
  font-weight: bold;
  padding: 0.5rem 0 0.25rem;
  color: ${colors.black600};
`

const Signup = () => {
  return (
    <Layout isMap={false}>
      <NotMapBox>
        <MenuName>회원가입</MenuName>
        <MainTitle>
          <span>딜리버리 푸드 파이터</span>에
          <br />
          빨리 가입하세요!
        </MainTitle>
        <DescBox>
          <Box
            noValidate
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              maxWidth: '520px',
              width: '100%',
            }}
          >
            <FormControl>
              <Comment> &#127828; 이메일을 입력해주세요</Comment>
              <TextField
                autoFocus
                margin="dense"
                id="email"
                label="Email"
                type="email"
                fullWidth
                variant="standard"
              />
              <br />
              <Comment> &#10068; 비밀번호를 입력해주세요</Comment>
              <TextField
                autoFocus
                margin="dense"
                id="password"
                label="Password"
                type="password"
                fullWidth
                variant="standard"
              />
              <br />
              <Comment> &#10068; 비밀번호를 한번 더 입력해주세요</Comment>
              <TextField
                autoFocus
                margin="dense"
                id="passwordCheck"
                label="Password Check"
                type="password"
                fullWidth
                variant="standard"
              />
              <br />
              <Comment> &#128566; 이름을 입력해주세요</Comment>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Name"
                type="text"
                fullWidth
                variant="standard"
              />
              <br />
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  '& > *': {
                    m: 1,
                  },
                }}
              >
                <Button>회원가입</Button>
              </Box>
            </FormControl>
          </Box>
        </DescBox>
      </NotMapBox>
    </Layout>
  )
}

export default Signup
