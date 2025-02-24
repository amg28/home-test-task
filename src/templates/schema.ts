import { z } from "zod";

const schema = z.object({
  title: z.string(),
  fields: z.array(
    z.discriminatedUnion("type", [
      z.object({
        name: z.string(),
        type: z.enum(["string", "numeric", "multi-line", "boolean", "date"]),
        label: z.string(),
        required: z.boolean(),
      }),
      z.object({
        name: z.string(),
        type: z.enum(["enum"]),
        label: z.string(),
        required: z.boolean(),
        options: z.array(z.string()).min(1),
      }),
    ])
  ),
  buttons: z.array(z.string()),
});

export type FormConfig = z.infer<typeof schema>;
export type FormField = FormConfig["fields"][number];

export default schema;
