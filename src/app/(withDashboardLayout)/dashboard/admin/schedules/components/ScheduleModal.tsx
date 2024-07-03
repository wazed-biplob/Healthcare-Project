import MyForm from "@/components/forms/MyForm";
import Modal from "@/components/forms/Modal/modal";
import { Button, Grid } from "@mui/material";
import { FieldValues } from "react-hook-form";
import MyDatePicker from "@/components/forms/MyDatePicker";
import MyTimePicker from "@/components/forms/MyTimePicker";
import { dateFormatter } from "@/utils/dateFormatter";
import { timeFormatter } from "@/utils/timeFormatter";

interface IModal {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ScheduleModal = ({ open, setOpen }: IModal) => {
  const handleFormSubmit = async (data: FieldValues) => {
    data.startDate = dateFormatter(data.startDate);
    data.endDate = dateFormatter(data.endDate);
    data.startTime = timeFormatter(data.startTime);
    data.endTime = timeFormatter(data.endTime);
    console.log(data);
    try {
    } catch (e: any) {
      console.log(e.message);
    }
  };
  return (
    <Modal open={open} setOpen={setOpen} title="Create a new Schedule">
      <MyForm onSubmit={handleFormSubmit}>
        <Grid container spacing={2} sx={{ width: "400px" }}>
          <Grid item md={12}>
            <MyDatePicker name="startDate" label="Start Date" />
          </Grid>
          <Grid item md={12}>
            <MyDatePicker name="endDate" label="End Date" />
          </Grid>
          <Grid item md={6}>
            <MyTimePicker name="startTime" label="Start Time" />
          </Grid>
          <Grid item md={6}>
            <MyTimePicker name="endTime" label="End Time" />
          </Grid>
          <Grid item md={6}>
            <Button sx={{ mt: 1 }} type="submit">
              Create
            </Button>
          </Grid>
        </Grid>
      </MyForm>
    </Modal>
  );
};

export default ScheduleModal;
