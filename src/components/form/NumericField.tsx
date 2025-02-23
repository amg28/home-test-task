import { FC } from "react";
import { TextField } from "@mui/material";
import { ControllerRenderProps } from "react-hook-form";

interface NumericFieldProps {
  field: ControllerRenderProps;
  label: string;
}

const NumericField: FC<NumericFieldProps> = ({ field, label }) => (
  <TextField
    {...field}
    type="number"
    label={label}
    fullWidth
    margin="normal"
    variant="outlined"
  />
);

export default NumericField;
