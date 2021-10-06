import { createTheme } from "@mui/material"

const theme = createTheme({
  typography: {
    fontFamily: "'Elice Digital Baeum', sans-serif",
  },
  palette: {
    primary: {
      main: "#ffb300",
      light: "#ffe54c",
      dark: "#c68400",
      contrastText: "#fff",
    },
  },
})

export default theme
