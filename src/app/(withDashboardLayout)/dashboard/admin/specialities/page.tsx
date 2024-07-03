"use client";
import { Box, Button, IconButton, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import SpecialityModal from "./components/SpecialistModal";
import {
  useDeleteSpecialityMutation,
  useGetAllSpecialitiesQuery,
} from "@/components/shared/api/specialitiesApi";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Image from "next/image";
import DeleteIcon from "@mui/icons-material/Delete";
import { toast } from "sonner";
const SpecialistPage = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { data, isLoading } = useGetAllSpecialitiesQuery({});
  const [deleteSpeciality] = useDeleteSpecialityMutation();
  const columns: GridColDef[] = [
    { field: "title", headerName: "Title", width: 400 },
    {
      field: "icon",
      headerName: "Icon",
      width: 70,
      flex: 1,

      renderCell: ({ row }) => {
        return (
          <Box>
            <Image src={row.icon} width={40} height={40} alt="icon" />
          </Box>
        );
      },
    },
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
  const handleDelete = async (id: string) => {
    try {
      const res = await deleteSpeciality(id).unwrap();
      //@ts-ignore
      if (res?.id) {
        toast.success("Speciality Removed Successfully");
      }
    } catch (e: any) {
      console.log(e);
    }
  };
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Button onClick={() => setOpen(true)}>Create Speciality</Button>
        <SpecialityModal open={open} setOpen={setOpen} />
        <TextField placeholder="Search Specialist" size="small" />
      </Stack>
      {!isLoading ? (
        <Box my={2}>
          <DataGrid rows={data} columns={columns} checkboxSelection />
        </Box>
      ) : (
        <p>Loading...</p>
      )}
    </Box>
  );
};

export default SpecialistPage;
