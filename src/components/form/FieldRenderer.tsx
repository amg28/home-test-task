import StringField from "./StringField";
import NumericField from "./NumericField";
import MultiLineField from "./MultiLineField";
import BooleanField from "./BooleanField";
import DateField from "./DateField";
import EnumField from "./EnumField";
import { ControllerRenderProps, FieldErrors } from "react-hook-form";
import { FormField } from "../../data/schema";

type FieldProps = {
  field: ControllerRenderProps;
  options?: string[];
  errors?: FieldErrors;
} & Pick<FormField, "type" | "label">;

const FieldRenderer = ({ field, type, label, options, errors }: FieldProps) => {
  switch (type) {
    case "string":
      return <StringField field={field} label={label} errors={errors} />;
    case "numeric":
      return <NumericField field={field} label={label} errors={errors} />;
    case "multi-line":
      return <MultiLineField field={field} label={label} errors={errors} />;
    case "boolean":
      return <BooleanField field={field} label={label} />;
    case "date":
      return <DateField field={field} />;
    case "enum":
      return options && <EnumField field={field} options={options} />;
    default:
      return null;
  }
};

export default FieldRenderer;
