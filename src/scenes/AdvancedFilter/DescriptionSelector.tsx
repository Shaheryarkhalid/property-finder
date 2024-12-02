import { propertyDescription } from "@/Constants";
import { Stack, Typography } from "@mui/material";
import React from "react";
export default function DescriptionSelector({
  state,
}: {
  state: [string, React.Dispatch<React.SetStateAction<string>>];
}) {
  const [descriptionState, setDescriptionState] = state;
  function handleClick(description: string) {
    setDescriptionState(description);
  }
  return (
    <Stack
      direction="row"
      sx={{ px: "10px", minHeight: "100px", alignItems: "center" }}
    >
      <Stack direction="row" sx={{ width: "200px" }}>
        {propertyDescription.options.map((option) => (
          <Typography
            key={option + 1}
            onClick={() => handleClick(option)}
            sx={{
              borderBottom: "1px solid",
              px: "20px",
              cursor: "pointer",
              color: descriptionState === option ? "#6290CB" : "grey",
              borderBottomColor:
                descriptionState === option ? "#6290CB" : "grey",
            }}
          >
            {option}
          </Typography>
        ))}
      </Stack>
    </Stack>
  );
}
