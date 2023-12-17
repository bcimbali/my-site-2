import styled, { css } from 'styled-components';
import React from 'react';
import Link from 'next/link';

type ButtonTypes = {
  disabled?: boolean;
  href?: string;
  label?: string;
  target?: string;
  type?: 'button' | 'reset' | 'submit';
};

const buttonStyles = css`
  ${({ theme: { colors, mediaQuery, spacing, typography } }) => css`
    background: ${colors.white};
    border: 1px solid ${colors.white};
    border-radius: 0.5rem;
    color: ${colors.blue};
    font-size: ${typography.mobile[0]};
    padding: ${spacing[-3]};
    text-align: center;
    transition:
      background 0.2s,
      color 0.2s;

    &:disabled,
    &:disabled&:hover {
      background: ${colors.white};
      color: ${colors.blue};
      cursor: not-allowed;
      opacity: 0.5;
    }

    &:hover {
      background: ${colors.blue};
      color: ${colors.white};
      cursor: pointer;
    }

    ${mediaQuery('lg')(`
      font-size: ${typography.desktop[0]};
    `)}
  `}
`;

const ButtonLink = styled(Link)<ButtonTypes>`
  ${buttonStyles};
`;

const ButtonComponent = styled.button`
  ${buttonStyles};
`;

const Button = ({ disabled, href, label = 'submit', target, type = 'submit' }: ButtonTypes) => {
  if (!!href) {
    return (
      <ButtonLink href={href} disabled={disabled} target={target} type="button">
        {label}
      </ButtonLink>
    );
  } else {
    return (
      <ButtonComponent type={type} disabled={disabled}>
        {label}
      </ButtonComponent>
    );
  }
};

export default Button;
