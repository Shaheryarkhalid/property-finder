"use client";
import { useContext } from "react";
import { propertiesContext } from "../ContextWrapper";
import { Button } from "@mui/material";
export default function ClearProperties() {
  const { setProperties } = useContext(propertiesContext);
  return (
    <Button
      sx={{
        height: "35px",
        width: "45%",
        backgroundColor: "#E3E3E3",
        fontSize: "13px",
        fontWeight: "500",
        color: "black",
      }}
      onClick={() => setProperties([])}
      variant="contained"
    >
      Clear Search
    </Button>
  );
}
