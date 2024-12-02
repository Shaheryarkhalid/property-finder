import {
  Box,
  Stack,
  Typography,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { amenities } from "@/Constants";

export default function AmenetiesSelector({
  state,
}: {
  state: [string[], React.Dispatch<React.SetStateAction<string[]>>];
}) {
  const [amenetiesState, setAmenetiesState] = state;
  function handleChange(amenity: string) {
    setAmenetiesState((prev) =>
      [...prev].includes(amenity)
        ? [...prev.filter((item) => item !== amenity)]
        : [...prev, amenity]
    );
  }
  return (
    <Box
      sx={{
        borderBottom: "1px solid #E3E3E3",
        py: "10px",
        px: "10px",
        minHeight: "100px",
        width: "100%",
      }}
    >
      <Typography variant="h6">Ameneties</Typography>
      <Typography variant="body2" sx={{ pb: "20px" }}>
        Features
      </Typography>
      <Stack direction="column" sx={{ width: "100%" }}>
        <Stack
          direction="row"
          sx={{ width: "80%", pb: "40px", flexWrap: "wrap" }}
        >
          {amenities.options.map((amenity, index) => (
            <FormControlLabel
              sx={{ width: "200px" }}
              key={index}
              control={
                <Checkbox
                  //@ts-expect-error
                  color="black"
                  checked={amenetiesState.includes(amenity)}
                  onChange={(e) => handleChange(e.target.value)}
                  value={amenity}
                />
              }
              label={amenity}
            />
          ))}
        </Stack>
      </Stack>
    </Box>
  );
}
