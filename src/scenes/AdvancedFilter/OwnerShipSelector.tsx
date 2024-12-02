import { Stack, Chip, Typography } from "@mui/material";
import { ownership } from "@/Constants";
export default function OwnerShipSelector({
  state,
}: {
  state: [string, React.Dispatch<React.SetStateAction<string>>];
}) {
  const [ownershipState, setOwnershipState] = state;
  function handleClick(ownership: string) {
    setOwnershipState(ownership);
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
        Ownership
      </Typography>
      <Stack direction="row" sx={{ width: "200px" }}>
        {ownership.options.map((option) => (
          <Chip
            key={option}
            label={option}
            onClick={() => handleClick(option)}
            variant="outlined"
            sx={{
              mr: "10px",
              width: "auto",
              height: "30px",
              border: ownershipState === option && "none",
              backgroundColor: ownershipState === option ? "#E8F3FD" : "",
              color: ownershipState === option ? "#0B448E" : "",
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
