'use client';

import styled, { css } from 'styled-components';
import React from 'react';

const StyledDiv = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  grid-column: 1/-1;
  justify-content: center;
`;

const PageTitle = styled.h1`
  ${({ theme: { mediaQuery, spacing, themeColors } }) => css`
    color: ${themeColors.fg};
    margin-bottom: ${spacing[0]};

    ${mediaQuery('lg')(`
      margin-bottom: ${spacing[4]};
    `)}
  `}
`;

const TypographyContainer = styled.div`
  ${({ theme: { mediaQuery, typography } }) => css`
    border: 1px dotted white;
    display: flex;
    flex-direction: column;
    gap: ${typography.mobile.settings.verticalRhythmSpacing};
    width: 100%;

    * {
      border: 1px dotted white;
    }

    ${mediaQuery('lg')(`
      gap: ${typography.desktop.settings.verticalRhythmSpacing};
    `)}
  `}
`;

const TestContainer = styled.div`
  ${({ theme: { mediaQuery, typography } }) => css`
    margin-top: 3rem;
    border: 1px dotted white;
    display: grid;
    gap: ${typography.mobile.settings.verticalRhythmSpacing};

    ${mediaQuery('lg')(`
      gap: ${typography.desktop.settings.verticalRhythmSpacing};
    `)}
  `}
`;

const TypographyPage = () => {
  return (
    <StyledDiv>
      <PageTitle>Typography</PageTitle>
      <TypographyContainer>
        <h1>This is an h1 tag.</h1>
        <h2>This is an h2 tag.</h2>
        <h3>This is an h3 tag.</h3>
        <h4>This is an h4 tag.</h4>
        <h5>This is an h5 tag.</h5>
        <p>This is a p tag.</p>
      </TypographyContainer>

      <TestContainer>
        <h1>This is an h1 tag.</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
        <h2>This is an h2 tag.</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
        <h3>This is an h3 tag.</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
        <h3>This is an h3 tag.</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
      </TestContainer>
    </StyledDiv>
  );
};

export default TypographyPage;
