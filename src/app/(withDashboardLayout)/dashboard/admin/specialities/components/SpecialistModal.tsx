import MyFileUploader from "@/components/forms/MyFileUploader";
import MyForm from "@/components/forms/MyForm";
import MyInput from "@/components/forms/MyInput";
import Modal from "@/components/shared/Modal/modal";
import { useCreateSpecialityMutation } from "@/redux/api/specialitiesApi";
import { modifyPayload } from "@/utils/modifyFormData";
import { Button, Grid } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

interface IModal {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SpecialityModal = ({ open, setOpen }: IModal) => {
  const [postSpeciality] = useCreateSpecialityMutation();
  const handleFormSubmit = async (data: FieldValues) => {
    const formData = modifyPayload(data);
    try {
      const res = await postSpeciality(formData).unwrap();
      if (res?.id) {
        toast.success("Speciality Successfully");
        setOpen(false);
      }
    } catch (e: any) {
      console.log(e.message);
    }
  };
  return (
    <Modal open={open} setOpen={setOpen} title="Create a new Specialist">
      <MyForm onSubmit={handleFormSubmit}>
        <Grid container spacing={2}>
          <Grid item md={6}>
            <MyInput name="title" label="Title" />
          </Grid>
          <Grid item md={6}>
            <MyFileUploader name="file" label="Upload File" />
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

export default SpecialityModal;
