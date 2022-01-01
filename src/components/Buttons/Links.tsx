import {styled} from '@stitches';

export const Underline = styled('div', {
  position: 'absolute',
  right: 0,
  bottom: 0,
  width: '0%',
  background: 'CurrentColor',
  height: 2,
  borderRadius: '$full',
  transition: 'all 500ms ease-in-out',
});

export const StyledLink = styled('a', {
  color: 'rgba(45, 156, 219, 1)',
  fontFamily: '$primary',
  fontWeight: '$400',
  fontSize: '1rem',
  width: 'fit-content',
  position: 'relative',
  overflow: 'hidden',

  '&:hover': {
    [`${Underline}`]: {
      left: 0,
      right: 'auto',
      width: '100%',
    },
  },
});

type LinkProps = React.ComponentProps<typeof StyledLink>;

export const Link = (props: LinkProps) => {
  const {children} = props;
  return (
    <StyledLink {...props}>
      {children}
      <Underline />
    </StyledLink>
  );
};
