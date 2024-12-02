"use server";
import fs from "fs/promises";
import { TProperty, TAdvancedFilterSearchParams } from '@/Types'

export default async function SearchByAdvancedFilter(
  searchParams: TAdvancedFilterSearchParams
) {
  const file = await fs.readFile("src/Data.json");
  const allProperties : TProperty[] = JSON.parse(file.toString());
  let filteredProperties = allProperties;
 
  if (searchParams.bedrooms && searchParams.bedrooms !== "") {
    if (searchParams.bedrooms === "studio") {
      filteredProperties = filteredProperties.filter(
        (property) => property.bedrooms == searchParams.bedrooms
      );
    }
    if (!Number.isNaN(searchParams.bedrooms)) {
      filteredProperties = filteredProperties.filter(
        (property) => Number(property.bedrooms) >= Number(searchParams.bedrooms)
      );
    }
  }
  if (
    searchParams.bathrooms &&
    searchParams.bathrooms !== "" &&
    !Number.isNaN(searchParams.bathrooms)
  ) {
    filteredProperties = filteredProperties.filter(
      (property) => Number(property.bathrooms) >= Number(searchParams.bathrooms)
    );
  }
  if (
    searchParams.parking &&
    searchParams.parking !== "" &&
    !Number.isNaN(searchParams.parking)
  ) {
    filteredProperties = filteredProperties.filter(
      (property) => Number(property.parking) >= Number(searchParams.parking)
    );
  }
  if (searchParams.unitType && searchParams.unitType !== "") {
    filteredProperties = filteredProperties.filter(
      (property) => property.unitType === searchParams.unitType
    );
  }
  if (searchParams.city && searchParams.city !== "") {
    filteredProperties = filteredProperties.filter(
      (property) => property.city === searchParams.city
    );
  }
  if (searchParams.ownership && searchParams.ownership !== "") {
    filteredProperties = filteredProperties.filter(
      (property) => property.ownership === searchParams.ownership
    );
  }
  if (searchParams.completionStatus && searchParams.completionStatus !== "") {
    filteredProperties = filteredProperties.filter(
      (property) => property.completionStatus === searchParams.completionStatus
    );
  }
  if (searchParams.listedBy && searchParams.listedBy !== "") {
    filteredProperties = filteredProperties.filter(
      (property) => property.listedBy === searchParams.listedBy
    );
  }
  if (searchParams.furnishing && searchParams.furnishing !== "") {
    filteredProperties = filteredProperties.filter(
      (property) => property.furnishing === searchParams.furnishing
    );
  }
  if (
    searchParams.handoverBy &&
    searchParams.handoverBy !== "" &&
    searchParams.handoverBy !== "Any"
  ) {
    filteredProperties = filteredProperties.filter(
      (property) => property.handoverBy === searchParams.handoverBy
    );
  }
  if (
    searchParams.completionPercentage &&
    searchParams.completionPercentage !== "" &&
    searchParams.completionPercentage !== "Any"
  ) {
    filteredProperties = filteredProperties.filter(
      (property) =>
        property.completionPercentage === searchParams.completionPercentage
    );
  }
  if (searchParams.media && searchParams.media !== "") {
    filteredProperties = filteredProperties.filter(
      (property) => property.media === searchParams.media
    );
  }
  if (searchParams.status && searchParams.status !== "") {
    filteredProperties = filteredProperties.filter(
      (property) => property.status === searchParams.status
    );
  }
  if (
    searchParams.amenities &&
    searchParams.amenities.length > 0 &&
    searchParams.amenities[0] !== ""
  ) {
    filteredProperties = filteredProperties.filter(
      (property) =>
        JSON.stringify(property.amenities) ===
        JSON.stringify(searchParams.amenities)
    );
  }
  if (
    searchParams.facilities &&
    searchParams.facilities.length > 0 &&
    searchParams.facilities[0] !== ""
  ) {
    filteredProperties = filteredProperties.filter(
      (property) =>
        JSON.stringify(property.facilities) ===
        JSON.stringify(searchParams.facilities)
    );
  }
  if (
    searchParams.view &&
    searchParams.view.length > 0 &&
    searchParams.view[0] !== ""
  ) {
    filteredProperties = filteredProperties.filter(
      (property) => JSON.stringify(property.view) === JSON.stringify(searchParams.view)
    );
  }

  filteredProperties = filteredProperties.filter(
    (property) =>
      Number(property.priceRange) >= searchParams.price[0] &&
      Number(property.priceRange) <= searchParams.price[1]
  );
  filteredProperties = filteredProperties.filter(
    (property) =>
      Number(property.downPayment) >= Number(searchParams.downPayment)
  );
  if (searchParams.category && searchParams.category !== "") {
    filteredProperties = filteredProperties.filter(
      (property) =>{
        return property.category.toLowerCase().trim() == searchParams.category.toLowerCase().trim()
        
      }
    );
  }
  return filteredProperties;
}
