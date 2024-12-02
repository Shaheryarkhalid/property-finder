import { Stack, Typography, Slider, Box, TextField } from "@mui/material";
export default function PriceRangeSelector({
  state,
}: {
  state: [number[], React.Dispatch<React.SetStateAction<number[]>>];
}) {
  const [priceRangeState, setPriceRangeState] = state;
  function handleChange(priceRange: number[]) {
    setPriceRangeState(priceRange);
  }
  function valuetext(value: number) {
    return `${value}°C`;
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
        Price Range(AED)
      </Typography>
      <Box sx={{ width: 300 }}>
        <Slider
          getAriaLabel={() => "Price Range"}
          min={0}
          max={5000000}
          value={priceRangeState}
          onChange={(e, newValue) => handleChange(newValue as number[])}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
        />
        <Stack direction="row" gap={2}>
          <TextField
            id="outlined-basic"
            label="Min"
            variant="outlined"
            value={priceRangeState[0]}
            onChange={(e) =>
              setPriceRangeState([
                !isNaN(Number(e.target.value)) ? Number(e.target.value) : 0,
                priceRangeState[1],
              ])
            }
          />
          <TextField
            id="outlined-basic"
            label="Max"
            variant="outlined"
            value={priceRangeState[1]}
            onChange={(e) =>
              setPriceRangeState([
                priceRangeState[0],
                !isNaN(Number(e.target.value)) ? Number(e.target.value) : 0,
              ])
            }
          />
        </Stack>
      </Box>
    </Stack>
  );
}
