"use client";
import { Stack, Typography, Chip } from "@mui/material";
import { handoverBy } from "@/Constants";
export default function HandOverSelector({
  state,
}: {
  state: [string, React.Dispatch<React.SetStateAction<string>>];
}) {
  const [handOverState, setHandOverState] = state;
  function handleClick(handOver: string) {
    setHandOverState(handOver);
  }
  return (
    <Stack
      direction="column"
      sx={{
        px: "10px",
        py: "10px",
        gap: "10px",
        borderBottom: "1px solid #E3E3E3",
      }}
    >
      <Typography variant="h5" sx={{ textAlign: "middle", py: "10px" }}>
        {" "}
        Hand Over By
      </Typography>
      <Stack direction="row" sx={{ width: "200px" }}>
        {handoverBy.options.map((option) => (
          <Chip
            key={option}
            label={option}
            onClick={() => handleClick(option)}
            variant="outlined"
            sx={{
              mr: "10px",
              width: "auto",
              height: "30px",
              border: handOverState === option && "none",
              backgroundColor: handOverState === option ? "#E8F3FD" : "",
              color: handOverState === option ? "#0B448E" : "",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          ></Chip>
        ))}
      </Stack>
    </Stack>
  );
}
