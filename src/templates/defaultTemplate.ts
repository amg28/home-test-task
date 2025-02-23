const defaultTemplate = {
  title: "",
  fields: [
    { name: "count", type: "numeric", label: "Count", required: false },
    { name: "newField", type: "string", label: "New Field", required: true },
    {
      name: "additionalField",
      type: "string",
      label: "Additional Field",
      required: false,
    },
  ],
  buttons: ["Cancel", "OK"],
};

/*
Example for testing all form fields

const demoTemplateExample = {
  title: "Test Page Title",
  fields: [
    {
      name: "username",
      type: "string",
      label: "Username",
      required: true,
    },
    {
      name: "count",
      type: "numeric",
      label: "Count",
      required: false,
    },
    {
      name: "description",
      type: "multi-line",
      label: "Description",
      required: false,
    },
    {
      name: "isActive",
      type: "boolean",
      label: "Is Active",
      required: true,
    },
    {
      name: "birthDate",
      type: "date",
      label: "Birth Date",
      required: true,
    },
    {
      name: "role",
      type: "enum",
      label: "Role",
      required: true,
      options: ["admin", "user", "guest"],
    },
  ],
  buttons: ["Cancel", "Save"],
}; */

export default defaultTemplate;
