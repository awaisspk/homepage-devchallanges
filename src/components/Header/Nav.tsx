import {Flex} from '@components/Flex';
import {styled} from '@stitches';
import NextLink from 'next/link';
import {SetStateAction} from 'react';

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
    backgroundColor: 'white',
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
  position: 'absolute',
  right: 0,
  bottom: 0,
  width: '0%',
  background: 'CurrentColor',
  height: 2,
  borderRadius: '$full',
  transition: 'all 300ms ease-in-out',
});

const NavLink = styled('li', {
  listStyle: 'none',
  position: 'relative',
  '& a': {
    fontFamily: '$primary',
    fontWeight: '$500',
    fontSize: '1.1rem',
    color: 'rgba(51, 51, 51, 1)',
  },

  '&:hover': {
    [`& ${Underline}`]: {
      left: 0,
      right: 'auto',
      width: '100%',
    },
  },
});

type Props = {
  isActive: boolean;
  setisActive: React.Dispatch<SetStateAction<boolean>>;
};

export const Link = ({isActive, setisActive}: Props) => {
  return (
    <Wrapper active={isActive}>
      <Nav gap="8">
        {links.map((link, i) => (
          <NavLink key={i}>
            <NextLink href={link.src}>
              <a onClick={() => setisActive((state) => !state)}>{link.name}</a>
            </NextLink>
            <Underline />
          </NavLink>
        ))}
      </Nav>
    </Wrapper>
  );
};
