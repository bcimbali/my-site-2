// Get descending rem sizes by ratio (e.g '1rem', '0.75rem' etc.):
const genDescendingDegrees = ({ base, scale }: { base?: number; scale: number }) => {
  const descendingDegrees = [-1, -2, -3];
  let lastDescendingValue = base || 1;

  const descendingValues = descendingDegrees.map((degree) => {
    const nextValue = lastDescendingValue / scale;
    lastDescendingValue = nextValue;
    return [degree, `${nextValue.toFixed(3)}rem`];
  });
  return descendingValues.reverse();
};

// Get ascending rem sizes by ratio (e.g '1rem', '1.333rem' etc.):
const genAscendingValues = ({ base, scale }: { base?: number; scale: number }) => {
  const ascendingDegrees = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  let lastAscendingValue = base || 1;

  const increasingValues = ascendingDegrees.map((degree) => {
    const nextValue = lastAscendingValue * scale;
    lastAscendingValue = nextValue;
    return [degree, `${nextValue.toFixed(3)}rem`];
  });

  return increasingValues;
};

// Combine descedings & ascending sizes in one object:
export const genTypographicScale = ({
  base = 1,
  bodyLineHeight = 1.5,
  headingLineHeight = 1.5,
  scale = 1.333
}: {
  base?: number;
  bodyLineHeight?: number;
  headingLineHeight?: number;
  scale: number;
}) => {
  const descendingValues = genDescendingDegrees({ base, scale });
  const ascendingValues = genAscendingValues({ base, scale });

  // Get base vertical rhythm spacing:
  // https://designmodo.com/vertical-rhythm/
  const verticalRhythmSpacing = `${base * bodyLineHeight}rem`;

  // House all settings within generated sizes:
  const settings = [
    ['settings'],
    { base, bodyLineHeight, headingLineHeight, scale, verticalRhythmSpacing }
  ];

  // Combine everything and return in one object:
  const combinedValues = [...descendingValues, ...ascendingValues, settings];
  return Object.fromEntries(combinedValues);
};

// TODO:
// Way to override individual tags if need be.
// Remove mega.
// Add safe fallbacks / defaults.
// Add sensible vertical rhythm values based off of verticalRhythmSpacing.
const typography = ({
  desktopSettings,
  mobileSettings
}: {
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
}) => {
  const desktop = genTypographicScale({
    scale: desktopSettings?.scale || 1,
    base: desktopSettings?.baseRem || 1,
    bodyLineHeight: desktopSettings?.bodyLineHeight || 1.5,
    headingLineHeight: desktopSettings?.headingLineHeight || 1.5
  });
  const mobile = genTypographicScale({
    scale: mobileSettings?.scale || 1,
    base: mobileSettings?.baseRem || 1,
    bodyLineHeight: mobileSettings?.bodyLineHeight || 1.5,
    headingLineHeight: mobileSettings?.headingLineHeight || 1.5
  });
  return {
    desktop,
    mobile,
    tags: {
      mega: {
        xs: {
          fontSize: mobile[5],
          lineHeight: '100%'
        },
        lg: {
          fontSize: desktop[5],
          lineHeight: '150%'
        }
      },
      h1: {
        xs: {
          fontSize: mobile[4],
          lineHeight: mobileSettings.headingLineHeight
        },
        lg: {
          fontSize: desktop[4],
          lineHeight: desktopSettings.headingLineHeight
        }
      },
      h2: {
        xs: {
          fontSize: mobile[3],
          lineHeight: mobileSettings.headingLineHeight
        },
        lg: {
          fontSize: desktop[3],
          lineHeight: desktopSettings.headingLineHeight
        }
      },
      h3: {
        xs: {
          fontSize: mobile[2],
          lineHeight: mobileSettings.headingLineHeight
        },
        lg: {
          fontSize: desktop[2],
          lineHeight: desktopSettings.headingLineHeight
        }
      },
      h4: {
        xs: {
          fontSize: mobile[1],
          lineHeight: mobileSettings.headingLineHeight
        },
        lg: {
          fontSize: desktop[1],
          lineHeight: desktopSettings.headingLineHeight
        }
      },
      h5: {
        xs: {
          fontSize: mobile[0],
          lineHeight: mobileSettings.headingLineHeight
        },
        lg: {
          fontSize: desktop[0],
          lineHeight: desktopSettings.headingLineHeight
        }
      },
      h6: {
        xs: {
          fontSize: mobile[0],
          lineHeight: mobileSettings.headingLineHeight
        },
        lg: {
          fontSize: desktop[0],
          lineHeight: desktopSettings.headingLineHeight
        }
      },
      p: {
        xs: {
          fontSize: '1rem', // 16px
          lineHeight: mobileSettings.bodyLineHeight
        },
        lg: {
          fontSize: '1rem', // 16px
          lineHeight: desktopSettings.bodyLineHeight
        }
      }
    }
  };
};

export default typography;
