# mkz.dev Astro Base

## Install

```sh
pnpm install
pnpm dev
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `pnpm install`         | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |
| `pnpm format`          | Format files using Prettier                      |

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   ├── icons/
│   │   └── img/
│   ├── components/
│   │   └── Header.astro
│   ├── content/
│   │   └── config.ts
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.scss
└── package.json
```

Astro looks for `.astro` or `.md` / `.mdx` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

`src/components/` is where we like to put components.

Any static assets, like images, can be placed in the `public/` directory.

[Content collections](https://docs.astro.build/en/guides/content-collections/) are placed here and registered in the `src/content/config.ts`.

If you need to load a custom icon from an svg. You can place it inside `/src/assets/icons`.
For more information visit the documentation for the [astro-icon](https://www.astroicon.dev/) package.

## Content

### Navigation

Navigation structure is implemented within `/src/components/Header.astro`.

### Content Grid Layout

The Content in this Example is structured and contained with a layout Breakout method.
You can find the definition in `/src/styles/base/_content.scss`.

This pattern exposes a limitation. We loose the ability to float elements.
For example, you can not float an image on the side and wrap some text around it.

If you create pages with the `/src/layouts/DefaultLayout.astro` all sections will always by default have a max-width of 70rem or 1120px. You can change this inside `/src/styles/global.scss` with the `--max-content-width` variable.

### Content Elements

TBD

Inispired by [shadcn/ui](https://ui.shadcn.com/) and [accessible-astro](https://accessible-astro.netlify.app/)
