import { Stack, Chip, Typography } from "@mui/material";
import { bedrooms } from "@/Constants";
export default function BedroomsSelector({
  state,
}: {
  state: [string, React.Dispatch<React.SetStateAction<string>>];
}) {
  const [bedroomsState, setBedroomsState] = state;
  function handleClick(bedrooms: string) {
    setBedroomsState(bedrooms);
  }
  return (
    <Stack
      direction="column"
      sx={{
        borderBottom: "1px solid #E3E3E3",
        pb: "10px",
        px: "10px",
        minHeight: "100px",
      }}
    >
      <Typography variant="h6" sx={{ pb: "20px" }}>
        Bedrooms
      </Typography>
      <Stack direction="row">
        {bedrooms.options.map((option) => (
          <Chip
            key={option}
            label={option}
            onClick={() => handleClick(option)}
            variant="outlined"
            sx={{
              mr: "10px",
              width: "auto",
              height: "30px",
              border: bedroomsState === option && "none",
              backgroundColor: bedroomsState === option ? "#E8F3FD" : "",
              color: bedroomsState === option ? "#0B448E" : "",
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
