import { ChangeEvent, FC } from "react";
import { TextField } from "@mui/material";
import { ControllerRenderProps, FieldErrors } from "react-hook-form";
import { getErrorMessage } from "../../data/utils";

interface NumericFieldProps {
  field: ControllerRenderProps;
  label: string;
  errors?: FieldErrors;
}

const NumericField: FC<NumericFieldProps> = ({ field, label, errors }) => {
  const errorMessage = getErrorMessage(errors, field.name);

  return (
    <>
      <TextField
        {...field}
        type="number"
        label={label}
        fullWidth
        margin="normal"
        variant="outlined"
        error={!!errorMessage}
        helperText={errorMessage}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          field.onChange(parseFloat(e.target.value))
        }
        value={field.value ?? ""}
      />
    </>
  );
};

export default NumericField;
