# My Site

Built with:

- Next.js
- Styled Components
- Svgr

## Helpful Tips:

### Adding icons

This repo uses the `svgr/cli` to convert svg icons into flexible TSX components. To add an icon:

1. Export the SVG from Figma or get the svg file from wherever you choose.
2. Add the raw svg as a file in the `src/icons/raw`
3. In the root directory of this project, run a `yarn convertSvgs`
4. This command will run through all the SVG files in the `/raw` directory and create them as TSX files in the `/tsx` directory. Pre-existing SVG icons will be ignored.

If you need to tweak how the icons are generated, which default props are passed in, please refer to the [svgr CLI options](https://react-svgr.com/docs/options/) here.
