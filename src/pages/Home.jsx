import { Container, Typography } from "@mui/material";
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';

export default function Home() {
  return (
    <Container sx={{display:'flex', alignItems:'center', justifyContent:'center', pt:8, gap:{xs:2}}}>
      <ContactPhoneIcon sx={{ fontSize: {xs:36, sm:54, lg:100}, color: '#00796b'}}/>
      <Typography variant="h1" sx={{ fontWeight: 400, fontSize: { xs: 30, sm: 48, lg: 96}}}>
        Phone Book App
      </Typography>
    </Container>
  );
}