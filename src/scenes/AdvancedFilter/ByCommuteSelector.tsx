import { Stack, Typography, Switch } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
export default function ByCommuteSelector({
  state,
}: {
  state: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}) {
  const [commuteState, setCommuteState] = state;
  function handleClick(commute: boolean) {
    setCommuteState(commute);
  }
  return (
    <Stack
      direction="row"
      sx={{
        borderBottom: "1px solid #E3E3E3",
        py: "10px",
        px: "10px",
        minHeight: "40px",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Stack direction="row" sx={{ alignItems: "center" }}>
        <LocationOnIcon fontSize="small" />
        <Typography variant="body2" sx={{ textAlign: "middle", px: "5px" }}>
          {" "}
          Location by Commute Time
        </Typography>
      </Stack>
      <Switch
        checked={commuteState}
        onChange={() => handleClick(!commuteState)}
      />
    </Stack>
  );
}
