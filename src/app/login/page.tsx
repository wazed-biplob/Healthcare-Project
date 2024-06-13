import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import Logo from "@/assets/svgs/logo.svg";
import Image from "next/image";
import Link from "next/link";
const LoginPage = () => {
  return (
    <Container>
      <Stack
        sx={{ height: "100vh", justifyContent: "center", alignItems: "center" }}
      >
        <Box
          sx={{
            maxWidth: 600,
            width: "100%",
            borderRadius: 1,
            p: 4,
            boxShadow: 1,
          }}
        >
          <Stack
            sx={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box>
              <Image src={Logo} width={50} height={50} alt="image" />
            </Box>
            <Box>
              <Typography variant="h6" fontWeight={600}>
                Log in
              </Typography>
            </Box>
          </Stack>
          <Box sx={{ textAlign: "center", marginY: "20px" }}>
            <form>
              <Grid container spacing={2}>
                <Grid item md={6} my={1}>
                  <TextField
                    label="Email"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item md={6} my={1}>
                  <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                  />
                </Grid>
              </Grid>
              <Typography textAlign="end" component="p" marginBottom={2}>
                <Link href="#">Forget Password?</Link>
              </Typography>
              <Button sx={{ marginY: "10px" }} fullWidth={true}>
                Register
              </Button>
            </form>
            <Typography component="p">
              Don&apos;t you already have an Account?
              <Link href="/register">Create An Account</Link>
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default LoginPage;
