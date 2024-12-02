import { Stack, Chip } from "@mui/material";
import { unitType } from "@/Constants";
export default function UnitTypeSelector({
  state,
}: {
  state: [string, React.Dispatch<React.SetStateAction<string>>];
}) {
  const [unitTypeState, setUnitTypeState] = state;
  function handleClick(unitType: string) {
    setUnitTypeState(unitType);
  }
  return (
    <Stack
      direction="row"
      sx={{
        borderBottom: "1px solid #E3E3E3",
        pb: "10px",
        px: "10px",
        minHeight: "100px",
        alignItems: "center",
      }}
    >
      {unitType.options.map((option, i) => (
        <Chip
          key={option}
          icon={<img src={unitType.images[i]} style={{ fill: "red" }} />}
          label={option}
          onClick={() => handleClick(option)}
          variant="outlined"
          sx={{
            mr: "10px",
            width: "140px",
            height: "140px",
            border: unitTypeState === option && "none",
            backgroundColor: unitTypeState === option ? "#E8F3FD" : "",
            color: unitTypeState === option ? "#0B448E" : "",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        ></Chip>
      ))}
    </Stack>
  );
}
