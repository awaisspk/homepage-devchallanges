import {Button} from '@components/Buttons';
import {Flex} from '@components/Flex';
import {H2, Paragraph} from '@components/Typography';
import {styled} from '@stitches';
import {ReactNode} from 'react';

const Wrapper = styled('section', Flex, {
  flexBasis: 'min(300px,100%)',
  borderRadius: '1.2em',
  py: '$5',
  px: '$5',
  transition: 'all 300ms',
  '&:hover': {
    boxShadow: '0px 10px 30px 0px #3333331A',
  },

  '@bpmax2': {
    flexGrow: '1',
  },
});

export type CardProps = {
  icon: ReactNode;
  title: string;
  content: string;
  color: string;
};

export const ServicesCard = (props: CardProps) => {
  const {icon, title, content, color} = props;

  return (
    <Wrapper flow="col" cross="start" gap="5">
      <Flex
        center
        css={{
          backgroundColor: color,
          padding: '$3',
          size: '50px',
          borderRadius: '0.5em',
        }}
      >
        {icon}
      </Flex>
      <H2 size="4">{title}</H2>
      <Paragraph css={{color: '#4F4F4F', width: 'min(30ch,100%)'}}>
        {content}
      </Paragraph>
      <Button variant="gray">Get started</Button>
    </Wrapper>
  );
};
