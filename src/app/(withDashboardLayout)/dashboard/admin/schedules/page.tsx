"use client";
import { Box, Button, Stack } from "@mui/material";
import React, { useState } from "react";
import ScheduleModal from "./components/ScheduleModal";

const SchedulesPage = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Button onClick={() => setOpen(true)}>Crate Schedule</Button>
        <ScheduleModal open={open} setOpen={setOpen} />
      </Stack>
      <Box my={5}>Display Schedule</Box>
    </Box>
  );
};

export default SchedulesPage;
