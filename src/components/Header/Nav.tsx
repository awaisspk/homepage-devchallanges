import {Flex} from '@components/Flex';
import {styled} from '@stitches';
import NextLink from 'next/link';

const links = [
  {name: 'Home', src: '#'},
  {name: 'Services', src: '#'},
  {name: 'Our Works', src: '#'},
  {name: 'Clients', src: '#'},
  {name: 'Contact', src: '#'},
];

const Wrapper = styled('div', {
  '@bpmax2': {
    position: 'absolute',
    zIndex: '2',
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    backgroundColor: '$primary',
    transform: 'translateY(-100%)',
    transition: '0.4s',
  },
  variants: {
    active: {
      true: {
        transform: 'translateY(0%)',
      },
    },
  },
});

const Nav = styled('ul', Flex, {
  '@bpmax2': {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minH: '100vh',
  },
});

const Underline = styled('div', {
  backgroundColor: 'rgba(51, 51, 51, 1)',
  height: '3px',
  width: '0%',
  transition: '0.5s',
  borderRadius: '100px',
});

const NavLink = styled('li', {
  listStyle: 'none',
  '& a': {
    fontFamily: '$primary',
    fontWeight: '$500',
    fontSize: '1.1rem',
    color: 'rgba(51, 51, 51, 1)',
  },

  '&:hover': {
    [`& ${Underline}`]: {
      width: '100%',
    },
  },
});

export const Link = ({isActive}: {isActive: boolean}) => {
  return (
    <Wrapper active={isActive}>
      <Nav gap="8">
        {links.map((link, i) => (
          <NavLink key={i}>
            <NextLink href={link.src}>
              <a>{link.name}</a>
            </NextLink>
            <Underline />
          </NavLink>
        ))}
      </Nav>
    </Wrapper>
  );
};
