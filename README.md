# SourceJump Website

## Prerequisites

Before you begin, ensure you have the following dependencies installed:

- [Node.js](https://nodejs.org/) (version 20.10.0)
- [npm](https://www.npmjs.com/) (version 10.2.3)

## Getting Started

Follow these steps to get the project up and running:

1. Clone the repository:

   ```bash
   git clone https://github.com/sourcejump/website.git
   cd website
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

Visit [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## Scripts

### Development

- **`npm run dev`**
  - Starts the development server for the Next.js project.

### Build

- **`npm run build`**
  - Builds the production-ready version of the Next.js project.

### Start

- **`npm run start`**
  - Starts the production server for the Next.js project.

### Linting

- **`npm run lint:eslint`**

  - Runs ESLint to check for and potentially fix linting issues in JavaScript and TypeScript files.

- **`npm run lint:stylelint`**

  - Runs Stylelint to check for and potentially fix linting issues in CSS files.

- **`npm run lint`**
  - Combines linting commands for ESLint and Stylelint, running them sequentially.

### Code Formatting

- **`npm run format`**
  - Uses Prettier to automatically format code files in the project.

### Type Checking

- **`npm run type-check`**

  - Runs TypeScript compiler in type-checking mode without emitting any files.

- **`npm run type-check:watch`**
  - Runs TypeScript compiler in type-checking mode with watch mode enabled.

### Git Hooks

- **`npm run prepare`**
  - Executes the Husky CLI's "prepare" script. Husky is a tool for handling Git hooks.

## Contributing

We welcome contributions from the community to help improve and grow our project. Whether you're a developer, designer, tester, or simply an enthusiast, we appreciate your efforts.

### Ways to Contribute

There are several ways you can contribute to SourceJump:

1. **Code Contributions:** Help us improve the codebase by fixing bugs, adding new features, or enhancing existing ones.

2. **Documentation:** Contribute to our documentation to make it more comprehensive and user-friendly.

3. **Bug Reporting:** Report bugs, issues, or suggest improvements through our issue tracker.

4. **Feature Requests:** Share your ideas for new features or improvements.

5. **Community Involvement:** Join discussions on our [Discord server](https://discord.com/invite/nP5YzB3), help answer questions, and engage with other contributors.

## Bug Reports

If you've found a problem with the website, please [open an issue](https://github.com/sourcejump/website/issues)!

## License

This project is licensed under the MIT License.
