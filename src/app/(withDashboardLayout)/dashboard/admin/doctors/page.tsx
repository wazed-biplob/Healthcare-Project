"use client";
import React, { useState } from "react";
import { Box, Button, IconButton, Stack, TextField } from "@mui/material";
import DoctorModal from "./components/DoctorModal";
import { useGetAllDoctorsQuery } from "@/redux/api/specialitiesApi";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
const DoctorsPage = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { data: doctorData, isLoading } = useGetAllDoctorsQuery({});
  const handleDelete = async (id: string) => {};
  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "contactNumber", headerName: "Contact Number", flex: 1 },
    {
      field: "action",
      headerName: "Action",
      headerAlign: "center",
      align: "center",
      width: 70,
      renderCell: ({ row }) => {
        return (
          <IconButton
            onClick={() => {
              handleDelete(row.id);
            }}
            aria-label="delete"
          >
            <DeleteIcon />
          </IconButton>
        );
      },
    },
  ];
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Button onClick={() => setOpen(true)}>Create Doctor</Button>
        <DoctorModal open={open} setOpen={setOpen} />
        <TextField size="small" placeholder="Search Doctor" />
      </Stack>
      {!isLoading ? (
        <Box my={2}>
          <DataGrid
            rows={doctorData?.doctors}
            columns={columns}
            checkboxSelection
          />
        </Box>
      ) : (
        <p>Loading...</p>
      )}
    </Box>
  );
};

export default DoctorsPage;
