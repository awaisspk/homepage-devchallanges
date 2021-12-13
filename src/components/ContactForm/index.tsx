import {Button} from '@components/Buttons';
import {Flex} from '@components/Flex';
import {styled} from '@stitches';
import {Text} from '@components/Typography';

const StyledForm = styled('form', Flex, {
  width: 'min(350px, 100%)',
});

const Input = styled('input', {
  all: 'unset',
  width: '90%',
  color: 'rgba(189, 189, 189, 1)',
});

export const ContactForm = () => {
  return (
    <StyledForm
      flow="col"
      gap="1"
      onClick={(e) => {
        e.preventDefault();
      }}
    >
      <Text>Want us to contact you?</Text>
      <Flex
        css={{
          backgroundColor: 'rgba(242, 242, 242, 1)',
          pl: '20px',
          pr: '5px',
          py: '$1',
          borderRadius: '1em',
        }}
        gap="2"
      >
        <Input placeholder="Email" />
        <Button>Join</Button>
      </Flex>
    </StyledForm>
  );
};
