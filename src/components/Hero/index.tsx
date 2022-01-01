import {Flex} from '@components/Flex';
import {Link} from '@components/Buttons';
import {H2, Paragraph, Title} from '@components/Typography';
import {styled} from '@stitches';
import Image from 'next/image';
import {ContactForm} from '@components/ContactForm';

const ImageContainer = styled('div', {
  position: 'relative',
  overflow: 'hidden',
  borderRadius: '1em',
  width: '100%',
  height: '250px',

  '@bp2': {
    borderRadius: '2em',
    height: '360px',
  },
});

export const Hero = () => {
  return (
    <Flex as="section" cross="center" flow="col" gap="10" css={{mt: '$10'}}>
      <Flex flow="col" gap="6" css={{width: 'min(900px, 90%)'}}>
        <Link href="#">Unhappy with your website?</Link>
        <Title>We create beautiful and fast web services</Title>
      </Flex>
      <ImageContainer>
        <Image
          src="/images/heroImage.jpg"
          alt="hero section image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          width={1332}
          height={360}
        />
      </ImageContainer>
      <Flex flow="col" gap="3" as="section" css={{width: 'min(900px, 90%)'}}>
        <H2
          css={{
            fontSize: 'clamp(1.5rem, 5vw - 0.25rem, 3rem)',
            width: 'min(12ch,100%)',
          }}
        >
          Strong, emotion and purpose
        </H2>
        <Paragraph css={{width: 'min(35ch,100%)'}}>
          We help transform your ideas into real world applications that will
          outperform your toughest competition and help you achieve strategic
          goals in short period of time
        </Paragraph>
        <ContactForm />
      </Flex>
    </Flex>
  );
};
