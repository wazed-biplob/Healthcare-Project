import assets from "@/assets";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import chooseUs from "@/assets/choose-us.png";
import Image from "next/image";
const WhyChooseUs = () => {
  const servicesData = [
    {
      imageSrc: assets.svgs.award,
      title: "Award Winning Service",
      description:
        "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici",
    },
    {
      imageSrc: assets.svgs.award,
      title: "Best Quality Pregnancy Care",
      description:
        "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici",
    },
    {
      imageSrc: assets.svgs.award,
      title: "Complete Medical Equipments",
      description:
        "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici",
    },
    {
      imageSrc: assets.svgs.award,
      title: "Dedicated Emergency Care",
      description:
        "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici",
    },
  ];

  return (
    <Container className="mb-16">
      <Grid container spacing={2}>
        <Grid
          item
          md={6}
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "15px",
              backgroundColor: "lightgrey",
              padding: "15px",
              alignItems: "center",
              borderRadius: "10px 10px 100px 10px",
            }}
          >
            <Box
              sx={{
                backgroundColor: "white",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              <Image width={50} src={servicesData[0].imageSrc} alt="image" />
            </Box>
            <Box>
              <Typography variant="h6" component="h6" fontWeight={600}>
                {servicesData[0].title}
              </Typography>
              <Typography
                variant="body2"
                component="h6"
                color="primary.body2"
                fontWeight={300}
              >
                {servicesData[0].description}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "15px",
              backgroundColor: "lightgrey",
              padding: "15px",
              alignItems: "center",
              borderRadius: "10px 10px 100px 10px",
              mt: "20px",
            }}
          >
            <Box
              sx={{
                backgroundColor: "white",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              <Image width={50} src={servicesData[1].imageSrc} alt="image" />
            </Box>
            <Box>
              <Typography variant="h6" component="h6" fontWeight={600}>
                {servicesData[1].title}
              </Typography>
              <Typography
                variant="body2"
                component="h6"
                color="primary.body2"
                fontWeight={300}
              >
                {servicesData[1].description}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "15px",
              backgroundColor: "lightgrey",
              padding: "15px",
              alignItems: "center",
              borderRadius: "10px 10px 100px 10px",
              mt: "20px",
            }}
          >
            <Box
              sx={{
                backgroundColor: "white",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              <Image width={50} src={servicesData[1].imageSrc} alt="image" />
            </Box>
            <Box>
              <Typography variant="h6" component="h6" fontWeight={600}>
                {servicesData[1].title}
              </Typography>
              <Typography
                variant="body2"
                component="h6"
                color="primary.body2"
                fontWeight={300}
              >
                {servicesData[1].description}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "15px",
              backgroundColor: "lightgrey",
              padding: "15px",
              alignItems: "center",
              borderRadius: "10px 10px 100px 10px",
              mt: "20px",
            }}
          >
            <Box
              sx={{
                backgroundColor: "white",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              <Image width={50} src={servicesData[1].imageSrc} alt="image" />
            </Box>
            <Box>
              <Typography variant="h6" component="h6" fontWeight={600}>
                {servicesData[1].title}
              </Typography>
              <Typography
                variant="body2"
                component="h6"
                color="primary.body2"
                fontWeight={300}
              >
                {servicesData[1].description}
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image height={500} src={chooseUs} alt="choose-us-image"></Image>
        </Grid>
      </Grid>
    </Container>
  );
};

export default WhyChooseUs;
