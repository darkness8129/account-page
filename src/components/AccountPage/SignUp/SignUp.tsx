import React from 'react';
import styled from '@emotion/styled';

const StyledSignUp = styled.article`
  width: 67%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  font-family: Cera Pro, sans-serif;
`;

const Container = styled.div`
  width: 100%;
  max-width: 300px;
`;

const Title = styled.h2`
  margin-bottom: 30px;
  text-align: center;
  font-weight: 500;
  font-size: 22px;
  line-height: 28px;
  color: black;
  opacity: 0.9;
`;

const InputLabel = styled.label`
  display: inline;
  font-size: 12px;
  line-height: 15px;
  color: #585858;
`;

const Prompt = styled(InputLabel)`
  opacity: 0.7;
`;

const Input = styled.input`
  width: 100%;
  margin-top: 6px;
  padding: 12px 14px;
  font-family: Roboto, sans-serif;
  color: black;
  font-size: 12px;
  line-height: 15px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 3px;
`;

const Paragraph = styled.p`
  margin-bottom: 19px;
`;

const FlexParagraph = styled(Paragraph)`
  display: flex;
`;

const CheckboxLabel = styled.label`
  font-family: Roboto, sans-serif;
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;
  color: #585858;

  & > a {
    color: #585858;
  }
`;

const Checkbox = styled.input`
  margin-right: 10px;
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  color: white;
  font-family: Roboto, sans-serif;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background: black;
  }
`;

const Question = styled.span`
  display: block;
  text-align: center;
  font-family: Roboto, sans-serif;
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;
  color: rgba(0, 0, 0, 0.6);

  & > a {
    color: #585858;
  }
`;

const SignUp = () => {
  return (
    <StyledSignUp>
      <Container>
        <Title>Get Started!</Title>
        <form>
          <Paragraph>
            <InputLabel htmlFor="username">Username</InputLabel>
            <Prompt>(letters, numbers, "." and "_", 3-16 symbols)</Prompt>
            <Input
              type="text"
              name="username"
              placeholder="champagnepapi"
              required
            />
          </Paragraph>
          <Paragraph>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input
              type="email"
              name="email"
              placeholder="drake@email.com"
              required
            />
          </Paragraph>
          <Paragraph>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              type="password"
              name="password"
              placeholder="••••••••••••••••••••••••••"
              required
            />
          </Paragraph>
          <FlexParagraph>
            <Checkbox
              type="checkbox"
              id="agreement"
              name="agreement"
              required
            />
            <CheckboxLabel htmlFor="agreement">
              By using app, you agree to our <a href="#">privacy policy</a> and
              <a href="#"> terms of service</a>.
            </CheckboxLabel>
          </FlexParagraph>
          <Paragraph>
            <Button type="submit">Sign Up</Button>
          </Paragraph>
          <Paragraph>
            <Question>
              Already registered? <a href="#">Sign In</a>
            </Question>
          </Paragraph>
        </form>
      </Container>
    </StyledSignUp>
  );
};

export default SignUp;
