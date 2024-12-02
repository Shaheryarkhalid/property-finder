"use client";
import { Box, Chip, Stack } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import { city } from "@/Constants";
import SearchByKey from "@/actions/SearchByKey";
import { useEffect, useState } from "react";
export default function CitySelector({
  state,
}: {
  state: [string, React.Dispatch<React.SetStateAction<string>>];
}) {
  const [cityState, setCityState] = state;
  function handleClick(city: string) {
    setCityState(city);
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
      {city.options.map((option) => (
        <CityRendrer
          key={option}
          city={option}
          handleClick={handleClick}
          cityState={cityState}
        />
      ))}
    </Stack>
  );
}
function CityRendrer({
  city,
  handleClick,
  cityState,
}: {
  city: string;
  handleClick: (city: string) => void;
  cityState: string;
}) {
  const [data, setData] = useState(0);
  useEffect(() => {
    (async () => {
      setData(((await SearchByKey("city", city)) as []).length);
    })();
  }, []);
  function formatNumber(num: number): string {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "k+";
    } else {
      return num.toString();
    }
  }
  return (
    <Chip
      key={city}
      label={city + `(${data > 0 ? formatNumber(data) : ""})`}
      onClick={() => handleClick(city)}
      deleteIcon={cityState === city ? <DoneIcon /> : <Box></Box>}
      onDelete={() => handleClick(city)}
      variant="outlined"
      sx={{ mr: "10px" }}
    ></Chip>
  );
}
