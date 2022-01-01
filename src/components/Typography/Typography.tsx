import {styled, css} from '@stitches';

const text = css({
  color: 'rgba(51, 51, 51, 1)',

  variants: {
    size: {
      1: {fontSize: '$1'},
      2: {fontSize: '$2'},
      3: {fontSize: '$3'},
      4: {fontSize: '$4'},
      5: {fontSize: '$5'},
      6: {fontSize: '$6'},
      7: {fontSize: '$7'},
      8: {fontSize: '$8'},
      9: {fontSize: '$9'},
    },
  },
});

export const Text = styled('span', text, {
  color: 'rgba(130, 130, 130, 1)',
  fontSize: '0.9rem',
});

export const Quote = styled('q', text);
export const ListItem = styled('li', text);
export const Small = styled('small', text);
export const Deleted = styled('del', text);
export const H1 = styled('h1', text);
export const Paragraph = styled('p', text, {
  fontSize: '0.9rem',
  '@bp2': {
    fontSize: '1rem',
  },
});

export const H2 = styled('h2', text, {
  lineHeight: '1.4',
});

export const H3 = styled('h3', text);
export const H4 = styled('h4', text);
export const H5 = styled('h5', text);
export const H6 = styled('h6', text);

// declare additional styles where necessary
export const Ins = styled('ins', text, {textDecoration: 'none'});
export const Em = styled('em', text, {fontStyle: 'italic'});
export const Strong = styled('strong', text, {fontWeight: '$2'});
export const Mark = styled('mark', text, {backgroundColor: '$yellow3'});

export const Title = styled('h1', {
  color: 'rgba(51, 51, 51, 1)',
  fontSize: 'clamp(1.5rem, 5vw - 0.25rem, 3rem)',
  width: 'min(16ch,100%)',
  lineHeight: '1.2',
});
