import { Stack, TextField, Typography, Box, Slider } from "@mui/material";

export default function UnitAreaSelector({
  state,
}: {
  state: [number[], React.Dispatch<React.SetStateAction<number[]>>];
}) {
  const [unitAreaState, setUnitAreaState] = state;
  function handleChange(newArea: number[]) {
    setUnitAreaState(newArea);
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
        Unit Area(Square Feet)
      </Typography>
      <Box sx={{ width: 300 }}>
        <Slider
          getAriaLabel={() => "Price Range"}
          min={0}
          max={10000}
          value={unitAreaState}
          onChange={(e, newValue) => handleChange(newValue as number[])}
          valueLabelDisplay="auto"
          getAriaValueText={() => unitAreaState.toLocaleString()}
        />
        <Stack direction="row" gap={2}>
          <TextField
            id="outlined-basic"
            label="Min"
            variant="outlined"
            value={unitAreaState[0]}
            onChange={(e) =>
              setUnitAreaState([
                !isNaN(Number(e.target.value)) ? Number(e.target.value) : 0,
                unitAreaState[1],
              ])
            }
          />
          <TextField
            id="outlined-basic"
            label="Max"
            variant="outlined"
            value={unitAreaState[1]}
            onChange={(e) =>
              setUnitAreaState([
                unitAreaState[0],
                !isNaN(Number(e.target.value)) ? Number(e.target.value) : 0,
              ])
            }
          />
        </Stack>
      </Box>
    </Stack>
  );
}
