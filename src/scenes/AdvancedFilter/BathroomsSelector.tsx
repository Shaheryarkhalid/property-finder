import { Stack, Chip, Typography } from "@mui/material";
import { bathrooms } from "@/Constants";
export default function BathroomsSelector({
  state,
}: {
  state: [string, React.Dispatch<React.SetStateAction<string>>];
}) {
  const [bathroomState, setBathroomState] = state;
  function handleClick(bedrooms: string) {
    setBathroomState(bedrooms);
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
        Bathrooms
      </Typography>
      <Stack direction="row">
        {bathrooms.options.map((option) => (
          <Chip
            key={option}
            label={option}
            onClick={() => handleClick(option)}
            variant="outlined"
            sx={{
              mr: "10px",
              width: "auto",
              height: "30px",
              border: bathroomState === option && "none",
              backgroundColor: bathroomState === option ? "#E8F3FD" : "",
              color: bathroomState === option ? "#0B448E" : "",
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
