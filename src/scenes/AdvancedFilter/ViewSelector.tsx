import {
  Box,
  Stack,
  Typography,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { view } from "@/Constants";
export default function ViewSelector({
  state,
}: {
  state: [string[], React.Dispatch<React.SetStateAction<string[]>>];
}) {
  const [viewState, setViewState] = state;
  function handleChange(v: string) {
    setViewState((prev) =>
      [...prev].includes(v)
        ? [...prev.filter((item) => item !== v)]
        : [...prev, v]
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
      <Typography variant="h6">View</Typography>
      <Stack direction="column" sx={{ width: "100%" }}>
        <Stack
          direction="row"
          sx={{ width: "80%", pb: "40px", flexWrap: "wrap" }}
        >
          {view.options.map((v, index) => (
            <FormControlLabel
              sx={{ width: "200px" }}
              key={index}
              control={
                <Checkbox
                //@ts-expect-error
                  color="black"
                  checked={viewState.includes(v)}
                  onChange={(e) => handleChange(e.target.value)}
                  value={v}
                />
              }
              label={v}
            />
          ))}
        </Stack>
      </Stack>
    </Box>
  );
}
