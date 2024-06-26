"use client";
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
import Logo from "../../assets/svgs/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { loginPatient } from "@/service/actions/loginPatient";
import { storeUserInfo } from "@/service/actions/authService";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import MyForm from "@/components/forms/MyForm";
import MyInput from "@/components/forms/MyInput";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export interface ILoginData {
  email: string;
  password: string;
}

export const validationSchema = z.object({
  email: z.string().email("Provide a valid email address"),
  password: z.string().min(6, "At least 6 alphabet"),
});
const LoginPage = () => {
  const router = useRouter();
  const handleLogin = async (data: FieldValues) => {
    try {
      const res = await loginPatient(data);
      if (res?.data?.accessToken) {
        storeUserInfo({ accessToken: res?.data?.accessToken });
        toast.success(res?.message);
        router.push("/");
      }
    } catch (err: any) {
      console.log(err.message);
    }
  };
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
            <MyForm
              onSubmit={handleLogin}
              resolver={zodResolver(validationSchema)}
              defaultValues={{ email: "", password: "" }}
            >
              <Grid container spacing={2}>
                <Grid item md={6} my={1}>
                  <MyInput
                    name="email"
                    label="Email"
                    type="email"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item md={6} my={1}>
                  <MyInput
                    name="password"
                    label="Password"
                    type="password"
                    fullWidth={true}
                  />
                </Grid>
              </Grid>
              <Typography textAlign="end" component="p" marginBottom={2}>
                <Link href="#">Forget Password?</Link>
              </Typography>
              <Button type="submit" sx={{ marginY: "10px" }} fullWidth={true}>
                Login
              </Button>
            </MyForm>
            <Typography component="p">
              Don&apos;t you already have an Account?
              <Link href="/register">&nbsp;Create An Account</Link>
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default LoginPage;
