"use client";
import { getUserInfo, removeUser } from "@/service/actions/authService";
import { Box, Button, Container, Link, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const userInfo = getUserInfo();
  const router = useRouter();
  const handleLogOut = () => {
    removeUser();
    router.refresh();
  };
  return (
    <Container>
      <Stack
        py={2}
        direction={"row"}
        justifyContent={"space-between"}
        alignItems="center"
      >
        <Typography
          variant="h4"
          style={{ textDecoration: "none" }}
          component={Link}
          fontWeight={600}
          href="/"
        >
          <Box color={"primary.main"}>PH Health Care</Box>
        </Typography>
        <Stack direction="row" gap={4} justifyContent="space-between">
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

        {userInfo?.userId ? (
          <Button color="error" onClick={handleLogOut}>
            Logout
          </Button>
        ) : (
          <Button href="/login">Login</Button>
        )}
      </Stack>
    </Container>
  );
};

export default Navbar;
