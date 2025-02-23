import { FC } from "react";
import { TextField } from "@mui/material";
import { ControllerRenderProps } from "react-hook-form";

interface DateFieldProps {
  field: ControllerRenderProps;
}

const DateField: FC<DateFieldProps> = ({ field }) => (
  <TextField
    {...field}
    type="date"
    fullWidth
    margin="normal"
    variant="outlined"
  />
);

export default DateField;
