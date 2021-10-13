import TextField from "@mui/material/TextField"
import Autocomplete from "@mui/material/Autocomplete"
import { memo, useCallback, useEffect, useState } from "react"
import styled from "styled-components"

const DropBoxWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 0.5rem;
`

const DropBox = ({ options, onChange }) => {
  const [value, setValue] = useState({ city: null, town: null, category: null })
  const { city, town, category } = value
  const style = {
    width: "100%",
  }

  const handleChange = useCallback(
    (e, newValue) => {
      const id = e.target.id.split("-")[0]
      setValue({ ...value, [id]: newValue })
    },
    [value],
  )

  useEffect(() => {
    onChange(value)
  }, [value])

  return (
    <DropBoxWrapper>
      <Autocomplete
        disablePortal
        id="city"
        options={options.city}
        sx={style}
        renderInput={params => <TextField {...params} label="시/도" />}
        value={city}
        onChange={handleChange}
      />
      <Autocomplete
        disablePortal
        id="town"
        options={options.town}
        sx={style}
        renderInput={params => <TextField {...params} label="시/군/구" />}
        value={town}
        onChange={handleChange}
      />
      <Autocomplete
        disablePortal
        id="category"
        options={options.category}
        sx={style}
        renderInput={params => <TextField {...params} label="카테고리" />}
        value={category}
        onChange={handleChange}
      />
    </DropBoxWrapper>
  )
}

export default memo(DropBox)
