"use server";
import fs from "fs/promises";
import { TProperty } from "@/Types";
export default async function SearchProperties({
  propertyCategory,
  propertyCity,
  unitType,
  priceRange,
}: {
  propertyType: string;
  propertyCategory: string;
  propertyCity: string;
  unitType: string;
  priceRange: string;
}) {
  const file = await fs.readFile("src/Data.json");
  const allProperties: TProperty[] = JSON.parse(file.toString());
  const filteredProperties: TProperty[] = allProperties.filter(
    (property: TProperty) =>
      property.category === propertyCategory &&
      property.city === propertyCity &&
      property.unitType === unitType &&
      Number(property.priceRange) <= Number(priceRange)
  );
  return filteredProperties;
}
