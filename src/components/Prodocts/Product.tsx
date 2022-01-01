import {Flex} from '@components/Flex';
import {Paragraph, Text} from '@components/Typography';
import * as AspectRatio from '@radix-ui/react-aspect-ratio';
import {styled} from '@stitches';
import Image from 'next/image';

const Box = styled('div', {
  borderRadius: '5%',
  overflow: 'hidden',
  transition: '200ms',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
});

type Props = {
  category: string;
  title: string;
  imgSrc: string;
};

export const Product = ({title, category, imgSrc}: Props) => {
  return (
    <Flex flow="col" gap="5">
      <Box>
        <AspectRatio.Root ratio={1 / 1}>
          <Image layout="fill" objectFit="cover" src={imgSrc} alt={title} />
        </AspectRatio.Root>
      </Box>
      <Flex flow="col">
        <Text css={{fontSize: '$0'}}>{category}</Text>
        <Paragraph
          css={{fontWeight: '$500', fontSize: '$4', '@bp2': {fontSize: '$5'}}}
        >
          {title}
        </Paragraph>
      </Flex>
    </Flex>
  );
};
