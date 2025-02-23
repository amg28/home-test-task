import { FC } from "react";
import { RadioGroup, FormControlLabel, Radio } from "@mui/material";
import { ControllerRenderProps } from "react-hook-form";

interface EnumFieldProps {
  field: ControllerRenderProps;
  options: string[];
}

const EnumField: FC<EnumFieldProps> = ({ field, options }) => (
  <RadioGroup {...field}>
    {options.map((option) => (
      <FormControlLabel
        key={option}
        value={option}
        control={<Radio />}
        label={option}
      />
    ))}
  </RadioGroup>
);

export default EnumField;
