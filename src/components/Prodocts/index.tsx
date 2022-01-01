import {Box} from '@components/Box';
import {Link} from '@components/Buttons';
import {Flex} from '@components/Flex';
import {Grid} from '@components/Grid';
import {H2} from '@components/Typography';
import {Product} from './Product';

const data = [
  {
    category: 'Full stack applications',
    title: 'Smart home dashboard',
    imgSrc: '/images/smarthome.jpg',
  },
  {
    category: 'UI/UX design',
    title: 'Onboard application',
    imgSrc: '/images/onboard.png',
  },
  {
    category: 'Mobile application',
    title: 'Booking system',
    imgSrc: '/images/booking.png',
  },
  {
    category: 'Front End application',
    title: 'Juice product page',
    imgSrc: '/images/juice-product.png',
  },
];

export const Products = () => {
  return (
    <Flex flow="col" as="section" gap="7">
      <H2
        css={{
          fontSize: 'clamp(1.5rem, 3vw + 0.5rem, 2rem)',
          fontWeight: '$500',
          width: 'min(15ch,100%)',
        }}
      >
        We offer high demand services
      </H2>
      <Grid
        css={{
          gap: '$10',
          '@bp2': {
            gap: '$3',
            gridTemplateColumns: '1fr 1fr',
          },
        }}
      >
        {data.map((d, i) => (
          <Box
            key={`${d.title}`}
            css={{
              '@bp2': {
                paddingBottom: i % 2 !== 0 ? '100px' : '0px',
              },
            }}
          >
            <Product {...d} />
          </Box>
        ))}
      </Grid>
      <Link
        href="#"
        css={{
          alignSelf: 'end',
          fontWeight: '$500',
          '@bp2': {
            marginTop: '-80px',
          },
        }}
      >
        see more
      </Link>
    </Flex>
  );
};
