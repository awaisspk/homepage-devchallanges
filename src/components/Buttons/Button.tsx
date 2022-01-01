import {styled} from '@stitches';
import {motion, Variants} from 'framer-motion';
import React from 'react';

const StyledButton = styled(motion.button, {
  border: 'none',
  color: 'rgba(242, 242, 242, 1)',
  fontFamily: 'Inter',
  fontSize: '$2',
  fontWeight: '$500',
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '1em',
  userSelect: 'none',
  WebkitTapHighlightColor: 'transparent',
  backgroundColor: 'rgba(45, 156, 219, 1)',
  py: '$4',
  px: '$7',

  '@supports selector(:focus-visible)': {
    '&:focus-visible': {
      outline: 'none',
      boxShadow:
        '0 20px 40px hsla(176, 68%, 64%,0.5) 0 0 0 3px  hsla(176, 68%, 64%,0.3)',
    },
  },

  variants: {
    variant: {
      gray: {
        color: '#828282',
        py: '$3',
        borderRadius: '0.8em',
        backgroundColor: 'rgba(224, 224, 224, 1)',
        '&:hover': {
          color: 'white',
          backgroundColor: 'rgba(45, 156, 219, 1)',
        },
      },
    },
  },
});

type StyledButtonProps = React.ComponentProps<typeof StyledButton>;

export const Button: React.FC<StyledButtonProps> = ({children, ...rest}) => {
  const buttonVariants: Variants = {
    idle: {
      scale: 1,
    },
    hover: {
      scale: 1.05,
    },
    tap: {
      scale: 0.98,
    },
  };

  return (
    <>
      <StyledButton
        variants={buttonVariants}
        initial="idle"
        whileHover="hover"
        whileTap="tap"
        {...rest}
      >
        {children}
      </StyledButton>
    </>
  );
};
