# Taski

This project is built using Nextjs, TailwindCSS for styling, Jest and RTL for testing

## How to run and contribute to this project

In your terminal, run the following command:

```bash
git clone https://github.com/Joshua-Ogbonna/taski
```

```bash
Project URL - https://taski-tau.vercel.app/
```

```bash
run npm install to install package dependencies
```

Create your branch directly from the main branch.

## Running Tests

```bash
npm test
```

# Running Test
To create a test in this project, we structured it so every component can be tested independently and efficiently.

- For http mock tests, follow the procedure used in handlers to create your mock endpoints.
- The lib folder contains request handlers for API requests
- Test should be done at component and page level. This is to ensure code quality, maintainability, and separation of concerns

# State Management
Due to the relatively small nature of the project, we are making use of context API to handle state efficiently.
Currently, there's just one context. 
For creating your own context, follow the guideline in AppContext.tsx which include 
- creating context, 
- provider levels and 
- creating the context hook.
This is to ensure readability and maintainability.

# Styling
This project uses tailwind css.

# Component creation
Creating your own component, it is best advised you group them based on the usage.
- Page level components should be associated with the page name (e.g AboutComponents)
- Components used across other pages and components should be under the shared component structure
