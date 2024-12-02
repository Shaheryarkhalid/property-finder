import { Stack, Typography, Chip } from "@mui/material";
import { parking } from "@/Constants";
export default function ParkingSelector({
  state,
}: {
  state: [string, React.Dispatch<React.SetStateAction<string>>];
}) {
  const [parkingState, setParkingState] = state;
  function handleClick(completion: string) {
    setParkingState(completion);
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
        Parking
      </Typography>
      <Stack direction="row">
        {parking.options.map((option) => (
          <Chip
            key={option}
            label={option}
            onClick={() => handleClick(option)}
            variant="outlined"
            sx={{
              mr: "10px",
              width: "auto",
              height: "30px",
              border: parkingState === option && "none",
              backgroundColor: parkingState === option ? "#E8F3FD" : "",
              color: parkingState === option ? "#0B448E" : "",
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
