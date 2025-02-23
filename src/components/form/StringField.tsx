import { FC } from "react";
import { TextField } from "@mui/material";
import { ControllerRenderProps } from "react-hook-form";

interface StringFieldProps {
  field: ControllerRenderProps;
  label: string;
}

const StringField: FC<StringFieldProps> = ({ field, label }) => (
  <TextField
    {...field}
    label={label}
    fullWidth
    margin="normal"
    variant="outlined"
  />
);

export default StringField;
