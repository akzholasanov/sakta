<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/akzholasanov/sakta">
    <img src="/public/web-app-manifest-512x512.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Sakta</h3>

  <p align="center">
    A web application inspired by Pinterest, designed to help you organize and manage your ideas visually.
    <br />
    <br />
    <a href="https://sakta.vercel.app/">View Demo</a>
    &middot;
    <a href="https://github.com/akzholasanov/sakta/issues/new?labels=bug">Report Bug</a>
    &middot;
    <a href="https://github.com/akzholasanov/sakta/issues/new?labels=enhancement">Request Feature</a>
  </p>
</div>

<!-- ABOUT THE PROJECT -->

### Built With
* [![React][React.js]][React-url]
* [![TypeScript][TypeScript.js]][TypeScript-url]
* [![Vite][Vite.js]][Vite-url]
* [![React Router DOM][React Router DOM.js]][React Router DOM-url]
* [![Zustand][Zustand.js]][Zustand-url]
* [![@tanstack/react-query][@tanstack/react-query.js]][@tanstack/react-query-url]
* [![Ant Design (antd)][Antd.js]][Antd-url]
* [![Masonic][Masonic.js]][Masonic-url]
* [![Sass (SCSS-модули)][Sass.js]][Sass-url]
* [![Tailwind CSS][Tailwind.css.js]][Tailwind.css-url]
* [![clsx][clsx.js]][clsx-url]
* [![axios][axios.js]][axios-url]
* [![react-icons][react-icons.js]][react-icons-url]
* [![react-error-boundary][react-error-boundary.js]][react-error-boundary-url]

* [![Supabase][Supabase.js]][Supabase-url]
* [![Pexels API][Pexels API.js]][Pexels API-url]

* [![ESLint][ESLint.js]][ESLint-url]
* [![Prettier][Prettier.js]][Prettier-url]
* [![Husky][Husky.js]][Husky-url]
* [![lint-staged][lint-staged.js]][lint-staged-url]
* [![typescript-eslint][typescript-eslint.js]][typescript-eslint-url]
* [![vite-plugin-svgr][vite-plugin-svgr.js]][vite-plugin-svgr-url]

* [![Feature-Sliced Design (FSD)][FSD.js]](https://feature-sliced.design/ru/)

<!-- GETTING STARTED -->

## Getting Started

### Installation

1. Get a free API Key at [https://api.pexels.com](https://api.pexels.com)
2. Clone the repo
   ```sh
   git clone https://github.com/akzholasanov/sakta.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `.env`
   ```js
   VITE_API_URL = 'https://api.pexels.com';
   VITE_API_KEY = 'YOUR_API_KEY';
   ```
5. Change git remote url to avoid accidental pushes to base project
   ```sh
   git remote set-url origin https://github.com/akzholasanov/sakta.git
   git remote -v # confirm the changes
   ```
6. Run the app
   ```sh
   npm run dev
   ```
