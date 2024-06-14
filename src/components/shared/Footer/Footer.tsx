import { Box, Container, Link, Stack, Typography } from "@mui/material";

import React from "react";
import Facebook from "@mui/icons-material/Facebook";
import { Instagram, LinkedIn, Twitter, YouTube } from "@mui/icons-material";
const Footer = () => {
  return (
    <div style={{ backgroundColor: "grey", padding: "20px 20px" }}>
      <Container>
        <Stack
          direction="row"
          gap={4}
          justifyContent="center"
          margin={5}
          color="white"
        >
          <Typography component={Link} href="/consultation">
            Consultation
          </Typography>
          <Typography component={Link} href="/">
            Health Plus
          </Typography>
          <Typography component={Link} href="/">
            Medicine
          </Typography>
          <Typography component={Link} href="/">
            Diagnostics
          </Typography>
          <Typography component={Link} href="/">
            NGOs
          </Typography>
        </Stack>

        <Stack
          direction="row"
          gap={4}
          justifyContent="center"
          margin={5}
          color="white"
        >
          <Facebook style={{ width: "30px", height: "30px" }} />
          <Instagram style={{ width: "30px", height: "30px" }} />
          <LinkedIn style={{ width: "30px", height: "30px" }} />
          <Twitter style={{ width: "30px", height: "30px" }} />
          <YouTube style={{ width: "30px", height: "30px" }} />
        </Stack>
        <div className="border-b-[1px] border-dashed bg-orange-500"></div>
        <Stack
          direction="row"
          gap={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography component="p" color="white" margin={5}>
            &copy;2024 PH Health Care. All Rights Reserved.
          </Typography>
          <Typography
            variant="h4"
            component={Link}
            fontWeight={600}
            href="/"
            color={"white"}
            underline="none"
          >
            <Box component="span">PH Health Care</Box>
          </Typography>
          <Typography component="p" color="white">
            Privacy Policy | Terms and Conditions
          </Typography>
        </Stack>
      </Container>
    </div>
  );
};

export default Footer;
