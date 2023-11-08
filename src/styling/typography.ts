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

// Mobile - 1.200 Modular Scale, Minor 3rd.
// Desktop - 1.333 Modular Scale, Perfect 4th.
const typography = {
  mega: {
    xs: {
      fontSize: '2.986rem', // 47.78px
      lineHeight: '100%'
    },
    lg: {
      fontSize: '5.61rem', // 89.76px
      lineHeight: '150%'
    }
  },
  h1: {
    xs: {
      fontSize: '2.488rem', // 39.81px
      lineHeight: '150%'
    },
    lg: {
      fontSize: '4.209rem', // 67.34px
      lineHeight: '100%'
    }
  },
  h2: {
    xs: {
      fontSize: '2.074rem', // 33.18px
      lineHeight: '150%'
    },
    lg: {
      fontSize: '3.157rem', // 50.52px
      lineHeight: '100%'
    }
  },
  h3: {
    xs: {
      fontSize: '1.728rem', // 27.65px
      lineHeight: '150%'
    },
    lg: {
      fontSize: '2.369rem', // 37.90px
      lineHeight: '100%'
    }
  },
  h4: {
    xs: {
      fontSize: '1.44rem', // 23.04px
      lineHeight: '150%'
    },
    lg: {
      fontSize: '1.777rem', // 28.43px
      lineHeight: '100%'
    }
  },
  h5: {
    xs: {
      fontSize: '1.2rem', // 19.20px
      lineHeight: '150%'
    },
    lg: {
      fontSize: '1.333rem', // 21.33px
      lineHeight: '100%'
    }
  },
  h6: {
    xs: {
      fontSize: '1.2rem', // 19.20px
      lineHeight: '150%'
    },
    lg: {
      fontSize: '1.333rem', // 21.33px
      lineHeight: '100%'
    }
  },
  p: {
    xs: {
      fontSize: '1rem', // 16px
      lineHeight: '150%'
    },
    lg: {
      fontSize: '1rem', // 16px
      lineHeight: '150%'
    }
  }
} as const;

export default typography;
