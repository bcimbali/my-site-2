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
  ${({
    theme: {
      components: { nav },
      layout,
      mediaQuery,
      themeColors
    }
  }) => css`
    align-items: center;
    border-bottom: 1px solid ${themeColors.headings};
    display: flex;
    height: ${nav.mobileHeight};
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
${({ theme: { components: { nav }, layout, mediaQuery, nav } }) => css`
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
      height: ${nav.desktopHeight};
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
