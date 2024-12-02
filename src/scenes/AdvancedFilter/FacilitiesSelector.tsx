import {
  Box,
  Stack,
  Typography,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { facilities } from "@/Constants";
export default function FacilitiesSelector({
  state,
}: {
  state: [string[], React.Dispatch<React.SetStateAction<string[]>>];
}) {
  const [facilitiesState, setFacilitiesState] = state;
  function handleChange(facility: string) {
    setFacilitiesState((prev) =>
      [...prev].includes(facility)
        ? [...prev.filter((item) => item !== facility)]
        : [...prev, facility]
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
      <Typography variant="h6">Facilities</Typography>
      <Stack direction="column" sx={{ width: "100%" }}>
        <Stack
          direction="row"
          sx={{ width: "80%", pb: "40px", flexWrap: "wrap" }}
        >
          {facilities.options.map((facility, index) => (
            <FormControlLabel
              sx={{ width: "200px" }}
              key={index}
              control={
                <Checkbox
                    //@ts-expect-error
                  color="black"
                  checked={facilitiesState.includes(facility)}
                  onChange={(e) => handleChange(e.target.value)}
                  value={facility}
                />
              }
              label={facility}
            />
          ))}
        </Stack>
      </Stack>
    </Box>
  );
}
