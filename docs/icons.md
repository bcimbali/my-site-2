### Icons 🌐

This repo uses the `svgr/cli` to convert svg icons into flexible TSX components. To add an icon:

1. Export the `SVG` from Figma.
2. Add the raw `SVG` as a file in the `src/icons/raw`.
3. In root directory, run `yarn icons`.
4. This command will run through all the SVG files in the `/raw` directory and create new icons as converted TSX files in the `/tsx` directory. Pre-existing `SVG` icons will be ignored.
5. They can then be used in throughout the app like this:

```jsx
import Hamburger from 'src/icons/tsx/hamburger';

const ExampleUseCase = () => {
  return (
    <Container>
      <InnerComponent>

      {/* Pass in at least a width to get the icon to show. */}
      <Hamburger width="24px" height="24px" />

      {/* Optional color prop is used for stroke color. */}
      <Hamburger width="24px" color="#bade10" />

      {/* Optional fill prop is used for fill color. */}
      <LogoIcon width="24px" color="#f12EFF" fill="#377379" /> // <-
    </Container>
  )
}
```

If you need to tweak how the icons are generated, which default props are passed in, check out the [svgr CLI options](https://react-svgr.com/docs/options/).
