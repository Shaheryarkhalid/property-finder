
  // filteredProperties = allProperties.filter((property: any) =>
  //     ( searchParams.category && searchParams.category !== '' ? property.category == searchParams.category : true ) &&
  //     (searchParams.bedrooms && searchParams.bedrooms !== '' && searchParams.bedrooms !== '12+' && !Number.isNaN(searchParams.bedrooms) ? Number(property.bedrooms) >= Number(searchParams.bedrooms): true) &&
  //     (searchParams.bathrooms && searchParams.bathrooms !== ''&& searchParams.bathrooms !== '12+' && !Number.isNaN(searchParams.bathrooms) ? Number(property.bathrooms)  >= Number(searchParams.bathrooms): true) &&
  //     (searchParams.parking && searchParams.parking !== '' && searchParams.parking !== '12+' && !Number.isNaN(searchParams.parking)  ? Number(property.parking) >= Number(searchParams.parking) : true) &&
  //     (searchParams.unitType && searchParams.unitType !== '' ? property.unitType === searchParams.unitType : true) &&
  //     (searchParams.city && searchParams.city !== '' ? property.city === searchParams.city : true) &&
  //     (searchParams.ownership && searchParams.ownership !== '' ? property.ownership === searchParams.ownership: true)&&
  //     (searchParams.completionStatus && searchParams.completionStatus !== '' ? property.completionStatus === searchParams.completionStatus: true) &&
  //     (searchParams.listedBy && searchParams.listedBy !== '' ? property.listedBy === searchParams.listedBy : true) &&
  //     (searchParams.furnishing && searchParams.furnishing !== '' ? property.furnishing === searchParams.furnishing : true) &&
  //     (searchParams.handoverBy && searchParams.handoverBy !== '' && searchParams.handoverBy !== 'Any'  ? property.handoverBy === searchParams.handoverBy: true) &&
  //     (searchParams.completionPercentage && searchParams.completionPercentage !== '' && searchParams.completionPercentage !== 'Any' ? property.completionPercentage === searchParams.completionPercentage : true) &&
  //     (searchParams.media && searchParams.media !== '' ? property.media === searchParams.media : true) &&
  //     (searchParams.status && searchParams.status !== '' ? property.status === searchParams.status : true) &&
  //     (searchParams.amenities && searchParams.amenities.length > 0 && searchParams.amenities[0] !== '' ? JSON.stringify(property.amenities) === JSON.stringify(searchParams.amenities) : true) &&
  //     (searchParams.facilities && searchParams.facilities.length > 0 && searchParams.facilities[0] !== '' ? JSON.stringify(property.facilities) === JSON.stringify(searchParams.facilities) : true)&&
  //     (searchParams.view && searchParams.view.length > 0 && searchParams.view[0] !== '' ? JSON.stringify(property.view) === JSON.stringify(searchParams.view) : true) &&
  //     (searchParams.category && searchParams.category !== '' ? property.category === searchParams.category : true) &&
  //     Number(property.priceRange) >= searchParams.price[0] &&
  //     Number(property.priceRange) <= searchParams.price[1] &&
  //     Number(property.downPayment) >= Number(searchParams.downPayment)
  // );