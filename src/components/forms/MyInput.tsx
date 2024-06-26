import { SxProps, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

export interface IInputProps {
  name: string;
  type?: string;
  label?: string;
  size?: "small" | "medium";
  fullWidth?: boolean;
  sx?: SxProps;
  placeholder?: string;
  required?: boolean;
}

const MyInput = ({
  name,
  type = "text",
  label,
  size = "small",
  fullWidth,
  sx,
  required,
}: IInputProps) => {
  const { control } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field, fieldState: { error } }) => (
          <TextField
            {...field}
            sx={{ ...sx }}
            type={type}
            label={label}
            variant="outlined"
            size={size}
            fullWidth={fullWidth}
            placeholder={label}
            required={required}
            error={!!error?.message}
            helperText={error?.message}
          />
        )}
      />
    </>
  );
};

export default MyInput;
