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
[![React][React.js]][React-url] [![TypeScript][TypeScript.js]][TypeScript-url] [![Vite][Vite.js]][Vite-url] [![React Router DOM][React Router DOM.js]][React Router DOM-url] [![Zustand][Zustand.js]][Zustand-url] [![@tanstack/react-query][@tanstack/react-query.js]][@tanstack/react-query-url] [![Ant Design (antd)][Antd.js]][Antd-url] [![Masonic][Masonic.js]][Masonic-url] [![Sass (SCSS-модули)][Sass.js]][Sass-url] [![clsx][clsx.js]][clsx-url] [![axios][axios.js]][axios-url] [![react-icons][react-icons.js]][react-icons-url] [![react-error-boundary][react-error-boundary.js]][react-error-boundary-url] [![Supabase][Supabase.js]][Supabase-url] [![Pexels API][Pexels API.js]][Pexels API-url] [![ESLint][ESLint.js]][ESLint-url] [![Prettier][Prettier.js]][Prettier-url] [![Husky][Husky.js]][Husky-url] [![Feature-Sliced Design (FSD)][FSD.js]](https://feature-sliced.design/ru/)

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

<!-- MARKDOWN LINKS -->

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[TypeScript.js]: https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org/
[Vite.js]: https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white
[Vite-url]: https://vitejs.dev/
[React Router DOM.js]: https://img.shields.io/badge/React%20Router%20DOM-CA4245?style=for-the-badge&logo=react-router&logoColor=white
[React Router DOM-url]: https://reactrouter.com/
[Zustand.js]: https://img.shields.io/badge/Zustand-2F4F7F?style=for-the-badge&logo=zustand&logoColor=white
[Zustand-url]: https://zustand.surge.sh/
[@tanstack/react-query.js]: https://img.shields.io/badge/@tanstack/react--query-FFC107?style=for-the-badge&logo=react-query&logoColor=white
[@tanstack/react-query-url]: https://react-query.tanstack.com/
[Antd.js]: https://img.shields.io/badge/Ant%20Design-0170FE?style=for-the-badge&logo=ant-design&logoColor=white
[Antd-url]: https://ant.design/
[Masonic.js]: https://img.shields.io/badge/Masonic-3498DB?style=for-the-badge&logo=masonic&logoColor=white
[Masonic-url]: https://masonic.github.io/
[Sass.js]: https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white
[Sass-url]: https://sass-lang.com/
[clsx.js]: https://img.shields.io/badge/clsx-22B8EB?style=for-the-badge&logo=clsx&logoColor=white
[clsx-url]: https://github.com/lukeed/clsx
[axios.js]: https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white
[axios-url]: https://axios-http.com/
[react-icons.js]: https://img.shields.io/badge/React%20Icons-22B8EB?style=for-the-badge&logo=react-icons&logoColor=white
[react-icons-url]: https://react-icons.github.io/react-icons/
[react-error-boundary.js]: https://img.shields.io/badge/React%20Error%20Boundary-22B8EB?style=for-the-badge&logo=react-error-boundary&logoColor=white
[react-error-boundary-url]: https://github.com/bvaughn/react-error-boundary
[Supabase.js]: https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white
[Supabase-url]: https://supabase.com/
[Pexels API.js]: https://img.shields.io/badge/Pexels%20API-FF69B4?style=for-the-badge&logo=pexels&logoColor=white
[Pexels API-url]: https://www.pexels.com/api/
[ESLint.js]: https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white
[ESLint-url]: https://eslint.org/
[Prettier.js]: https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white
[Prettier-url]: https://prettier.io/
[Husky.js]: https://img.shields.io/badge/Husky-8B9467?style=for-the-badge&logo=husky&logoColor=white
[Husky-url]: https://github.com/typicode/husky
[FSD.js]: https://img.shields.io/badge/Feature--Sliced%20Design%20(FSD)-3498DB?style=for-the-badge&logo=feature-sliced-design&logoColor=white
[FSD-url]: https://feature-sliced.design/ru/
