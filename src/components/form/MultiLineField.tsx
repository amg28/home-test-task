import { FC } from "react";
import { TextField } from "@mui/material";
import { ControllerRenderProps, FieldErrors } from "react-hook-form";
import { getErrorMessage } from "../../data/utils";

interface MultiLineFieldProps {
  field: ControllerRenderProps;
  label: string;
  errors?: FieldErrors;
}

const MultiLineField: FC<MultiLineFieldProps> = ({ field, label, errors }) => {
  const errorMessage = getErrorMessage(errors, field.name);

  return (
    <>
      <TextField
        {...field}
        multiline
        rows={4}
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

export default MultiLineField;
