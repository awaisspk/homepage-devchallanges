import {styled} from '@stitches';

const VisuallyHidden = styled('span', {
  border: '0 !important',
  clip: 'rect(1px, 1px, 1px, 1px) !important',
  clipPath: 'inset(50%) !important',
  height: '1px !important',
  margin: '-1px !important',
  overflow: 'hidden !important',
  padding: '0 !important',
  position: 'absolute !important',
  width: '1px !important',
  whiteSpace: 'nowrap !important',
});

export {VisuallyHidden};
