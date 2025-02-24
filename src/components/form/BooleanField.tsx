import { FC } from "react";
import { Checkbox, FormControlLabel } from "@mui/material";
import { ControllerRenderProps } from "react-hook-form";

interface BooleanFieldProps {
  field: ControllerRenderProps;
  label: string;
}

const BooleanField: FC<BooleanFieldProps> = ({ field, label }) => {
  return (
    <>
      <FormControlLabel
        control={<Checkbox {...field} />}
        label={label}
        sx={{ mt: 2 }}
      />
      ;
    </>
  );
};

export default BooleanField;
