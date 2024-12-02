import { Stack, Typography, Chip } from "@mui/material";
import { listedBy } from "@/Constants";
export default function ListedBySelector({
  state,
}: {
  state: [string, React.Dispatch<React.SetStateAction<string>>];
}) {
  const [listedByState, setListedByState] = state;
  function handleClick(listedBy: string) {
    setListedByState(listedBy);
  }
  return (
    <Stack
      direction="column"
      sx={{
        borderBottom: "1px solid #E3E3E3",
        pb: "20px",
        px: "10px",
        minHeight: "150px",
      }}
    >
      <Typography variant="h6" sx={{ pb: "20px" }}>
        Listed By
      </Typography>
      <Stack sx={{ width: "100%" }} direction="row">
        {listedBy.options.map((option, i) => (
          <Chip
            key={option}
            icon={
              <img
                src={listedBy.images[i]}
                style={{ height: "50px", width: "50px" }}
              />
            }
            label={option}
            onClick={() => handleClick(option)}
            variant="outlined"
            sx={{
              mr: "10px",
              width: "100px",
              height: "100px",
              border: listedByState === option && "none",
              backgroundColor: listedByState === option ? "#E8F3FD" : "",
              color: listedByState === option ? "#0B448E" : "",
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
