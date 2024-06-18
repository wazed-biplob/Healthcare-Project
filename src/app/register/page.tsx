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
import Image from "next/image";
import React from "react";
import Logo from "../../assets/svgs/logo.svg";
import Link from "next/link";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { modifyPayload } from "@/utils/modifyFormData";
import { registerPatient } from "@/service/actions/registerPatient";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { storeUserInfo } from "@/service/actions/authService";
import { loginPatient } from "@/service/actions/loginPatient";
import MyForm from "@/components/forms/MyForm";
import MyInput from "@/components/forms/MyInput";

export interface IPatient {
  name: string;
  email: string;
  contactNumber: string;
  address: string;
}

export interface IPatientData {
  patient: IPatient;
  password: string;
}

const RegisterPage = () => {
  const router = useRouter();
  const handleRegistration = async (data: FieldValues) => {
    const formData = modifyPayload(data);
    console.log(data);
    try {
      const userInfo = await registerPatient(formData);
      console.log(userInfo);

      if (userInfo?.data?.id) {
        toast?.success(userInfo?.message);

        const res = await loginPatient({
          password: data?.password,
          email: data?.patient?.email,
        });
        if (res?.data?.accessToken) {
          storeUserInfo({ accessToken: res?.data?.accessToken });
          router.push("/");
        }
      }
    } catch (err: any) {
      console.log(err.message);
    }
  };
  return (
    <Container>
      <Stack
        sx={{
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
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
              <Typography variant="h6" fontWeight={600} marginY={4}>
                Patient Registration
              </Typography>
            </Box>
          </Stack>
          <Box sx={{ textAlign: "center", marginY: "20px" }}>
            <MyForm onSubmit={handleRegistration}>
              <Grid container spacing={2}>
                <Grid item md={12} my={1}>
                  <TextField
                    label="Name"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item md={6} my={1}>
                  <MyInput
                    label="email"
                    type="email"
                    name="email"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item md={6} my={1}>
                  <MyInput
                    label="Password"
                    type="password"
                    name="password"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item md={6} my={1}>
                  <TextField
                    label="Contact Number"
                    type="tel"
                    size="small"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item md={6} my={1}>
                  <TextField label="Addresss" size="small" fullWidth={true} />
                </Grid>
              </Grid>
              <Button type="submit" sx={{ marginY: "10px" }} fullWidth={true}>
                Register
              </Button>
            </MyForm>
            <Typography component="p">
              Do you already have an Account?
              <Link href="/login">Log in</Link>
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default RegisterPage;
