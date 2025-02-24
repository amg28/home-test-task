import { FieldErrors } from "react-hook-form";

export function getErrorMessage(
  errors: FieldErrors | undefined,
  fieldName: string
): string | undefined {
  return errors?.[fieldName]?.message as string | undefined;
}
