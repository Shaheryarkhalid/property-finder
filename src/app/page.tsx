import { Stack, Typography, Container, Button, Chip } from "@mui/material";
import Image from "next/image";
import { logo } from "@/Constants";
import { MainSearchForm, DisplayProperties, ClearProperties } from "@/components";
import { Popup } from "@/components";

export default function Home() {
  return (
    <Stack sx={{ height: '100vh', width: '100%' }} >
      <Container sx={{ height: '100%' }}>
        <Stack sx={{ height: '10%', width: '100%',alignItems: 'center', justifyItems: 'center' }}>
          <Image src={logo} alt="Logo" width={100} height={70} />
        </Stack>
        <Stack sx={{ height: '60%', width: '100%', borderRadius: '20px', backgroundImage: 'url(HomePageImage.jpg)', backgroundSize: 'cover' , backgroundRepeat: 'no-repeat', backgroundPosition: 'center', justifyContent: 'space-between' }}>
            <Stack direction='row' sx={{ width: '100%', height: '50px', px: '50px', mt: '50px', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h4" sx={{ width: '380px', textWrap: 'wrap', color: 'white', fontWeight: '700' }}>A simple way to Real Estate!</Typography>
              <Image src='/test.svg' alt="vector logo" height={40} width={40} />
            </Stack>

            <Stack direction='row' sx={{ height: '150px', px: '10px', mb: '20px' }}>
              <Stack sx={{ height: '100%', width: '240px', p: '20px', borderRadius: '10px', backgroundImage: 'url(/map.png)', backgroundSize: 'cover', justifyContent: 'end' }}>
                <Button variant="contained" sx={{ width: '100%' }} >Go To Map</Button>
              </Stack>
              <Stack direction='column' sx={{ height: '100%', width:'calc(100% - 240px)', px:'10px' }}>
                <Stack direction='row' sx={{ width: '100%', height: '50%'}}>
                  <MainSearchForm />
                </Stack>
                <Stack direction='row' sx={{ width: '100%', height: '50%' }}>
                  <Stack direction='row' sx={{ height: '100%', width: '50%', bgcolor: '', borderRadius: '10px', alignItems:'center', justifyContent: 'space-evenly'}}>
                    <Typography color="white">Popular Searches :</Typography>
                    <Chip label="Resident House" sx={{ backgroundColor:'white', cursor: 'pointer' }} />
                    <Chip label="Villa" sx={{ backgroundColor:'white', cursor: 'pointer' }} />
                    <Chip label="Country Side" sx={{ backgroundColor:'white', cursor: 'pointer' }} />
                  </Stack>
                  <Stack direction='row' sx={{ height: '100%', width: '50%',padding: '10px', bgcolor: 'white', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px', justifyContent: 'space-evenly'}}>
                    <Popup />
                    <ClearProperties />
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
        </Stack>
        <Stack sx={{ height: '30%', pt: '10px'}}>
          <DisplayProperties />
        </Stack>
      </Container>
    </Stack>
  );
}
