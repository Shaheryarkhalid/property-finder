"use client";
import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function ComboBox({
  state,
  label,
  options,
}: {
  state: [string, React.Dispatch<React.SetStateAction<string>>];
  label: string;
  options: string[];
}) {
  const [fieldValue, setFieldValue] = state;

  const handleChange = (event: React.SyntheticEvent<Element, Event>, newValue: string | null,) => {
    if (newValue !== null) {
      setFieldValue(newValue);
    } else {
      setFieldValue("");
    }
  };

  return (
    <Autocomplete
      options={options}
      value={fieldValue}
      onChange={handleChange}
      renderInput={(params) => (
        <TextField
          {...params}
          sx={{
            width: "200px",
            height: "60px",
            borderRadius: "20px",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: !fieldValue || fieldValue === "" ? "red" : "",
              },
              "&:hover fieldset": {
                borderColor: !fieldValue || fieldValue === "" ? "red" : "",
              },
              "&.Mui-focused fieldset": {
                borderColor: !fieldValue || fieldValue === "" ? "red" : "",
              },
            },
          }}
          label={label}
          value={fieldValue}
        />
      )}
    />
  );
}
