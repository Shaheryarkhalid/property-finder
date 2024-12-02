import { Stack, Chip, Typography } from "@mui/material";
import { status } from "@/Constants";
export default function StatusSelector({
  state,
}: {
  state: [string, React.Dispatch<React.SetStateAction<string>>];
}) {
  const [statusState, setStatusState] = state;
  function handleClick(status: string) {
    setStatusState(status);
  }
  return (
    <Stack
      direction="column"
      sx={{
        px: "10px",
        py: "10px",
        gap: "10px",
        borderBottom: "1px solid #E3E3E3",
      }}
    >
      <Typography variant="h5" sx={{ textAlign: "middle", py: "10px" }}>
        Status
      </Typography>
      <Stack direction="row" sx={{ width: "200px" }}>
        {status.options.map((option) => (
          <Chip
            key={option}
            label={option}
            onClick={() => handleClick(option)}
            variant="outlined"
            sx={{
              mr: "10px",
              width: "auto",
              height: "30px",
              border: statusState === option && "none",
              backgroundColor: statusState === option ? "#E8F3FD" : "",
              color: statusState === option ? "#0B448E" : "",
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
