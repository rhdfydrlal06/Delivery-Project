import TextField from "@mui/material/TextField"
import Autocomplete from "@mui/material/Autocomplete"
import { height } from "@mui/system"

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
]

const RegionSelectBox = () => {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 300 }}
      renderInput={params => <TextField {...params} label="시/군/구" />}
    />
  )
}

export default RegionSelectBox
