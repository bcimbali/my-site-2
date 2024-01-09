## Typography 📰

The default export in `typography.ts` generates the mobile & desktop typography.

The function takes 2 config objects of the same format, one for desktop and the other for mobile:

```typescript
  desktopSettings: {
    scale?: number;
    bodyLineHeight?: number;
    headingLineHeight?: number;
    baseRem?: number;
  };
  mobileSettings: {
    scale?: number;
    bodyLineHeight?: number;
    headingLineHeight?: number;
    baseRem?: number;
  };
```

`baseRem` - The base rem value to derive all typography from. _(setting it to 1 means `1rem`, or `16px`)_

`scale` - The [typographic scale](https://typescale.com/) used to derive values _(`1.333`, `1.25`, etc.)_.

`bodyLineHeight` - The CSS `line-height` value to use for body text _(`1.5`, etc)_

`headingLineHeight` - The CSS `line-height` value to use for headings _(`1.5`, etc)_

The function to calculate the typographic scale can be imported, if you need to crunch the numbers anywhere. Currently, I'm importing it into the `darkTheme.ts`:

```typescript
import { genTypographicScale } from '@/styling/typography';

...

const textSizes = genTypographicScale({ scale: 1.333 });
```
