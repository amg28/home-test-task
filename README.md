# Home Task

This repository contains a home task for generating a form from JSON configuration. The project is built using React, TypeScript, and Vite.

## Project Setup

To set up the project locally, follow these steps:

1. Clone the repository:

   ```sh
   git clone https://github.com/[your-username]/home-test-task.git
   cd home-test-task
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Start the development server:
   ```sh
   npm run dev
   ```

## Libraries Used

- **Vite**: A build tool that provides a faster and leaner development experience for modern web projects.
- **react-hook-form**: A performant, flexible, and extensible form library for React.
- **zod**: A TypeScript-first schema declaration and validation library.

### Why These Libraries?

- **Vite**: Offers fast development server startup and hot module replacement (HMR).
- **react-hook-form**: Simplifies form handling and validation, making it easier to manage dynamic forms.
- **zod**: Ensures JSON schema validation correctness before generating the form, providing a robust way to handle dynamic form and field validation.

## Basic Usage Scenario

1. Open the application in your browser by navigating to `http://localhost:3000` after starting the development server.
2. You will see a form with fields for "Count", "New Field" and "Additional Field".

```json
{
  "title": "",
  "fields": [
    { "name": "count", "type": "numeric", "label": "Count", "required": false },
    {
      "name": "newField",
      "type": "string",
      "label": "New Field",
      "required": true
    },
    {
      "name": "additionalField",
      "type": "string",
      "label": "Additional Field",
      "required": false
    }
  ],
  "buttons": ["Cancel", "OK"]
}
```

You can also paste in the prepared form JSON config with all possible fields:

```json
{
  "title": "Test Form Title",
  "fields": [
    {
      "name": "username",
      "type": "string",
      "label": "Username",
      "required": true
    },
    { "name": "count", "type": "numeric", "label": "Count", "required": false },
    {
      "name": "description",
      "type": "multi-line",
      "label": "Description",
      "required": false
    },
    {
      "name": "isActive",
      "type": "boolean",
      "label": "Is Active",
      "required": true
    },
    {
      "name": "birthDate",
      "type": "date",
      "label": "Birth Date",
      "required": true
    },
    {
      "name": "role",
      "type": "enum",
      "label": "Role",
      "required": true,
      "options": ["admin", "user", "guest"]
    }
  ],
  "buttons": ["Cancel", "Save"]
}
```

You can find these examples in the `defaultTemplate.ts` file as well.

3. Fill out the form and click the "Generate Form" button.
4. You will be navigated to the Result tab with a generated form.
5. On pressing one of the buttons, the form will submit with an informative alert containing the submitted data. Alternatively, it will show validation text message below invalid fields.
