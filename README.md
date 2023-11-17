<div align="center">
  <h1>My Portfolio 🗃️</h1>
</div>

---

## ⚡ Live Link ⚡

[Live Deploy](https://my-site-2-six.vercel.app/)

## 🏗️ Built with 🏗️

- Next.js
- Typescript
- Styled Components
- Svgr

## 🚦 Getting Started 🚦

1. Clone the repo.
2. Run a `yarn install`.
3. Run a `yarn dev`.
4. View the site in your browser at `http://localhost:3000/`.

## 📚 Documentation📚

### Theming 🎨

A global theme is applied via the Styled Components' `ThemeProvider`.

##### View Current Theme Values

A quick way to view the current theme values is to just `console.log` the theme in the `src/app/theme-provider.tsx` file:

##### Theme File Structure

All global theming is done inside the `src/styling` directory. Here is a breakdown of the `styling/` dir:

```
 └──  styling/
 │  └────  themes/
 │  │  └────  darkTheme.ts
 │  ├────  globalStyles.ts
 │  ├────  layout.ts
 │  └────  utils.ts
```

`themes/` - A directory to house all the possible themes in the app. The files in here are essentially the culmination of the other theme files in the parent `styling/` directory. Themes exported from here are inserted into the global ThemeProvider. Currently, there is only the `darkTheme.ts` but more will be added soon.

`globalStyles.ts` - All global styles; the global typography is set here, reusable classes, and other global settings live here.

`layout.ts` - All global page layout settings live here; the breakpoints, reusable media queries, global `12, 8, & 4` column grid settings, and the navbar heights live here.

`utils.ts` - A catch all for handy/reusable styling settings or functions. Things like global CSS transition speed or things such as resubale hover settings live here.

##### Using Theme in Local Components

To use the global theme in a component local style, import it into your component, and use the theme values directly in your `CSS`:

```jsx
const OuterNav = styled.nav`
  ${({ theme: { layout, mediaQuery, nav, themeColors } }) => css`
    align-items: center;
    border-bottom: 1px solid ${themeColors.headings};
    display: flex;
    height: ${nav.mobileNavHeight};
    justify-content: center;
    padding: 0 ${layout.xs.margin};
    ...
  `}
`;
```

##### Breakpoints 📐:

```jsx
const breakpoints = {
  xxs: '0px',
  xs: '320px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1400px'
} as const;
```

##### Media Queries 🔎:

All media queries in this project are mobile-first. That means that the global `mediaQuery` function is a `min-width` query.

The `mediaQuery` function has one required argument, which is a key of the `breakpoints` - `'md'`, `'xxl'` etc.

and using the `mediaQuery()`:

```jsx
${({ theme: { layout, mediaQuery, nav } }) => css`
  ...
    ${mediaQuery('xs')(`
      padding: 0 ${layout.xs.margin};
    `)}

    ${mediaQuery('sm')(`
      padding: 0 ${layout.sm.margin};
    `)}

    ${mediaQuery('md')(`
      padding: 0 ${layout.md.margin};
    `)}

    ${mediaQuery('lg')(`
      height: ${nav.desktopNavHeight};
    `)}

    ${mediaQuery('xl')(`
      padding: 0 ${layout.xl.margin};
    `)}

    ${mediaQuery('xxl')(`
      padding: 0 ${layout.xxl.margin};
    `)}
  `}
`;
```

### Icons 🌐

This repo uses the `svgr/cli` to convert svg icons into flexible TSX components. To add an icon:

1. Export the `SVG` from Figma.
2. Add the raw `SVG` as a file in the `src/icons/raw`.
3. In the root directory of this project, run `yarn icons`.
4. This command will run through all the SVG files in the `/raw` directory and create new icons as converted TSX files in the `/tsx` directory. Pre-existing `SVG` icons will be ignored.
5. They can then be used in throughout the app like this:

```jsx
import Hamburger from 'src/icons/tsx/hamburger';

const ExampleUseCase = () => {
  return (
    <Container>
      <InnerComponent>

      <Hamburger color="#bade10" /> // <- optional color can be passed in.
    </Container>
  )
}
```

If you need to tweak how the icons are generated, which default props are passed in, check out the [svgr CLI options](https://react-svgr.com/docs/options/).
