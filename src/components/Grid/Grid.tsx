import {styled} from '@stitches';
import {gap} from '@components/Flex/gap';

export const Grid = styled('div', {
  display: 'grid',

  variants: {
    gap,
  },
});
