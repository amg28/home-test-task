import StringField from "./StringField";
import NumericField from "./NumericField";
import MultiLineField from "./MultiLineField";
import BooleanField from "./BooleanField";
import DateField from "./DateField";
import EnumField from "./EnumField";
import { ControllerRenderProps } from "react-hook-form";

type FieldProps = {
  field: ControllerRenderProps;
  type: string;
  label: string;
  options?: string[];
};

const FieldRenderer = ({ field, type, label, options }: FieldProps) => {
  switch (type) {
    case "string":
      return <StringField field={field} label={label} />;
    case "numeric":
      return <NumericField field={field} label={label} />;
    case "multi-line":
      return <MultiLineField field={field} label={label} />;
    case "boolean":
      return <BooleanField field={field} label={label} />;
    case "date":
      return <DateField field={field} />;
    case "enum":
      return <EnumField field={field} options={options!} />;
    default:
      return null;
  }
};

export default FieldRenderer;
