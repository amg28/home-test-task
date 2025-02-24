import { FC } from "react";
import { TextField } from "@mui/material";
import { ControllerRenderProps, FieldErrors } from "react-hook-form";

interface StringFieldProps {
  field: ControllerRenderProps;
  label: string;
  errors?: FieldErrors;
}

const StringField: FC<StringFieldProps> = ({ field, label, errors }) => {
  const errorMessage = errors?.[field.name]?.message as string | undefined;

  return (
    <>
      <TextField
        {...field}
        label={label}
        fullWidth
        margin="normal"
        variant="outlined"
        error={!!errorMessage}
        helperText={errorMessage}
      />
    </>
  );
};

export default StringField;
