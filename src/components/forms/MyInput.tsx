import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

export interface IInputProps {
  name: string;
  type?: string;
  label?: string;
  size?: "small" | "medium";
  fullWidth: boolean;
}

const MyInput = ({
  name,
  type = "text",
  label,
  size = "small",
  fullWidth,
}: IInputProps) => {
  const { control } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <TextField
            {...field}
            type={type}
            label={label}
            variant="outlined"
            size={size}
            fullWidth={fullWidth}
          />
        )}
      />
    </>
  );
};

export default MyInput;
