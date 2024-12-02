import { Stack, Chip, Typography } from "@mui/material";
import { completionStatus } from "@/Constants";

export default function CompletionStatusSelector({
  state,
}: {
  state: [string, React.Dispatch<React.SetStateAction<string>>];
}) {
  const [completionState, setCompletionState] = state;
  function handleClick(completion: string) {
    setCompletionState(completion);
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
        {" "}
        Completion Status{" "}
      </Typography>
      <Stack direction="row" sx={{ width: "200px" }}>
        {completionStatus.options.map((option) => (
          <Chip
            key={option}
            label={option}
            onClick={() => handleClick(option)}
            variant="outlined"
            sx={{
              mr: "10px",
              width: "auto",
              height: "30px",
              border: completionState === option && "none",
              backgroundColor: completionState === option ? "#E8F3FD" : "",
              color: completionState === option ? "#0B448E" : "",
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
