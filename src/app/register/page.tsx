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
import { useForm, SubmitHandler } from "react-hook-form";
import { modifyPayload } from "@/utils/modifyFormData";
import { registerPatient } from "@/service/actions/registerPatient";

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

const RegisterPage: React.FC = () => {
  const { register, handleSubmit } = useForm<IPatientData>();
  const onSubmit: SubmitHandler<IPatientData> = async (data) => {
    const formData = modifyPayload(data);
    try {
      const res = await registerPatient(formData);
      console.log(res);
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
                Patient Register
              </Typography>
            </Box>
          </Stack>
          <Box sx={{ textAlign: "center", marginY: "20px" }}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={2}>
                <Grid item md={12} my={1}>
                  <TextField
                    label="Name"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                    {...register("patient.name")}
                  />
                </Grid>
                <Grid item md={6} my={1}>
                  <TextField
                    label="Email"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                    {...register("patient.email")}
                  />
                </Grid>
                <Grid item md={6} my={1}>
                  <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                    {...register("password")}
                  />
                </Grid>
                <Grid item md={6} my={1}>
                  <TextField
                    label="Contact Number"
                    type="tel"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                    {...register("patient.contactNumber")}
                  />
                </Grid>
                <Grid item md={6} my={1}>
                  <TextField
                    label="Addresss"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                    {...register("patient.address")}
                  />
                </Grid>
              </Grid>
              <Button type="submit" sx={{ marginY: "10px" }} fullWidth={true}>
                Register
              </Button>
            </form>
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
