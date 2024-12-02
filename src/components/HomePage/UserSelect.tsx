"use client";
import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function SelectAutoWidth({
  label,
  options,
  state,
}: {
  label: string;
  options: string[];
  state: [string, React.Dispatch<React.SetStateAction<string>>];
}) {
  const [fieldValue, setFieldValue] = state;

  const handleChange = (event: SelectChangeEvent) => {
    setFieldValue(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 130 }}>
        <InputLabel
          id="demo-simple-select-autowidth-label"
          sx={{
            color: !fieldValue || fieldValue === "" ? "red" : "",
            minWidth: "100px",
          }}
        >
          {label}
        </InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={fieldValue}
          onChange={handleChange}
          autoWidth
          label="Age"
          sx={{ borderRadius: "10px" }}
        >
          {options.map((option) => (
            <MenuItem
              sx={{ minWidth: 100 }}
              value={option}
              key={option + "_property"}
            >
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
