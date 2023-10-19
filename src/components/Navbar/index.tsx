import styled from 'styled-components';

const OuterNav = styled.nav`
  background-color: green;
  height: 60px;
`;

const Navbar = () => {
  return <OuterNav>Outer Nav</OuterNav>;
};

export default Navbar;
