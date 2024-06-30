import { MenuItem, SxProps, TextField } from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

interface ISelect {
  name: string;
  size?: "small" | "medium";
  placeholder?: string;
  label?: string;
  required?: boolean;
  fullWidth?: boolean;
  sx?: SxProps;
  items: string[];
}

const MySelect = ({
  name,
  size,
  placeholder,
  label,
  required,
  fullWidth,
  sx,
  items,
}: ISelect) => {
  const { control, formState } = useFormContext();
  const isError = formState.errors[name];
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <TextField
          {...field}
          sx={{ ...sx }}
          size={size}
          select
          label={label}
          requried={required}
          fullWidth={fullWidth}
          //@ts-ignore
          error={isError}
          helperText={
            isError ? (formState.errors[name]?.message as string) : ""
          }
        >
          {items.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </TextField>
      )}
    ></Controller>
  );
};

export default MySelect;
