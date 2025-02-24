import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button, Box, Typography, styled } from "@mui/material";
import FieldRenderer from "./form/FieldRenderer";
import { FormConfig, FormField } from "../data/schema";
import { createValidationSchema } from "../data/validation";

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
      case "enum": {
        const firstValue = field.options?.[0];
        if (!firstValue) {
          throw new Error(
            "Invalid form config: radio button options are empty"
          );
        }
        defaultValues[field.name] = firstValue;
        break;
      }
    }
    return defaultValues;
  }, {});
};

type FormData = z.infer<ReturnType<typeof createValidationSchema>>;
const FormRenderer = ({ config }: { config: FormConfig }) => {
  const schema = createValidationSchema(config.fields);

  const defaultValues = createDefaultValues(config.fields);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
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
              errors={errors}
              options={"options" in field ? field.options : undefined}
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
