import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { SetStateAction } from "react";

interface SelectProps {
  option: string;
  handleChange: (e: {
    target: {
      value: SetStateAction<string>;
    };
  }) => void;
}

export const SelectOptions = ({ option, handleChange }: SelectProps) => {
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
