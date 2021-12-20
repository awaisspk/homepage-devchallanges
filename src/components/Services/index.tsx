import {Flex} from '@components/Flex';
import {CardProps, ServicesCard} from '@components/Services/ServicesCard';
import {H2, H3} from '@components/Typography';
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

export const Services = () => {
  return (
    <Flex
      flow="col"
      as="section"
      css={{mt: '100px', marginX: 'auto', width: 'min(1100px,100%)'}}
      gap="7"
    >
      <H2
        css={{
          fontSize: 'clamp(1.5rem, 3vw + 0.5rem, 2rem)',
          fontWeight : '$500',
          width: 'min(15ch,100%)',
        }}
      >
        We offer high demand services
      </H2>
      <Flex
        flow="row"
        wrap="wrap"
        // gap="5"
        main="spaceBtw"
      >
        {data.map((d, i) => (
          <ServicesCard {...d} key={i} />
        ))}
      </Flex>
    </Flex>
  );
};
