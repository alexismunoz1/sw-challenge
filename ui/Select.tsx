import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export const SelectOptions = ({ handleChange, option }: any) => {
  return (
    <FormControl fullWidth>
      <InputLabel id="input-label">Sort by</InputLabel>
      <Select
        labelId="simple-select-label"
        id="simple-select"
        value={option}
        label="Sort by"
        onChange={handleChange}
      >
        <MenuItem value={"title"}>Title</MenuItem>
        <MenuItem value={"release_date"}>Release date</MenuItem>
        <MenuItem value={"director"}>Director</MenuItem>
        <MenuItem value={"producer"}>Producer</MenuItem>
      </Select>
    </FormControl>
  );
};
