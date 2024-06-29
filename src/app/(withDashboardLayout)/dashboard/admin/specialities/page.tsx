"use client";
import { Box, Button, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import SpecialityModal from "./components/SpecialistModal";

const SpecialistPage = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Button onClick={() => setOpen(true)}>Create Speciality</Button>
        <SpecialityModal open={open} setOpen={setOpen} />
        <TextField placeholder="Search Specialist" size="small" />
      </Stack>
    </Box>
  );
};

export default SpecialistPage;
