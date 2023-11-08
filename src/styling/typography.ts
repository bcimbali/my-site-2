// Get descending rem sizes by ratio (e.g '1rem', '0.75rem' etc.):
const genDescendingDegrees = ({ scale }: { scale: number }) => {
  const descendingDegrees = [-1, -2, -3];
  let lastDescendingValue = 1;

  const descendingValues = descendingDegrees.map((degree) => {
    const nextValue = lastDescendingValue / scale;
    lastDescendingValue = nextValue;
    return [degree, `${nextValue.toFixed(3)}rem`];
  });
  return descendingValues.reverse();
};

// Get ascending rem sizes by ratio (e.g '1rem', '1.333rem' etc.):
const genAscendingValues = ({ scale }: { scale: number }) => {
  const ascendingDegrees = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  let lastAscendingValue = 1;

  const increasingValues = ascendingDegrees.map((degree) => {
    const nextValue = lastAscendingValue * scale;
    lastAscendingValue = nextValue;
    return [degree, `${nextValue.toFixed(3)}rem`];
  });

  return increasingValues;
};

// Combine descedings & ascending sizes in one object:
export const genTypographicScale = ({ scale }: { scale: number }) => {
  const descendingValues = genDescendingDegrees({ scale });
  const ascendingValues = genAscendingValues({ scale });

  const combinedValues = [...descendingValues, ...ascendingValues];
  return Object.fromEntries(combinedValues);
};

// TODO: Add base value.
// Way to override individual tags if need be.
// Remove mega.
// Add safe fallbacks / defaults.
const typography = ({
  desktopSettings,
  mobileSettings
}: {
  desktopSettings: { scale?: number; bodyLineHeight?: number; headingLineHeight?: number };
  mobileSettings: { scale?: number; bodyLineHeight?: number; headingLineHeight?: number };
}) => {
  const desktop = genTypographicScale({ scale: desktopSettings?.scale || 1 });
  const mobile = genTypographicScale({ scale: mobileSettings?.scale || 1 });
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
