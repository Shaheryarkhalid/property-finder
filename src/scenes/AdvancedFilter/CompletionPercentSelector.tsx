import { Stack, Chip, Typography } from "@mui/material";
import { completionPercentage } from "@/Constants";
export default function CompletionPercentSelector({
  state,
}: {
  state: [string, React.Dispatch<React.SetStateAction<string>>];
}) {
  const [completionPercentState, setCompletionPercentState] = state;
  function handleClick(completionPercent: string) {
    setCompletionPercentState(completionPercent);
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
        %Completion
      </Typography>
      <Stack direction="row" sx={{ width: "200px" }}>
        {completionPercentage.options.map((option) => (
          <Chip
            key={option}
            label={option}
            onClick={() => handleClick(option)}
            variant="outlined"
            sx={{
              mr: "10px",
              width: "auto",
              height: "30px",
              border: completionPercentState === option && "none",
              backgroundColor:
                completionPercentState === option ? "#E8F3FD" : "",
              color: completionPercentState === option ? "#0B448E" : "",
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
