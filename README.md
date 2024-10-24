# create-okto-app

`create-okto-app` is a command-line tool to quickly set up new Okto SDK projects with React or Next.js templates.

## Features

- Easy-to-use interactive CLI
- Supports React and Next.js templates
- Automatically clones template repositories
- Sets up project structure and installs dependencies

## Prerequisites

- Node.js (version 18 or higher recommended)
- npm (comes with Node.js)
- Git

## Installation

You can use `npx` to run `create-okto-app` without installing it globally:

```bash
npx create-okto-app
```

Or, you can install it globally using npm:

```bash
npm install -g create-okto-app
```


## Usage

1. Open your terminal.
2. Run the following command:

```bash
npx create-okto-app
```


3. Follow the interactive prompts:
   - Choose a template (React, React Native or Next.js)
   - Enter your project name

4. The tool will create a new directory with your project name, clone the appropriate template, and install dependencies.

5. Once finished, navigate to your project directory and start the development server:

```bash
cd your-project-name
npm start
```


## Templates

- React: Uses the [okto-sdk-react-template-app](https://github.com/okto-hq/okto-sdk-react-template-app.git)
- Next.js: Uses the [okto-sdk-react-nextjs-starter-repo](https://github.com/okto-hq/okto-sdk-react-nextjs-starter-repo.git)
- React Native: Uses the [okto-sdk-reactnative-template-app](https://github.com/okto-hq/okto-sdk-reactnative-template-app.git)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
