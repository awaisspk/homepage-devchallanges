import {MenuButton} from '@components/Buttons/MenuBtn';
import {Flex} from '@components/Flex';
import {styled} from '@stitches';
import {useState} from 'react';
import {Link} from './Nav';

const StyledHeader = styled('header', {
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  zIndex: '1',
});

const Nav = styled('nav', Flex, {
  width: '100%',
});

export const Header = () => {
  const [state, setState] = useState(false);

  return (
    <StyledHeader>
      <Nav as="nav" main="spaceBtw" cross="center">
        <Logo />
        <Link isActive={state} setisActive={setState} />
        <MenuButton state={state} onClick={setState} />
      </Nav>
    </StyledHeader>
  );
};

const StyledLogo = styled('div', {
  color: 'rgba(51, 51, 51, 1)',
  userSelect: 'none',
  fontWeight: '$700',
  fontSize: '$6',
});

const Logo = () => {
  return <StyledLogo>Awais.</StyledLogo>;
};
