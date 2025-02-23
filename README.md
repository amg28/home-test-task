# Home Task

This repository contains a home task for generating a form from JSON configuration. The project is built using React, TypeScript, and Vite.

## Project Setup

To set up the project locally, follow these steps:

1. Clone the repository:

   ```sh
   git clone https://github.com/[your-usermane]/home-test-task.git
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

## Running Tests

To run the tests, use the following command:

```sh
npm run test
```

## Libraries Used

- **Vite**: A build tool that provides a faster and leaner development experience for modern web projects.
- **Vitest**: A blazing fast unit test framework powered by Vite.
- **@testing-library/react**: A library for testing React components by simulating user interactions.

### Why These Libraries?

- **Vite**: Offers fast development server startup and hot module replacement (HMR).
- **Vitest**: Integrates seamlessly with Vite and provides a fast testing experience.
- **@testing-library/react**: Encourages writing tests that closely resemble how users interact with the application.

## Basic Usage Scenario

1. Open the application in your browser by navigating to `http://localhost:3000` after starting the development server.
2. You will see a form with fields for "Username" and "Age".

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
5. On pressing one of the buttons, the form will submit with an informative alert containing the submitted data.
