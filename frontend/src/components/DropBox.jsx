import TextField from "@mui/material/TextField"
import Autocomplete from "@mui/material/Autocomplete"
import { memo, useCallback, useEffect, useState } from "react"
import styled from "styled-components"

const DropBox = ({ options, onChange, defaultValue }) => {
  console.log(defaultValue)
  const [value, setValue] = useState({ location1: null, location2: null, food: null })
  const { location1, location2, food } = value
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
        id="location1"
        size="small"
        options={options.location1}
        sx={style}
        renderInput={params => <TextField {...params} variant="standard" label="시/도" />}
        value={location1}
        onChange={handleChange}
        defaultValue={defaultValue ? defaultValue.location1 : null}
      />
      <Autocomplete
        disablePortal
        id="location2"
        size="small"
        options={options.location2}
        sx={style}
        renderInput={params => <TextField {...params} variant="standard" label="시/군/구" />}
        value={location2}
        onChange={handleChange}
        defaultValue={defaultValue ? defaultValue.location2 : null}
      />
      <Autocomplete
        disablePortal
        id="food"
        size="small"
        options={options.food}
        sx={style}
        renderInput={params => <TextField {...params} variant="standard" label="카테고리" />}
        value={food}
        onChange={handleChange}
        defaultValue={defaultValue ? defaultValue.food : null}
      />
    </DropBoxWrapper>
  )
}

export default DropBox

const DropBoxWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 0.5rem;
`
