import styled, { css } from 'styled-components';
import Link from 'next/link';
import pageData from '@/lib/pageData';

type DropdownContainerTypes = {
  $isOpen: boolean;
};

const DropdownContainer = styled.div<DropdownContainerTypes>`
  ${({ theme: { colors, mq, nav }, $isOpen }) => css`
    background-color: ${colors.white};
    height: 100vh;
    max-height: 0;
    position: absolute;
    top: ${nav.mobileNavHeight};
    transition: max-height 0.5s;
    width: 100%;

    ${$isOpen &&
    css`
      max-height: 2000px;
    `}

    ${mq('lg')(`
      display: none;
    `)}
  `}
`;

const MobileDropdown = ({ isOpen }: { isOpen: boolean }) => {
  return <DropdownContainer $isOpen={isOpen}>Mobile Nav</DropdownContainer>;
};

export default MobileDropdown;
