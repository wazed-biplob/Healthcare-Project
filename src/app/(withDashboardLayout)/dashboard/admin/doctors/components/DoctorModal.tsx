import MyForm from "@/components/forms/MyForm";
import MyInput from "@/components/forms/MyInput";
import MySelect from "@/components/forms/MySelect";
import MyFullScreenModal from "@/components/forms/Modal/MyFullScreenModal";
import { useCreateDoctorMutation } from "@/components/shared/api/specialitiesApi";
import { Gender } from "@/types";
import { modifyPayload } from "@/utils/modifyFormData";
import { Button, Grid } from "@mui/material";
import React from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

export interface IDoctor {
  password: string;
  doctor: Doctor;
}

export interface ISpecialities {
  specailityId: string;
  isDeleted: null;
}
export interface Doctor {
  email: string;
  name: string;
  contactNumber: string;
  address: string;
  registrationNumber: string;
  experience: number;
  gender: string;
  apointmentFee: number;
  qualification: string;
  currentWorkingPlace: string;
  designation: string;
  specialities?: ISpecialities[];
}

const doctorDefaultValues: IDoctor = {
  password: "123456",
  doctor: {
    email: "doctor@gmail.com",
    name: "Dr. Fahim",
    contactNumber: "+1234567890",
    address: "123 Medical Street, Cityville",
    registrationNumber: "12345",
    experience: 5,
    gender: "MALE",
    apointmentFee: 100,
    qualification: "MD, PhD",
    currentWorkingPlace: "City Hospital",
    designation: "Senior Consultant",
  },
};

const DoctorModal = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [createDoctor, isLoading] = useCreateDoctorMutation();
  const onSubmit = async (data: FieldValues) => {
    data.doctor.experience = Number(data.doctor.experience);
    data.doctor.apointmentFee = Number(data.doctor.apointmentFee);
    const formData = modifyPayload(data);
    try {
      const res = await createDoctor(formData);
      if (res?.data?.id) {
        toast.success("Doctor Created Successfully");
        setOpen(false);
      } else {
        toast.error("Something Went Wrong");
      }
    } catch (e: any) {
      toast.error(e?.message);
    }
  };
  return (
    <MyFullScreenModal
      open={open}
      setOpen={setOpen}
      title="Create A New Doctor"
    >
      <MyForm onSubmit={onSubmit} defaultValues={doctorDefaultValues}>
        <Grid container spacing={2} sx={{ my: 4, px: 4 }}>
          <Grid item xs={12} sm={12} md={4}>
            <MyInput
              name="doctor.name"
              label="Name"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <MyInput
              name="doctor.email"
              label="Email"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <MyInput
              name="doctor.contactNumber"
              label="Contact Number"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <MyInput
              name="doctor.address"
              label="Address"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <MyInput
              name="doctor.registrationNumber"
              label="Registration Number"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <MyInput
              name="doctor.experience"
              label="Experience"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <MySelect
              name="doctor.gender"
              items={Gender}
              label="Gender"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <MyInput
              name="doctor.apointmentFee"
              label="Appointment Fee"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <MyInput
              name="doctor.qualification"
              label="Qualification"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <MyInput
              name="doctor.currentWorkingPlace"
              label="Name"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <MyInput
              name="doctor.designation"
              label="Designation"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <MyInput
              name="password"
              label="Password"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Button type="submit">Submit</Button>
          </Grid>
        </Grid>
      </MyForm>
    </MyFullScreenModal>
  );
};

export default DoctorModal;
