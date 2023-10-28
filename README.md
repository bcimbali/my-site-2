# My Site

## Built with:

- Next.js
- Styled Components
- Svgr

## Getting Started:

1. Clone the repo.
2. Run a `yarn install`.
3. Run a `yarn dev`.
4. View the site in your browser at `http://localhost:3000/`.

## Docs:

### Theming

This repo uses Styled Components and has a global theme applied via the ThemeProvider.

To quickly view the theme values, add a console log for the theme in the `src/app/theme-provider.tsx` file:

`console.log('In theme-provider.tsx, this is theme: ', theme);`

### Icons

This repo uses the `svgr/cli` to convert svg icons into flexible TSX components. To add an icon:

1. Export the SVG from Figma or get the svg file from wherever you choose.
2. Add the raw svg as a file in the `src/icons/raw`.
3. In the root directory of this project, run a `yarn convertSvgs`.
4. This command will run through all the SVG files in the `/raw` directory and create them as TSX files in the `/tsx` directory. Pre-existing SVG icons will be ignored.

If you need to tweak how the icons are generated, which default props are passed in, please refer to the [svgr CLI options](https://react-svgr.com/docs/options/) here.
