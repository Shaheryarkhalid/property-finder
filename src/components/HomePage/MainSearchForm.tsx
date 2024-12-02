"use client";
import { useState, useContext, useEffect } from "react";
import { propertiesContext } from "../ContextWrapper";
import { Stack, Button } from "@mui/material";
import { SelectAutoWidth, ComboBox } from "@/components";
import SearchIcon from "@mui/icons-material/Search";
import { SearchProperties } from "@/actions";
import { category, city, unitType, priceRange } from "@/Constants";

export default function MainSearchForm() {
  const [propertyTypeState, setPropertyType] = useState("Unit");
  const [propertyCategoryState, setPropertyCategory] = useState(
    category.options[0]
  );
  const [propertyCityState, setPropertyCity] = useState(city.options[0]);
  const [unitTypeState, setUnitType] = useState(unitType.options[0]);
  const [priceRangeState, setPriceRange] = useState(priceRange.options[0]);
  const [ userInteracted, setUserInteracted ] = useState(false);
  const { setProperties } = useContext(propertiesContext);
  async function handleSearch() {
    setUserInteracted(true);
    if (
      propertyTypeState &&
      propertyTypeState !== "" &&
      propertyCategoryState &&
      propertyCategoryState !== "" &&
      propertyCityState &&
      propertyCityState !== "" &&
      unitTypeState &&
      unitTypeState !== "" &&
      priceRangeState &&
      priceRangeState !== ""
    ) {
      const searchParams = {
        propertyType: propertyTypeState,
        propertyCategory: propertyCategoryState,
        propertyCity: propertyCityState,
        unitType: unitTypeState,
        priceRange: priceRangeState,
      };
      const filteredProperties = await SearchProperties(searchParams);
      setProperties(filteredProperties);
    }
  }
  useEffect(() => {
    userInteracted && handleSearch();
  }, [propertyTypeState, propertyCategoryState, propertyCityState, unitTypeState, priceRangeState]);

  return (
    <Stack
      onClick={()=> setUserInteracted(true)}
      direction="row"
      sx={{
        height: "100%",
        width: "100%",
        bgcolor: "white",
        borderRadius: "10px",
        borderBottomRightRadius: "0",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      <SelectAutoWidth
        label="Type"
        options={["Unit"]}
        state={[propertyTypeState, setPropertyType]}
      />
      <SelectAutoWidth
        label={category.label}
        options={category.options}
        state={[propertyCategoryState, setPropertyCategory]}
      />
      <ComboBox
        label={city.label}
        options={city.options}
        state={[propertyCityState, setPropertyCity]}
      />
      <SelectAutoWidth
        label={unitType.label}
        options={unitType.options}
        state={[unitTypeState, setUnitType]}
      />
      <SelectAutoWidth
        label={priceRange.label}
        options={priceRange.options}
        state={[priceRangeState, setPriceRange]}
      />
      <Button
        variant="contained"
        sx={{ backgroundColor: "#E3E3E3", height: "50px" }}
        onClick={handleSearch}
      >
        <SearchIcon sx={{ color: "black" }} />
      </Button>
    </Stack>
  );
}
