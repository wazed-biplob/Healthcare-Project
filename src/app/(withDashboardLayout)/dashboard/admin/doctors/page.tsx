"use client";
import React, { useState } from "react";
import { Box, Button, IconButton, Stack, TextField } from "@mui/material";
import DoctorModal from "./components/DoctorModal";
import {
  useDeleteDoctorMutation,
  useGetAllDoctorsQuery,
} from "@/components/shared/api/specialitiesApi";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDebounce } from "@/redux/hooks";
import { toast } from "sonner";
const DoctorsPage = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const query: Record<string, any> = {};

  const debounceTerm = useDebounce({ searchQuery: searchTerm, delay: 600 });
  if (!!debounceTerm) {
    query["searchTerm"] = searchTerm;
  }
  const { data: doctorData, isLoading } = useGetAllDoctorsQuery({ ...query });
  const [deleteDoctor] = useDeleteDoctorMutation();
  const handleDelete = async (id: string) => {
    try {
      const res = await deleteDoctor(id).unwrap();
      //@ts-ignore
      if (res?.id) {
        toast.success("Doctor deleted Successfully");
      }
    } catch (e: any) {
      toast.error(e?.message);
    }
  };
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
        <TextField
          onChange={(e) => setSearchTerm(e.target.value)}
          size="small"
          placeholder="Search Doctor"
        />
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
