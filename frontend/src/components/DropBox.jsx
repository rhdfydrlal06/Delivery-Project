import TextField from "@mui/material/TextField"
import Autocomplete from "@mui/material/Autocomplete"
import { memo, useCallback, useEffect, useState } from "react"

const DropBox = ({ options, onChange }) => {
  const [value, setValue] = useState({ city: null, town: null, category: null })
  const { city, town, category } = value

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
    <>
      <Autocomplete
        disablePortal
        id="city"
        options={options.city}
        sx={{ width: 300 }}
        renderInput={params => <TextField {...params} label="시/도" />}
        value={city}
        onChange={handleChange}
      />
      <Autocomplete
        disablePortal
        id="town"
        options={options.town}
        sx={{ width: 300 }}
        renderInput={params => <TextField {...params} label="시/군/구" />}
        value={town}
        onChange={handleChange}
      />
      <Autocomplete
        disablePortal
        id="category"
        options={options.category}
        sx={{ width: 300 }}
        renderInput={params => <TextField {...params} label="카테고리" />}
        value={category}
        onChange={handleChange}
      />
    </>
  )
}

export default memo(DropBox)
