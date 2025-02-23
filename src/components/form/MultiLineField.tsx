import { FC } from "react";
import { TextField } from "@mui/material";
import { ControllerRenderProps } from "react-hook-form";

interface MultiLineFieldProps {
  field: ControllerRenderProps;
  label: string;
}

const MultiLineField: FC<MultiLineFieldProps> = ({ field, label }) => (
  <TextField
    {...field}
    multiline
    rows={4}
    label={label}
    fullWidth
    margin="normal"
    variant="outlined"
  />
);

export default MultiLineField;
