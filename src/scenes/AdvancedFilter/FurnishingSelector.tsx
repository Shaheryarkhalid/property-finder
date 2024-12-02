import { Stack, Chip, Typography } from "@mui/material";
import { furnishing } from "@/Constants";
export default function FurnishingSelector({
  state,
}: {
  state: [string, React.Dispatch<React.SetStateAction<string>>];
}) {
  const [furnishingState, setFurnishingState] = state;
  function handleClick(furnishing: string) {
    setFurnishingState(furnishing);
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
        Furnishing
      </Typography>
      <Stack direction="row" sx={{ width: "200px" }}>
        {furnishing.options.map((option) => (
          <Chip
            key={option}
            label={option}
            onClick={() => handleClick(option)}
            variant="outlined"
            sx={{
              mr: "10px",
              width: "auto",
              height: "30px",
              border: furnishingState === option && "none",
              backgroundColor: furnishingState === option ? "#E8F3FD" : "",
              color: furnishingState === option ? "#0B448E" : "",
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
