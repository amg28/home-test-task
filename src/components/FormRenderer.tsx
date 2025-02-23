import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button, Box, Typography, styled } from "@mui/material";
import FieldRenderer from "./form/FieldRenderer";

type FieldType =
  | "string"
  | "numeric"
  | "multi-line"
  | "boolean"
  | "date"
  | "enum";

type FormField = {
  name: string;
  type: FieldType;
  label: string;
  required?: boolean;
  options?: string[];
};

export type FormConfig = {
  title: string;
  fields: FormField[];
  buttons: string[];
};

const StyledForm = styled("form")(({ theme }) => ({
  maxWidth: 500,
  margin: "auto",
  padding: theme.spacing(3),
  boxShadow: theme.shadows[3],
  borderRadius: theme.shape.borderRadius,
}));

const StyledButtonGroup = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  marginTop: theme.spacing(1),
}));

const createValidationSchema = (
  fields: FormField[]
): Record<string, z.ZodTypeAny> => {
  return fields.reduce<Record<string, z.ZodTypeAny>>(
    (validationSchemaMap, field) => {
      switch (field.type) {
        case "numeric":
          validationSchemaMap[field.name] = field.required
            ? z.number().min(1)
            : z.number().optional();
          break;
        case "string":
        case "multi-line":
          validationSchemaMap[field.name] = field.required
            ? z.string().min(1)
            : z.string().optional();
          break;
        case "boolean":
          validationSchemaMap[field.name] = field.required
            ? z.boolean()
            : z.boolean().optional();
          break;
        case "date":
          // validationSchemaMap[field.name] = field.required
          //   ? z.date()
          //   : z.date().optional();
          break;
        case "enum":
          if (!field.options || field.options.length === 0) {
            throw new Error(
              `Field "${field.name}" has type "enum" but no options are provided`
            );
          }
          validationSchemaMap[field.name] = field.required
            ? z.enum(field.options as [string, ...string[]])
            : z.enum(field.options as [string, ...string[]]).optional();
          break;
        default:
          throw new Error(`Unknown field type: "${field.type}"`);
      }
      return validationSchemaMap;
    },
    {}
  );
};

const createDefaultValues = (
  fields: FormField[]
): Record<string, string | number | boolean | Date | undefined> => {
  return fields.reduce<
    Record<string, string | number | boolean | Date | undefined>
  >((defaultValues, field) => {
    switch (field.type) {
      case "numeric":
        defaultValues[field.name] = 0;
        break;
      case "string":
      case "multi-line":
        defaultValues[field.name] = "";
        break;
      case "boolean":
        defaultValues[field.name] = false;
        break;
      case "date":
        defaultValues[field.name] = new Date();
        break;
      case "enum":
        defaultValues[field.name] = field.options?.[0] || "";
        break;
    }
    return defaultValues;
  }, {});
};

const FormRenderer = ({ config }: { config: FormConfig }) => {
  const validationSchemaMap = createValidationSchema(config.fields);
  const schema = z.object(validationSchemaMap);

  type FormData = z.infer<typeof schema>;
  const defaultValues = createDefaultValues(config.fields);

  const { control, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues,
  });

  const onSubmit = (data: FormData) =>
    alert(`Form Submitted: ${JSON.stringify(data)}`);

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h4" gutterBottom>
        {config.title}
      </Typography>

      {config.fields.map((field) => (
        <Controller
          key={field.name}
          name={field.name}
          control={control}
          render={({ field: inputProps }) => (
            <FieldRenderer
              field={inputProps}
              type={field.type}
              label={field.label}
              options={field.options}
            />
          )}
        />
      ))}

      <StyledButtonGroup>
        {config.buttons.map((button) => (
          <Button
            key={button}
            type="submit"
            variant="contained"
            sx={{ mr: (theme) => theme.spacing(1) }}
          >
            {button}
          </Button>
        ))}
      </StyledButtonGroup>
    </StyledForm>
  );
};

export default FormRenderer;
