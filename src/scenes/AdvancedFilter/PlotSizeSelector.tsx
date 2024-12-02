import { Stack, Box, Typography, Slider, TextField } from "@mui/material";
export default function PlotSizeSelector({
  state,
}: {
  state: [number[], React.Dispatch<React.SetStateAction<number[]>>];
}) {
  const [plotSizeState, setPlotSizeState] = state;
  function handleChange(plotSize: number[]) {
    setPlotSizeState(plotSize);
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
        Plot Size(Square Feet)
      </Typography>
      <Box sx={{ width: 300 }}>
        <Slider
          getAriaLabel={() => "Price Range"}
          min={0}
          max={10000}
          value={plotSizeState}
          onChange={(e, newValue) => handleChange(newValue as number[])}
          valueLabelDisplay="auto"
          getAriaValueText={() => plotSizeState.toLocaleString()}
        />
        <Stack direction="row" gap={2}>
          <TextField
            id="outlined-basic"
            label="Min"
            variant="outlined"
            value={plotSizeState[0]}
            onChange={(e) =>
              setPlotSizeState([
                !isNaN(Number(e.target.value)) ? Number(e.target.value) : 0,
                plotSizeState[1],
              ])
            }
          />
          <TextField
            id="outlined-basic"
            label="Max"
            variant="outlined"
            value={plotSizeState[1]}
            onChange={(e) =>
              setPlotSizeState([
                plotSizeState[0],
                !isNaN(Number(e.target.value)) ? Number(e.target.value) : 0,
              ])
            }
          />
        </Stack>
      </Box>
    </Stack>
  );
}
