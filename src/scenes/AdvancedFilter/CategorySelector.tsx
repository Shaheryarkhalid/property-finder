import { category } from "@/Constants";
import { Stack, Chip, Typography } from "@mui/material";
export default function CategorySelector({
  state,
}: {
  state: [string, React.Dispatch<React.SetStateAction<string>>];
}) {
  const [categoryState, setCategoryState] = state;
  function handleClick(category: string) {
    setCategoryState(category);
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
        Select Category
      </Typography>
      <Stack sx={{ width: "100%" }} direction="row">
        {category.options.map((option, i) => (
          <Chip
            key={option}
            icon={<img src={category.images[i]} />}
            label={<Typography variant="caption">{option}</Typography>}
            onClick={() => handleClick(option)}
            variant="outlined"
            sx={{
              mr: "10px",
              width: "100px",
              height: "100px",
              border: categoryState === option && "none",
              backgroundColor: categoryState === option ? "#E8F3FD" : "",
              color: categoryState === option ? "#0B448E" : "",
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
