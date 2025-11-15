npm install -D tailwindcss postcss autoprefixer concurrently
npx tailwindcss init -p


3) Create input.css (source for Tailwind)

Create file views/input.css with exactly:
@tailwind base;
@tailwind components;
@tailwind utilities;
