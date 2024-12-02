"use client";
import { useEffect, useState, useContext } from "react";
import { Button, Box, Modal, Typography, Stack } from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";
import CloseIcon from "@mui/icons-material/Close";
import { SearchByAdvancedFilter } from "@/actions";
import { propertiesContext } from "../ContextWrapper";
import {
  CitySelector,
  CategorySelector,
  DescriptionSelector,
  BedroomsSelector,
  BathroomsSelector,
  ByCommuteSelector,
  ParkingSelector,
  PriceRangeSelector,
  CompletionStatusSelector,
  ListedBySelector,
  OwnerShipSelector,
  PlotSizeSelector,
  BuildUpAreaSelector,
  FurnishingSelector,
  HandOverSelector,
  CompletionPercentSelector,
  DownPaymentSelector,
  AmenetiesSelector,
  FacilitiesSelector,
  ViewSelector,
  MediaSelector,
  StatusSelector,
  UnitAreaSelector
} from "@/components";
import UnitTypeSelector from "../../scenes/AdvancedFilter/UnitTypeSelector";
export default function Popup() {
  const [modalOpen, setModalOpen] = useState(false);
  const [cityState, setCityState] = useState("");
  const [categoryState, setCategoryState] = useState("Sales");
  const [descriptionState, setDescriptionState] = useState("Residential");
  const [unitTypeState, setUnitTypeState] = useState("Apartments");
  const [bedroomState, setBedroomState] = useState("");
  const [bathroomState, setBathroomState] = useState("");
  const [byCommuteState, setByCommuteState] = useState(false);
  const [parkingState, setParkingState] = useState("");
  const [priceRangeState, setPriceRangeState] = useState([0, 1000000]);
  const [completionStatusState, setCompletionStatusState] = useState("");
  const [listedByState, setListedByState] = useState("");
  const [ownershipState, setOwnershipState] = useState("");
  const [plotSizeState, setPlotSizeState] = useState([1000, 10000]);
  const [buildUpAreaState, setBuildUpAreaState] = useState([2000, 5000]);
  const [furnishingState, setFurnishingState] = useState("");
  const [handOverState, setHandOverState] = useState("");
  const [completionPercentState, setCompletionPercentState] = useState("");
  const [downPaymentState, setDownPaymentState] = useState(0);
  const [amenetiesState, setAmenetiesState] = useState([]);
  const [facilitiesState, setFacilitiesState] = useState([]);
  const [viewState, setViewState] = useState([]);
  const [mediaState, setMediaState] = useState("");
  const [statusState, setStatusState] = useState("");
  const [ unitAreaState, setUnitAreaState ] = useState([0, 10000]);
  const { properties, setProperties } = useContext(propertiesContext);

  useEffect(() => {
    (async () => {
      const searchParams = {
        propertyType: "Unit",
        propertyDescription: descriptionState,
        category: categoryState,
        bedrooms: bedroomState,
        bathrooms: bathroomState,
        parking: parkingState,
        price: priceRangeState,
        completionStatus: completionStatusState,
        listedBy: listedByState,
        ownership: ownershipState,
        plotArea: plotSizeState,
        buildUpArea: buildUpAreaState,
        furnishing: furnishingState,
        handoverBy: handOverState,
        completionPercentage: completionPercentState,
        downPayment: downPaymentState,
        amenities: amenetiesState,
        facilities: facilitiesState,
        view: viewState,
        media: mediaState,
        status: statusState,
        city: cityState,
        unitType: unitTypeState,
        priceRange: priceRangeState,
        cityState,
      };
      modalOpen && setProperties(await SearchByAdvancedFilter(searchParams));
    })();
  }, [
    modalOpen,
    cityState,
    categoryState,
    descriptionState,
    unitTypeState,
    bedroomState,
    bathroomState,
    byCommuteState,
    parkingState,
    priceRangeState,
    completionStatusState,
    listedByState,
    ownershipState,
    plotSizeState,
    buildUpAreaState,
    furnishingState,
    handOverState,
    completionPercentState,
    downPaymentState,
    amenetiesState,
    facilitiesState,
    viewState,
    mediaState,
    statusState,
  ]);
  console.log("restst");
  function Reset() {
    setCityState("");
    setCategoryState("");
    setBedroomState("");
    setBathroomState("");
    setParkingState("");
    setListedByState("");
    setOwnershipState("");
    setFurnishingState("");
    setHandOverState("");
    setCompletionPercentState("");
    setMediaState("");
    setStatusState("");
    setDescriptionState("");
    setUnitTypeState("");
    setByCommuteState(false);
    setPriceRangeState([0, 10000000]);
    setPlotSizeState([0, 100000]);
    setBuildUpAreaState([0, 10000]);
    setDownPaymentState(0);
    setAmenetiesState([]);
    setFacilitiesState([]);
    setViewState([]);
  }
  return (
    <>
      <Button
        onClick={() => setModalOpen(true)}
        sx={{
          height: "35px",
          width: "45%",
          fontSize: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          verticalAlign: "middle",
        }}
        variant="outlined"
      >
        {" "}
        <TuneIcon sx={{ fontSize: "15px" }} /> Advanced Search
      </Button>
      <Modal
        open={modalOpen}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100%",
          zIndex: "100",
        }}
      >
        <Box
          sx={{
            position: "relative",
            height: "95%",
            width: "90%",
            bgcolor: "background.paper",
            boxShadow: 24,
            borderRadius: "10px",
            overflow: "hidden",
            p: 4,
          }}
        >
          <Button
            sx={{
              position: "absolute",
              top: "10px",
              right: "10px",
              color: "red",
              borderColor: "red",
            }}
            onClick={() => {
              setProperties([]);
              setModalOpen(false);
            }}
          >
            <CloseIcon />
          </Button>
          <Box
            sx={{ height: "100%", width: "100%", overflow: "auto", pb: "20px" }}
          >
            <Typography
              variant="h6"
              gutterBottom
              sx={{ fontWeight: "bold", mb: "10px" }}
            >
              Advanced Search
            </Typography>
            <CitySelector state={[cityState, setCityState]} />
            <CategorySelector state={[categoryState, setCategoryState]} />
            <DescriptionSelector
              state={[descriptionState, setDescriptionState]}
            />
            <UnitTypeSelector state={[unitTypeState, setUnitTypeState]} />
            <BedroomsSelector state={[bedroomState, setBedroomState]} />
            <BathroomsSelector state={[bathroomState, setBathroomState]} />
            <ParkingSelector state={[parkingState, setParkingState]} />
            <ByCommuteSelector state={[byCommuteState, setByCommuteState]} />
            <PriceRangeSelector state={[priceRangeState, setPriceRangeState]} />
            <CompletionStatusSelector
              state={[completionStatusState, setCompletionStatusState]}
            />
            {
              completionStatusState !== "Ready" && (
                <ListedBySelector state={[listedByState, setListedByState]} />
              )
            }
            <OwnerShipSelector state={[ownershipState, setOwnershipState]} />
            {
              completionStatusState !== "Ready" && (
                <>
                  <PlotSizeSelector state={[plotSizeState, setPlotSizeState]} />
                  <BuildUpAreaSelector
                    state={[buildUpAreaState, setBuildUpAreaState]}
                    />
                </>
              )
              
            }
            {
              completionStatusState === "Ready" && (
                <UnitAreaSelector state={[unitAreaState, setUnitAreaState]}/>
              )
            }
            <FurnishingSelector state={[furnishingState, setFurnishingState]} />
            {
              completionStatusState !== "Ready" && (
                  <>
                    <HandOverSelector state={[handOverState, setHandOverState]} />
                    <CompletionPercentSelector
                      state={[completionPercentState, setCompletionPercentState]}
                    />
                    <DownPaymentSelector
                      state={[downPaymentState, setDownPaymentState]}
                    />
                  </>
              )
            }
            <AmenetiesSelector state={[amenetiesState, setAmenetiesState]} />
            <FacilitiesSelector state={[facilitiesState, setFacilitiesState]} />
            {/* <UnitAreaSelector state={[viewState, setViewState]} /> */}
            <MediaSelector state={[mediaState, setMediaState]} />
            <StatusSelector state={[statusState, setStatusState]} />
          </Box>
          <Stack
            direction={"row"}
            sx={{
              px: "50px",
              width: "100%",
              bgcolor: "white",
              overflow: "hidden",
              position: "absolute",
              bottom: "10px",
              color: "red",
              borderColor: "red",
              justifyContent: "end",
              gap: "10px",
            }}
          >
            <Button
              variant="outlined"
              color="error"
              sx={{ width: "200px", color: "black", borderColor: "black" }}
              onClick={() => Reset()}
            >
              Reset
            </Button>
            <Button
              sx={{ width: "250px", bgcolor: "#E8F3FD" }}
              onClick={() => setModalOpen(false)}
            >{`Show Properties (${properties.length})`}</Button>
          </Stack>
        </Box>
      </Modal>
    </>
  );
}
