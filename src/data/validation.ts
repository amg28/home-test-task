import { z } from "zod";
import { FormField } from "./schema";

export const createValidationSchema = (fields: FormField[]) => {
  return z.object(
    fields.reduce<Record<string, z.ZodTypeAny>>(
      (validationSchemaMap, field) => {
        switch (field.type) {
          case "numeric":
            validationSchemaMap[field.name] = field.required
              ? z.number({ invalid_type_error: "Field is required" })
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
            validationSchemaMap[field.name] = field.required
              ? z.coerce.date()
              : z.coerce.date().optional();
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
            throw new Error(`Unknown field type: "${field}"`);
        }
        return validationSchemaMap;
      },
      {}
    )
  );
};
