# Local Development Guide

Follow these steps to run the FuelMails application on your local machine.

## Prerequisites

- **Node.js**: Version 18.x or 20.x (Recommended)
- **npm**: Comes with Node.js
- **Git**: To manage your code (optional)

## Setup Instructions

1. **Extract/Copy Files**: Ensure all files from this project are in a dedicated folder on your computer.
2. **Install Dependencies**: Open your terminal in the project root and run:
   ```bash
   npm install
   ```
3. **Configure Environment**: 
   - Create a `.env.local` file in the root directory.
   - Add any necessary environment variables (e.g., Firebase config or API keys if you've added specific services).
4. **Run the Development Server**:
   ```bash
   npm run dev
   ```
5. **View the App**: Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Scripts

- `npm run dev`: Starts the development server with Hot Module Replacement.
- `npm run build`: Creates an optimized production build of your application.
- `npm run start`: Starts the production server after building.
- `npm run lint`: Runs ESLint to check for code quality issues.
- `npm run typecheck`: Runs TypeScript's compiler to check for type errors.

## Adding Your Images
Remember to place your local images in the `public/images/` folder as specified in the `src/app/lib/placeholder-images.json` file to see them appear in the app.
