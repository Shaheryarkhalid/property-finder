import { Stack, Chip, Typography } from "@mui/material";
import { media } from "@/Constants";
export default function MediaSelector({
  state,
}: {
  state: [string, React.Dispatch<React.SetStateAction<string>>];
}) {
  const [mediaState, setMediaState] = state;
  function handleClick(mediaValue: string) {
    setMediaState(mediaValue);
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
        Media
      </Typography>
      <Stack direction="row" sx={{ width: "200px" }}>
        {media.options.map((option) => (
          <Chip
            key={option}
            label={option}
            onClick={() => handleClick(option)}
            variant="outlined"
            sx={{
              mr: "10px",
              width: "auto",
              height: "30px",
              border: mediaState === option && "none",
              backgroundColor: mediaState === option ? "#E8F3FD" : "",
              color: mediaState === option ? "#0B448E" : "",
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
