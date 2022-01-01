import {Flex} from '@components/Flex';
import {CardProps, ServicesCard} from '@components/Services/ServicesCard';
import {H2} from '@components/Typography';
import {styled} from '@stitches';
import {Pen, CodeIcon, Database} from './icons';

const data: CardProps[] = [
  {
    icon: <Pen />,
    color: '#2D9CDB',
    title: 'UI/UX Design',
    content:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock',
  },
  {
    icon: <CodeIcon />,
    color: '#27AE60',
    title: 'UI/UX Design',
    content:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock',
  },
  {
    icon: <Database />,
    color: '#EB5757',
    title: 'UI/UX Design',
    content:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock',
  },
];

const CardContainer = styled('div', {
  display: 'grid',
  gap: '1em',

  '@bp2': {
    gridTemplateColumns: '1fr 1fr',
  },

  '@bp4': {
    gridTemplateColumns: '1fr 1fr 1fr',
  },
});

export const Services = () => {
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
      <CardContainer>
        {data.map((d, i) => (
          <ServicesCard {...d} key={i} />
        ))}
      </CardContainer>
    </Flex>
  );
};
