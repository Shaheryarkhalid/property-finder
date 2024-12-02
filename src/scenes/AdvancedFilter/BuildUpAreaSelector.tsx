import { Stack, TextField, Typography, Box, Slider } from "@mui/material";
export default function BuildUpAreaSelector({
  state,
}: {
  state: [number[], React.Dispatch<React.SetStateAction<number[]>>];
}) {
  const [buildUpAreaState, setBuildUpAreaState] = state;
  function handleChange(newArea: number[]) {
    setBuildUpAreaState(newArea);
  }
  return (
    <Stack
      direction="column"
      sx={{
        borderBottom: "1px solid #E3E3E3",
        py: "10px",
        px: "10px",
        minHeight: "100px",
      }}
    >
      <Typography variant="h6" sx={{ pb: "10px" }}>
        Build Up Area(Square Feet)
      </Typography>
      <Box sx={{ width: 300 }}>
        <Slider
          getAriaLabel={() => "Price Range"}
          min={0}
          max={10000}
          value={buildUpAreaState}
          onChange={(e, newValue) => handleChange(newValue as number[])}
          valueLabelDisplay="auto"
          getAriaValueText={() => buildUpAreaState.toLocaleString()}
        />
        <Stack direction="row" gap={2}>
          <TextField
            id="outlined-basic"
            label="Min"
            variant="outlined"
            value={buildUpAreaState[0]}
            onChange={(e) =>
              setBuildUpAreaState([
                !isNaN(Number(e.target.value)) ? Number(e.target.value) : 0,
                buildUpAreaState[1],
              ])
            }
          />
          <TextField
            id="outlined-basic"
            label="Max"
            variant="outlined"
            value={buildUpAreaState[1]}
            onChange={(e) =>
              setBuildUpAreaState([
                buildUpAreaState[0],
                !isNaN(Number(e.target.value)) ? Number(e.target.value) : 0,
              ])
            }
          />
        </Stack>
      </Box>
    </Stack>
  );
}
