import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import assets from "@/assets";
const HeroSection = () => {
  return (
    <Container sx={{ display: "flex", direction: "row", my: 16 }}>
      <Box
        sx={{
          flex: 1,
          position: "relative",
          my: 4,
        }}
      >
        <Box
          sx={{
            left: "-90px",
            top: "-120px",
            position: "absolute",
          }}
        >
          <Image src={assets.svgs.grid} alt="image" />{" "}
        </Box>
        <Typography variant="h2" component="h1" fontWeight={600}>
          Healthier Hearts
        </Typography>
        <Typography variant="h2" component="h1" fontWeight={600}>
          Come From
        </Typography>
        <Typography
          variant="h2"
          component="h1"
          fontWeight={600}
          color="primary.main"
        >
          Preventive Care
        </Typography>
        <Typography sx={{ my: 4 }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit eum
          iusto consequatur eius, doloribus nesciunt facere aliquid eveniet et.
          Rerum maiores saepe cupiditate repellat recusandae atque sed. Saepe,
          vitae id?
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button>Book Appointment</Button>
          <Button variant="outlined">Contact Us</Button>
        </Box>
      </Box>
      <Box
        sx={{
          p: 1,
          display: "flex",
          justifyContent: "center",
          flex: 1,
          position: "relative",
          mt: 0,
        }}
      >
        <Box sx={{ position: "absolute", left: "200px", top: "-30px" }}>
          <Image
            width={100}
            height={100}
            src={assets.svgs.arrow}
            alt="arrow-image"
          />
        </Box>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Box sx={{ mt: 4 }}>
            <Image
              width={240}
              height={380}
              src={assets.images.doctor1}
              alt="doctor-1-image"
            />
          </Box>
          <Box>
            <Image
              width={240}
              height={350}
              src={assets.images.doctor2}
              alt="doctor-1-image"
            />
          </Box>
          <Box sx={{ position: "absolute", top: "220px", left: "150px" }}>
            <Image
              width={240}
              height={240}
              src={assets.images.doctor3}
              alt="doctor-image-3"
            />
          </Box>
          <Box
            sx={{ position: "absolute", bottom: "-50px", right: 0, zIndex: -1 }}
          >
            <Image
              width={180}
              height={180}
              src={assets.images.stethoscope}
              alt="doctor-image-3"
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default HeroSection;
