import { Stack, Typography, Slider, Box, TextField } from "@mui/material";
export default function DownPaymentSelector({
  state,
}: {
  state: [number, React.Dispatch<React.SetStateAction<number>>];
}) {
  const [downPaymentState, setDownPaymentState] = state;
  function handleChange(downPayment: number) {
    setDownPaymentState(downPayment);
  }
  function valuetext(value: number) {
    return `${value}%`;
  }
  return (
    <Stack
      direction="column"
      sx={{
        px: "10px",
        py: "20px",
        gap: "10px",
        borderBottom: "1px solid #E3E3E3",
      }}
    >
      <Typography variant="h5" sx={{ textAlign: "middle", py: "5px" }}>
        Down Payment
      </Typography>
      <Typography variant="caption" sx={{ textAlign: "middle", py: "5px" }}>
        Pre - Handover Payment
      </Typography>
      <Box sx={{ width: "200px" }}>
        <Slider
            //@ts-expect-error 
          color="black"
          defaultValue={50}
          value={downPaymentState}
          onChange={(e, newValue) => handleChange(newValue as number)}
          getAriaValueText={valuetext}
          aria-label="Default"
          valueLabelDisplay="auto"
        />
        <Box sx={{ position: "relative", width: "100%", height: "50px" }}>
          <TextField
            id="outlined-basic"
            label="Down Payment"
            sx={{ width: "100%" }}
            variant="outlined"
            value={downPaymentState}
            onChange={(e) =>
              setDownPaymentState(
                !isNaN(Number(e.target.value)) ? Number(e.target.value) : 0
              )
            }
          />
          <Typography
            variant="h6"
            sx={{ position: "absolute", top: "20px", right: "10px" }}
          >
            %
          </Typography>
        </Box>
      </Box>
    </Stack>
  );
}
